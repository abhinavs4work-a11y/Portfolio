"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.2], [0, -50]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.5], [50, -50]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
            Abhinav Srivastava
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light drop-shadow-md max-w-3xl text-balance">
            Product Marketing | GTM | SEO | Content & Demand Strategy
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-start text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl drop-shadow-lg leading-tight text-balance">
            Marketing professional with hands-on experience in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              B2B AI solutions.
            </span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 flex flex-col items-end text-right"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl drop-shadow-lg leading-tight text-balance">
            Building inbound demand through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              SEO and content.
            </span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
