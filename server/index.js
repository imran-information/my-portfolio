const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

app.use(cors(['http://localhost:5173']));
app.use(express.json())

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
        await client.connect();
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