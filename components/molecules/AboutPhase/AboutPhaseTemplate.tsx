import React from 'react';
import Image from 'next/image';
import ShadowImageBox from '@/components/molecules/ShadowImageBox';

type AboutPhaseTemplateProps = {
    title: string;
    description: string;
    imageSrc: string;
    reverse?: boolean;
};

const AboutPhaseTemplate = ({
    title,
    description,
    imageSrc,
    reverse = false,
}: AboutPhaseTemplateProps) => {
    return (
        <div
            className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} md:justify-around items-center gap-10`}
        >
            <div className="relative w-[200px] h-[250px]">
                <ShadowImageBox />
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className={`absolute left-0 top-0 ${reverse ? 'rotate-[8deg]' : 'rotate-[-8deg]'} rounded-lg object-cover shadow`}
                />
            </div>
            <div className="flex flex-col gap-2 md:w-[50%]">
                <p className="about-phase-title">{title}</p>
                <p className="about-phase-description">{description}</p>
            </div>
        </div>
    );
};

export default AboutPhaseTemplate;
