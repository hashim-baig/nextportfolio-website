import React from 'react';

const HeroGreetingSectionTemplate = () => {
    return (
        <section className="flex flex-col gap-5 py-5">
            <div className="heading-wrapper text-6xl leading-16 tracking-tighter font-medium text-center">
                <p className="max-w-lg">Hey, I’m Hashim! </p>
                <p className="max-w-xl">Welcome to my little space on the web!</p>
            </div>

            <div className="heading-wrapper leading-8 text-center">
                <p className="max-w-3xl mx-auto">
                    I’m a frontend engineer who loves building fast, accessible, and secure
                    applications. This site is my personal playground where I try new ideas, work on
                    fun projects, and share what I learn along the way.
                </p>
            </div>
        </section>
    );
};
export default HeroGreetingSectionTemplate;
