import React from 'react';
import Image from 'next/image';

const brandIcons = ['react', 'nextdotjs', 'tailwindcss', 'shadcnui', 'jest', 'javascript'];

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

            <div className="grid gap-10 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 mx-auto justify-items-center py-20">
                {brandIcons.map((icon) => (
                    <Image
                        key={icon}
                        src={`/brand-icons/${icon}.svg`}
                        alt={icon}
                        width={50}
                        height={50}
                    />
                ))}
            </div>
        </>
    );
};
export default SkillsSectionTemplate;
