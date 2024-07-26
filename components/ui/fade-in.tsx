"use client"
import React, { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import useInView from '@/components/hook/use-in-view';

interface AnimationProps {
  children: ReactNode;
  duration?: number;
}

const FadeInForwards: React.FC<AnimationProps> = ({ children, duration = 0.8 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useInView(ref, 0.8);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 50 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

const FadeInRight: React.FC<AnimationProps> = ({ children, duration = 0.8 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useInView(ref, 0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 50 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

const FadeInLeft: React.FC<AnimationProps> = ({ children, duration = 0.8 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useInView(ref, 0.8);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -50 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export { FadeInForwards, FadeInRight, FadeInLeft };