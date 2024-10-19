import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Fade } from '@mui/material';

interface AnimatedSectionProps {
    title: string;
    content: string;
}


const AnimatedSection: React.FC<AnimatedSectionProps> = ({ title, content }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box ref={ref} sx={{ my: 4, textAlign: 'center' }}>
            <Fade in={inView} timeout={500}>
                <div>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body1">{content}</Typography>
                </div>
            </Fade>
        </Box>
    );
};

export default AnimatedSection;
