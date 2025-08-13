import React from 'react';
import SocialMenu from '@/components/molecules/SocialMenu';

const NavHeaderTemplate = () => {
    return (
        <>
            <section className="h-16 w-full items-center justify-between border-b border-border-primary/50 px-4 flex">
                <div>
                    <p className="font-caveat text-xl font-bold">#im</p>
                </div>

                <div className="max-w-fit">
                    <SocialMenu />
                </div>
            </section>
        </>
    );
};
export default NavHeaderTemplate;
