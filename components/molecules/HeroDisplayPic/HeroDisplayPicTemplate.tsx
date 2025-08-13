import React from 'react';
import Image from 'next/image';

const HeroDisplayPicTemplate = () => {
    return (
        <section className="flex flex-col items-center py-4">
            <div className="rounded-full p-6 border border-purple-secondary ">
                <div className="rounded-full p-2 border border-purple-primary">
                    <Image
                        src={'/hashim.jpg'}
                        alt={'hashim profile'}
                        width={100}
                        height={100}
                        className="rounded-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};
export default HeroDisplayPicTemplate;
