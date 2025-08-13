import type { Metadata } from 'next';
import { Caveat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import BgGradient from '@/components/atoms/BgGradient';
import SocialMenu from '@/components/molecules/SocialMenu';

import NavHeader from '@/components/molecules/NavHeader';
import React from 'react';

const zodiak = localFont({
    src: '../public/fonts/Zodiak-Variable.woff2',
    variable: '--font-zodiak',
    display: 'swap',
});

const caveat = Caveat({
    variable: '--font-caveat',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Hashim Baig | Frontend Engineer & Web Enthusiast',
    description:
        'Portfolio of Hashim Baig – Frontend Engineer specializing in React.js, Next.js, and building fast, accessible, and secure web applications. Explore my projects, skills, and journey in web development and cybersecurity.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${zodiak.variable} ${caveat.variable} antialiased `}>
                <NavHeader />
                <main className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
                    <div className="border-r bg-checkered"></div>
                    <div className="relative col-span-1">
                        <BgGradient />
                        {children}
                    </div>
                    <div className="border-l bg-checkered"></div>
                </main>
                <section className="border-t border-b p-10 pb-4 flex flex-col gap-5">
                    <p className="font-caveat text-xl font-bold">#im</p>

                    <p className="leading-5 text-gray-500 max-w-xs">
                        I am Hashim - a front-end developer. Thanks for checking out my site!
                    </p>

                    <div className="max-w-fit">
                        <SocialMenu />
                    </div>

                    <p className="text-gray-500">© 2025 Hashim Baig</p>
                </section>
            </body>
        </html>
    );
}
