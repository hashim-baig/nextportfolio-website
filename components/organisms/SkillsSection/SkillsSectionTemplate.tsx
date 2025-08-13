import React from 'react';
import Image from 'next/image';

const brandIcons = [
    'nextdotjs',
    'react',
    'javascript',
    'html5',
    'css',
    'tailwindcss',
    'shadcnui',
    'jest',
    // 'cypress',
    'git',
    'github',
    'intellijidea',
    // 'googlechrome',
    'lighthouse',
];

const SkillsSectionTemplate = () => {
    return (
        <>
            <section className="flex flex-col gap-5 py-5">
                <div className="heading-wrapper">
                    <p className="heading-title">Skills</p>
                </div>

                <div className="heading-wrapper text-center">
                    <p className="heading-subtitle">
                        A snapshot of the tools and technologies I use to bring ideas to life.
                    </p>
                </div>
            </section>

            <div className="grid gap-10 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-auto justify-items-center py-20 px-10">
                {brandIcons.map((icon) => (
                    <div key={icon} className="flex flex-col gap-2 items-center justify-center">
                        <Image src={`/brand-icons/${icon}.svg`} alt={icon} width={50} height={50} />
                        <p className="text-md text-secondary">{icon}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
export default SkillsSectionTemplate;
