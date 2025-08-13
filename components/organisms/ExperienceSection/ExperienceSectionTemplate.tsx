import React from 'react';
import ExperienceTimeline from '@/components/molecules/ExperienceTimeline';

const experienceData = [
    {
        organization: 'Qualwebs',
        duration: 'May 2025 - Jul 2025',
        role: [
            {
                title: 'Software Engineer',
                summary: [
                    'I built and optimized reusable React components, cutting code duplication by 40% and improving delivery speed across teams.',
                    'I implemented React Query for state management, reducing redundant API calls by 35% and making apps more responsive.',
                    'I enhanced performance with virtualization, lazy loading, and Suspense imports, decreasing page load times by 30% and improving Lighthouse scores.',
                    'I standardized shared UI components with Shadcn/ui, ensuring consistent theming and a better developer experience.',
                ],
            },
        ],
    },
    {
        organization: 'Altariz Solutions',
        duration: 'Sep 2021 - Apr 2025',
        role: [
            {
                title: 'Software Engineer',
                summary: [
                    'I developed scalable React.js and Next.js applications, boosting page load speeds by 30% through efficient state handling and lazy loading.',
                    'I integrated Redux Toolkit to cut API calls by 40%, increasing reliability and efficiency.',
                    'I led an accessibility initiative that achieved WCAG 2.1 compliance, improving inclusivity and user retention.',
                    'I raised code coverage to 90% with React Testing Library and Jest, reducing bugs and improving release quality.',
                    'I worked closely with backend teams to optimize REST API responses, reducing latency by 25%.',
                ],
            },
            {
                title: 'Frontend Developer Intern',
                summary: [
                    'I built reusable React components, reducing development time by 20%.',
                    'I migrated legacy JavaScript to TypeScript, cutting runtime errors by 35%.',
                    'I improved rendering performance and Lighthouse scores by 15% through optimization techniques.',
                ],
            },
        ],
    },
];

const ExperienceSectionTemplate = () => {
    return (
        <>
            <section className="flex flex-col gap-5 pt-5">
                <div className="heading-wrapper">
                    <p className="heading-title">Experience</p>
                </div>

                <div className="heading-wrapper text-center">
                    <p className="heading-subtitle">
                        Highlights from my journey building and improving real-world applications.
                    </p>
                </div>
            </section>

            <div className="relative overflow-clip md:px-20 mt-10 mb-10">
                <div className="flex flex-col gap-10  heading-wrapper">
                    {experienceData.map((item, index) => (
                        <div key={index} className="flex justify-between">
                            <div className="hidden md:block">
                                <p className="experience-title">{item.organization}</p>
                                <p className="text-gray-600">{item.duration}</p>
                            </div>
                            <div className="md:w-[50%] mx-2">
                                {item.role.map((role, roleIndex) => (
                                    <div key={roleIndex} className="p-1">
                                        <p
                                            className={`${roleIndex !== 0 ? 'pt-5' : ''} pb-2 experience-title`}
                                        >
                                            {role.title}
                                        </p>
                                        <ul className="list-none flex flex-col gap-2">
                                            {role.summary.map((sum, index) => (
                                                <li key={index} className="text-gray-600 ">
                                                    {sum}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)] mx-2">
                    <ExperienceTimeline />
                </div>
            </div>
        </>
    );
};
export default ExperienceSectionTemplate;
