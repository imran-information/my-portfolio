import { Typography } from "@mui/material";
import ShinyText from "../../ShinyText/ShinyText";

const SectionHeader = ({ text, secondLetter }) => {
  return (
    <Typography data-aos="fade-down" data-aos-duration="1500"
      variant="h4"
      sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'start' } }}
    > 
      <ShinyText
        text={text}
        secondLetter={secondLetter}
        disabled={false}
        speed={3} 
      />
      
    </Typography>
  );
}

export default SectionHeader;