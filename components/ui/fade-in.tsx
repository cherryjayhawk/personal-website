"use client";
import React, { useRef, ReactNode, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useInView from '@/components/hook/use-in-view';

interface AnimationProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

const FadeInForwards: React.FC<AnimationProps> = ({ children, duration = 0.8, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useInView(ref, 0.8);
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDelayed(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasAnimated && isDelayed ? 1 : 0 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

const FadeInRight: React.FC<AnimationProps> = ({ children, duration = 0.8, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useInView(ref, 0.2);
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDelayed(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: hasAnimated && isDelayed ? 1 : 0, x: hasAnimated && isDelayed ? 0 : 50 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

const FadeInLeft: React.FC<AnimationProps> = ({ children, duration = 0.8, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useInView(ref, 0.8);
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDelayed(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: hasAnimated && isDelayed ? 1 : 0, x: hasAnimated && isDelayed ? 0 : -50 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

const FadeInUp: React.FC<AnimationProps> = ({ children, duration = 0.8, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useInView(ref, 0.8);
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDelayed(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: hasAnimated && isDelayed ? 1 : 0, y: hasAnimated && isDelayed ? 0 : 50 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export { FadeInForwards, FadeInRight, FadeInLeft, FadeInUp };