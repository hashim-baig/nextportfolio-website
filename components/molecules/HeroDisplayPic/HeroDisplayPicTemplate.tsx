import React from 'react';
import Image from 'next/image';

const HeroDisplayPicTemplate = () => {
    return (
        <section className="flex flex-col items-center py-4">
            <div className="rounded-full p-3 border border-blue-500">
                <div className="rounded-full p-1 border border-red-800">
                    <Image
                        src={'/hashim.jpg'}
                        alt={'hashim profile'}
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};
export default HeroDisplayPicTemplate;
