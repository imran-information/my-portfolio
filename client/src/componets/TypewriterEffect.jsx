import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Typography, Box } from "@mui/material";
import "./Typewriter.css";

const TypewriterEffect = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [
                `I'm <span style="color:#13bbff;">Imran.</span>`,
                `I'm a <span style="color:#13bbff;">Web Developer.</span>`,
                `I create <span style="color:#13bbff;">amazing UI/UX.</span>`,
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <Box textAlign="" mt={1}>
            <Typography
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '5rem', lg: '38px', xl: '60px', '2xl': '5rem' } }}
            >
                <span ref={typedElement} />
            </Typography>

        </Box >
    );
};

export default TypewriterEffect;
