'use client';

import { useScroll, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export default function AboutTrackPattern() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const verticalPathRef = useRef<SVGPathElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const [pathLength, setPathLength] = useState(0);
    const [position, setPosition] = useState({ x: 145, y: 0 });

    useEffect(() => {
        if (!pathRef.current && !verticalPathRef.current) return;
        const length =
            pathRef.current?.getTotalLength() || verticalPathRef.current?.getTotalLength() || 0;
        setPathLength(length);
    }, []);

    useEffect(() => {
        if ((!pathRef.current && !verticalPathRef.current) || !pathLength) return;

        return scrollYProgress.on('change', (latest) => {
            const clampedProgress = Math.max(0, Math.min(latest, 1));
            if (latest > 0) {
                // Get the active path based on screen size
                const activePath =
                    window.innerWidth >= 1024 ? pathRef.current : verticalPathRef.current;
                if (!activePath) return;

                const point = activePath.getPointAtLength(pathLength * clampedProgress);
                setPosition({ x: point.x, y: point.y });
            }
        });
    }, [pathLength, scrollYProgress]);

    const pathData =
        'M 145 0.5 L 145 43 C 145 51.84 137.84 59 129 59 L 20 59 C 11.16 59 4 66.16 4 75 L 4 348 C 4 351 5 353 9 355 L 259 357 C 266 357 267 359 267 362 L 267 693 C 267 699 265 700 262 700 L 8 699 C 5 699 4 701 4 707 L 4 1000.99 C 4 1000.83 11.16 1000.99 20 1000.99 L 252 1001 C 256 1001 256 1003 256 1012 L 257 1357';
    return (
        <div ref={containerRef} className="overflow-hidden">
            <svg
                className="user-select-none pointer-events-none hidden lg:block"
                width="380"
                height="1357"
                viewBox="-10 -10 380 1357"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="purpleGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="15" result="blur" />
                        <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="0 0 0 0 0.423
                      0 0 0 0 0.278
                      0 0 0 0 1
                      0 0 0 0.6 0"
                        />
                    </filter>

                    {/* Create a mask using the path */}
                    <mask id="pathMask">
                        <path
                            d={pathData}
                            stroke="white"
                            strokeWidth="8"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </mask>

                    <filter
                        id="filter0_i_395_898"
                        x="0"
                        y="0.5"
                        width="380"
                        height="1357"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="0.75" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
                        />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_395_898" />
                    </filter>
                </defs>

                {/* Container for masked elements */}
                <g mask="url(#pathMask)">
                    {/* Glowing circle */}
                    <motion.circle
                        cx={position.x}
                        cy={position.y}
                        r="120"
                        fill="#6C47FF"
                        filter="url(#purpleGlow)"
                        opacity="0.5"
                        transition={{
                            type: 'spring',
                            damping: 20,
                            stiffness: 100,
                            mass: 0.5,
                        }}
                    />
                </g>

                {/* Path on top */}
                <g filter="url(#filter0_i_395_898)">
                    <path
                        ref={pathRef}
                        d={pathData}
                        stroke="#D6DADE"
                        strokeOpacity="0.24"
                        strokeWidth="8"
                        strokeLinejoin="round"
                    />
                </g>

                {/* Main circle on top */}
                <motion.circle
                    className="fill-indigo-600"
                    cx={position.x}
                    cy={position.y}
                    r="10"
                    transition={{
                        type: 'spring',
                        damping: 20,
                        stiffness: 100,
                        mass: 0.5,
                    }}
                />
            </svg>
        </div>
    );
}
