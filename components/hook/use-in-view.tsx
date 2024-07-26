"use client"
import { useEffect, useState, MutableRefObject } from 'react';

const useInView = (ref: MutableRefObject<Element | null>, threshold: number = 0.8): boolean => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, hasAnimated]);

  return hasAnimated;
};

export default useInView;
