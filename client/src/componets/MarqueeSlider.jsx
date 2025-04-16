import Marquee from "react-fast-marquee";
import SkillsCategories from "./SkillsCategories";

const MarqueeSlider = () => {
    return (
        <div className="bg-secondBg py-2  px-4 rounded-box">
            <Marquee pauseOnHover={true} >
                <SkillsCategories />
            </Marquee>
        </div>
    );
};

export default MarqueeSlider;