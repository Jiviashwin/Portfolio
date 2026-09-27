import React, { useEffect, useState, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export default function AnimatedCounter({ from = 0, to, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
