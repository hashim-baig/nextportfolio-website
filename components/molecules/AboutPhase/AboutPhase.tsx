import React from 'react';
import AboutPhaseTemplate from './AboutPhaseTemplate';

type AboutPhaseProps = {
    title: string;
    description: string;
    imageSrc: string;
    reverse?: boolean;
};

const AboutPhase = ({ title, description, imageSrc, reverse = false }: AboutPhaseProps) => {
    // Add logic here

    return (
        <AboutPhaseTemplate
            title={title}
            description={description}
            imageSrc={imageSrc}
            reverse={reverse}
        />
    );
};

export default AboutPhase;
