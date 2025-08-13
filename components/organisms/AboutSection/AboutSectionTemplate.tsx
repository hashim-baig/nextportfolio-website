'use client';
import React, { useLayoutEffect, useState } from 'react';
import AboutPhase from '@/components/molecules/AboutPhase';
import AboutTrackPattern from '@/components/molecules/AboutTrackPattern';

const AboutPhaseData = [
    {
        phaseImage: '/programming-origins.png',
        title: 'Programming Origins',
        description:
            'I didn’t start out knowing I’d be a developer. My early studies were in aeronautics, but my curiosity for building things on the web took over. I began learning JavaScript, React, and the art of clean, efficient code — and I never looked back.',
    },
    {
        phaseImage: '/Finding_My_Way_to_Web.jpg',
        title: 'Finding My Way to Web',
        description:
            'Over the past 3+ years, I’ve worked on scalable web applications using React.js, Next.js, and TypeScript. I’ve helped speed up apps by 40%, made them more accessible for everyone, and improved user experiences that directly boosted engagement. From lazy loading to accessibility compliance, I enjoy solving performance puzzles that make products shine.',
    },
    {
        phaseImage: '/Life_Beyond_Code.jpg',
        title: 'Life Beyond Code',
        description:
            'Outside of work, I’m into learning about cybersecurity, building personal projects, and sharing my learning journey online. I’m also exploring music through guitar and enjoy hitting the gym to stay active.',
    },
    {
        phaseImage: '/These_Days.jpg',
        title: 'These Days',
        description:
            'Right now, I’m building my personal portfolio site (yes, the one you’re on!) and blogging about web development and cybersecurity. My focus is on combining great UX with secure, scalable software — and having fun while doing it.',
    },
];

const AboutSectionTemplate = () => {
    const [leftPos, setLeftPos] = useState(0);

    useLayoutEffect(() => {
        function updateLeft() {
            const width = window.innerWidth;
            if (width >= 1280) {
                // xl breakpoint
                setLeftPos(width - width * 0.65); // 30% from right
            } else if (width >= 1024) {
                // lg breakpoint
                setLeftPos(width - width * 0.65);
            } else if (width >= 768) {
                // md breakpoint
                setLeftPos(width - width * 0.65);
            } else {
                setLeftPos(0); // left:0 for small screens
            }
        }
        updateLeft();
        window.addEventListener('resize', updateLeft);
        return () => window.removeEventListener('resize', updateLeft);
    }, []);

    return (
        <>
            <section className="flex flex-col gap-5 py-5">
                <div className="heading-wrapper">
                    <p className="heading-title">About</p>
                </div>

                <div className="heading-wrapper text-center">
                    <p className="heading-subtitle">
                        Here’s a quick look at who I am and what I enjoy doing.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-20 py-10 md:py-20 px-10 md:px-0 relative">
                <div className="absolute left-0 top-0 max-w-fit z-[-1]" style={{ left: leftPos }}>
                    <AboutTrackPattern />
                </div>

                {AboutPhaseData.map((item, index) => (
                    <AboutPhase
                        key={index}
                        imageSrc={item.phaseImage}
                        title={item.title}
                        description={item.description}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </section>
        </>
    );
};
export default AboutSectionTemplate;
