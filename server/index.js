const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const nodemailer = require('nodemailer');
const { Resend } = require('resend');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
    'http://localhost:5173',
    'https://imran-portfolio-iota.vercel.app'
];

app.use(cors({
    origin: allowedOrigins,
}));

app.use(express.json())

// // Set up nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//     },
// });


// transporter.verify((error, success) => {
//     if (error) {
//         console.error("Transporter error:", error);
//     } else {
//         console.log("Transporter is ready:", success);
//     }
// });


// // Send email function
// const sendEmail = async (formData) => {
//     const mailOptions = {
//         from: process.env.GMAIL_USER,
//         to: process.env.GMAIL_USER,
//         subject: `Message from ${formData.name}`,
//         text: `Message: ${formData.message}\nEmail: ${formData.email}`,
//     };

//     const replyMailOptions = {
//         from: process.env.GMAIL_USER,
//         to: formData.email,
//         subject: `Thank you for contacting us, ${formData.name}`,
//         text: `Hi ${formData.name},\n\nThank you for your message! We'll get back to you shortly.\n\nMessage: ${formData.message}`,
//     };

//     try {
//         const info1 = await transporter.sendMail(mailOptions);
//         console.log('Email sent to you:', info1.response);

//         const info2 = await transporter.sendMail(replyMailOptions);
//         console.log('Reply email sent to sender:', info2.response);
//     } catch (error) {
//         console.error("Email send error:", error);
//     }
// };

const sendEmail = async ({ name, email, message }) => {
    const toYouMail = {
        from: 'Imran Portfolio <onboarding@resend.dev>',
        to: process.env.TO_EMAIL,
        subject: `Message from ${name}`,
        html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        `,
    };

    const replyToSender = {
        from: 'Imran Portfolio <onboarding@resend.dev>',
        to: email,
        subject: `Thanks for contacting, ${name}!`,
        html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! We received your message and will get back to you soon.</p>
        <hr />
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        `,
    };

    try {
        const sentToYou = await resend.emails.send(toYouMail);
        console.log("Sent to you:", sentToYou.id);

        const sentToSender = await resend.emails.send(replyToSender);
        console.log("Sent to sender:", sentToSender.id);

        return { success: true };
    } catch (err) {
        console.error("Email sending error:", err);
        return { success: false, error: err };
    }
};



// Contact route to handle form submissions
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log("Contact request received:", { name, email, message });

    const response = await sendEmail({ name, email, message });

    if (response.success) {
        res.status(200).json({ message: 'Message sent successfully!' });
    } else {
        res.status(500).json({ message: 'Failed to send email', error: response.error });
    }
});


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mf5r9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();
        const database = client.db('my-portfolio')
        const projectsCollection = database.collection('projects')

        app.get('/projects', async (req, res) => {
            const projectsInfo = await projectsCollection.find().toArray();
            console.log(projectsInfo);
            res.send(projectsInfo)
        })

        app.get("/projects/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const project = await projectsCollection.findOne(filter)
            res.send(project)
        })

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('My Portfolio Server')
})

app.listen(port, () => {
    console.log(`Personal Portfolio server listening on port ${port}`)
})