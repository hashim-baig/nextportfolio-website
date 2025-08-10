'use client';

import React from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const socials = [
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/hashim-baig-8204aa185/',
        icon: <FaLinkedin />,
    },
    {
        name: 'GitHub',
        url: 'https://gitlab.com/',
        icon: <FaGithub />,
    },
    {
        name: 'Resume',
        url: '/resume.pdf',
        icon: <FaFileAlt />,
    },
];

const SocialMenuTemplate = () => {
    const handleDownload = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <Menubar>
            {socials.map((item, index) => (
                <MenubarMenu key={index}>
                    <MenubarTrigger asChild>
                        <button onClick={() => handleDownload(item.url)} className="cursor-pointer">
                            {item.icon}
                        </button>
                    </MenubarTrigger>
                </MenubarMenu>
            ))}
        </Menubar>
    );
};

export default SocialMenuTemplate;
