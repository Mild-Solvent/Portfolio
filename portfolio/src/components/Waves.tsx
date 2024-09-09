'use client';

// src/components/Waves.tsx
import { useEffect, useRef } from 'react';

export default function Waves() {
    const wavesRef = useRef<SVGSVGElement>(null);
    const animationRef = useRef<number>();
    let scrollPosition = 0;
    let velocity = 0;

    useEffect(() => {
        const handleScroll = () => {
            const newScrollPosition = window.scrollY;
            velocity = newScrollPosition - scrollPosition;
            scrollPosition = newScrollPosition;

            if (!animationRef.current) {
                animationRef.current = requestAnimationFrame(animateWaves);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const animateWaves = () => {
        if (wavesRef.current) {
            const uses = wavesRef.current.querySelectorAll('use');
            uses.forEach((use, index) => {
                const currentX = parseFloat(use.getAttribute('x') || '48');
                const newX = currentX + velocity * (0.1 + index * 0.05);
                use.setAttribute('x', newX.toString());
            });
        }

        velocity *= 0.95; // Slow down the animation

        if (Math.abs(velocity) > 0.1) {
            animationRef.current = requestAnimationFrame(animateWaves);
        } else {
            animationRef.current = undefined;
        }
    };

    return (
        <div className="waves-container h-24 overflow-hidden fixed bottom-0 left-0 right-0 pointer-events-none">
            <svg ref={wavesRef} className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    <linearGradient id="smoothRainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff0000">
                            <animate attributeName="offset" values="0;1;0" dur="15s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="16.67%" stopColor="#ff7f00">
                            <animate attributeName="offset" values="0.1667;1.1667;0.1667" dur="15s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="33.33%" stopColor="#ffff00">
                            <animate attributeName="offset" values="0.3333;1.3333;0.3333" dur="15s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="50%" stopColor="#00ff00">
                            <animate attributeName="offset" values="0.5;1.5;0.5" dur="15s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="66.67%" stopColor="#0000ff">
                            <animate attributeName="offset" values="0.6667;1.6667;0.6667" dur="15s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="83.33%" stopColor="#8b00ff">
                            <animate attributeName="offset" values="0.8333;1.8333;0.8333" dur="15s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#ff00ff">
                            <animate attributeName="offset" values="1;2;1" dur="15s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="url(#smoothRainbow)" opacity="0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="url(#smoothRainbow)" opacity="0.5" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="url(#smoothRainbow)" opacity="0.3" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="url(#smoothRainbow)" opacity="1" />
                </g>
            </svg>
        </div>
    )
}
