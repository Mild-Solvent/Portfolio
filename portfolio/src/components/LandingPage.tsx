import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cover } from './ui/cover';

export default function LandingPage({ onEnter }: { onEnter: () => void }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(onEnter, 1000); // Adjust timing as needed
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <Cover>
          <button
            onClick={handleEnter}
            className="text-4xl font-bold text-white px-8 py-4 rounded-lg"
          >
            Enter Portfolio
          </button>
        </Cover>
      </motion.div>
    </div>
  );
}