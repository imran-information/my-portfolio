import { CloudDownload } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const DownloadCvButton = () => {
    return (
        <Button
            variant="outlined"
            sx={{
                backgroundColor: '#1b1f24',
                color: '#13bbff',
                border: '1px solid #13bbff',
                fontSize: '15px',
                fontWeight: '600', 
                transition: 'all 0.50s ease',
                '&:hover': {
                    backgroundColor: '#13bbff',
                    borderColor: '#13bbff',
                    color: '#1b1f24',
                    boxShadow: '0 0 20px #13bbff',

                }
            }}
            startIcon={<CloudDownload />}
        >
            <Link target='_blank' to='https://drive.google.com/file/d/1pOioVGFyLgIpHP6I_9w2uxYt3kR-Titj/view?usp=sharing'>Download CV</Link>
        </Button>
    )
}

export default DownloadCvButton;