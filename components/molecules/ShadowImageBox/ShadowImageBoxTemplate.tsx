import React from 'react';

const ShadowImageBoxTemplate = () => {
    return (
        <div className="group inline-block text-center">
            <div
                className="rounded-[20px] border border-border-primary p-2"
                style={{ width: 200, height: 250 }}
            >
                <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                ></div>
            </div>
        </div>
    );
};
export default ShadowImageBoxTemplate;
