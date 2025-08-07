import React from 'react';
import SocialMenu from '@/components/molecules/SocialMenu';

const NavHeaderTemplate = () => {
    return (
        <section className="flex items-center justify-between w-full px-10 my-2">
            <div>
                <p className="font-caveat text-xl font-bold">#im</p>
            </div>

            <div>
                <SocialMenu />
            </div>
        </section>
    );
};
export default NavHeaderTemplate;
