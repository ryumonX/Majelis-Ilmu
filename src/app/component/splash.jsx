import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SplashPage({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showEmeraldOverlay, setShowEmeraldOverlay] = useState(false);
  const [reverseEmeraldOverlay, setReverseEmeraldOverlay] = useState(false);

  useEffect(() => {
    const timeline = {
      showEmerald: 1500,
      hideEmerald: 2500,
      hideAll: 6000,
    };

    const showEmeraldTimer = setTimeout(() => setShowEmeraldOverlay(true), timeline.showEmerald);
    const reverseEmeraldTimer = setTimeout(() => setReverseEmeraldOverlay(true), timeline.hideEmerald);
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, timeline.hideAll);

    return () => {
      [showEmeraldTimer, reverseEmeraldTimer, hideTimer].forEach(clearTimeout);
    };
  }, [onComplete]);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden touch-none bg-emerald-950">
          {/* Animated Background Patterns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-eyes.png')] mix-blend-soft-light"
          />

          {/* Islamic Geometric Pattern */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-10 mix-blend-soft-light"
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full text-emerald-50/30"
              style={{ fill: 'currentColor' }}
            >
              {/* Hexagonal Grid Pattern */}
              <pattern 
                id="islamicPattern" 
                patternUnits="userSpaceOnUse" 
                width="10" 
                height="10"
              >
                <path 
                  d="M 0 5 L 5 0 L 15 0 L 20 5 L 15 10 L 5 10 Z
                       M 10 5 L 5 2.5 L 5 7.5 Z
                       M 15 7.5 L 15 2.5 L 10 5 Z
                       M 5 2.5 L 2.5 5 L 5 7.5 Z
                       M 15 2.5 L 17.5 5 L 15 7.5 Z"
                  fill="currentColor"
                />
              </pattern>
              
              <rect 
                width="100%" 
                height="100%" 
                fill="url(#islamicPattern)"
              />
              
              {/* Animated Rotating Elements */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <circle 
                  cx="50" 
                  cy="50" 
                  r="48" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  fill="none"
                  strokeDasharray="4 2"
                />
                <path 
                  d="M50,5 L55,20 L70,25 L55,30 L50,45 L45,30 L30,25 L45,20 Z"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  fill="none"
                />
              </motion.g>
            </svg>
            
            {/* Blur Overlay */}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5" />
          </motion.div>

          {/* Flowing Gradient Overlay */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{
              y: showEmeraldOverlay ? 0 : '100%',
              y: reverseEmeraldOverlay ? '100%' : 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute inset-0 bg-gradient-to-b from-emerald-400 via-emerald-600 to-emerald-900 z-20 mix-blend-multiply"
          />

          {/* Main Content Container */}
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
            {/* Animated Crescent Moon */}
            <motion.div
              initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 1.5,
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              className="mb-8 relative w-32 h-32 flex items-center justify-center" // Fixed size container
              style={{ willChange: 'transform, opacity' }} // Optimize for performance
            >
              {/* Moon Icon */}
              <FaMoon
                size={90}
                className="text-emerald-300 relative z-10 drop-shadow-lg"
              />

              {/* Circular Background */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5, // Sync with the moon animation
                  duration: 1.5,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-900 rounded-full z-0 shadow-xl"
                style={{ willChange: 'transform' }} // Optimize for performance
              />
            </motion.div>

            {/* Arabic Calligraphy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1.2,
              }}
              className="text-4xl md:text-6xl bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-transparent font-arabic mb-4"
            >
              ٱلسَّلَامُ عَلَيْكُمْ
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.0,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              className="text-3xl md:text-4xl font-bold text-emerald-50 mb-2 drop-shadow-lg"
            >
              Assalamualaikum
            </motion.h1>

            {/* Subtext with Animated Border */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 1.0,
              }}
              className="text-lg text-emerald-300 px-4 py-2 rounded-lg border-2 border-emerald-400/30 bg-emerald-900/20 backdrop-blur-sm"
            >
              Dewangga Mustika XII-RPL 1
            </motion.p>
          </div>

          {/* Geometric Pattern Overlay */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{
              duration: 2.5,
              ease: "easeOut"
            }}
            className="absolute inset-0 mix-blend-overlay"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

SplashPage.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SplashPage;