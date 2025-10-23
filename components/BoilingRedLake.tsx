import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BoilingLakeScene() {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        const spawnBubble = () => {
            const bubble = document.createElement("div");
            const size = Math.random() * 40 + 30;
            const left = Math.random() * 100;
            const duration = 20;

            bubble.className =
                "absolute bottom-0 rounded-full backdrop-blur-sm bg-gradient-to-t from-red-800/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]";
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.bottom = `0px`; // start at lake bottom
            bubble.style.opacity = "0"; // start invisible
            bubble.style.transition = "opacity 0.15s ease-in"; // fade-in

            scene.appendChild(bubble);

            // small timeout to trigger opacity fade
            setTimeout(() => {
                bubble.style.opacity = "1";
                // start rising animation
                bubble.style.animation = `bubble-rise ${duration}s ease-in-out forwards`;
            }, 400); // 50–100ms delay feels natural

            // remove bubble after animation completes
            setTimeout(() => bubble.remove(), duration * 1000);
        };


        const interval = setInterval(() => {
            spawnBubble();
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={sceneRef}
            className="relative w-full h-svh overflow-hidden bg-linear-to-b from-purple-950/5 to-red-950/5"
        >
            {/* glowing atmospheric overlay */}
            <motion.div
                className="absolute inset-0 bg-red-700/5 mix-blend-screen"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            {/* bottom lake (10% of height) */}
            <div className="absolute bottom-0 w-full h-[6%] overflow-hidden">
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,160 C180,180 300,140 480,160 C660,180 780,140 960,160 C1140,180 1260,140 1440,160 L1440,320 L0,320 Z"
                        fill="url(#lavaGradient)"
                    />
                    <defs>
                        <linearGradient id="lavaGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#8b0000" /> {/* dark red top */}
                            <stop offset="100%" stopColor="#330000" /> {/* very dark red bottom */}
                        </linearGradient>
                    </defs>
                </svg>

                {/* subtle glow under lake */}
                <motion.div
                    className="absolute inset-0 bg-red-900/50 blur-xl"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div>


            <style jsx>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
          50% {
            filter: brightness(1.2);
          }
          100% {
            transform: translateY(-100svh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}
