import React from 'react';
import Image from 'next/image';

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
                <Image src={imageSrc} alt={title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 md:w-[50%]">
                <p className="font-semibold">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AboutPhaseTemplate;
