import React, { useEffect } from 'react';
import {
  motion,
  useAnimate,
  useInView,
} from 'framer-motion/dist/framer-motion';

function Summary() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate('path', { pathLength: 1 }, { duration: 1.8, delay: 1 });
    }
  }, [isInView]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={scope}
    >
      <motion.path
        pathLength={0}
        d="M78.1084 9.375H9.3584C7.7008 9.375 6.11108 10.0335 4.93898 11.2056C3.76688 12.3777 3.1084 13.9674 3.1084 15.625V84.375C3.1084 86.0326 3.76688 87.6223 4.93898 88.7944C6.11108 89.9665 7.7008 90.625 9.3584 90.625H84.3584C86.016 90.625 87.6057 89.9665 88.7778 88.7944C89.9499 87.6223 90.6084 86.0326 90.6084 84.375V46.875M3.1084 28.125H56.2334"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M21.8584 53.125H40.6084M21.8584 71.875H62.4834M94.9251 26.9375L71.0792 50.7833L59.3584 53.125L61.7042 41.4083L85.5501 17.5625C86.1634 16.9483 86.8919 16.4611 87.6937 16.1287C88.4955 15.7962 89.355 15.6251 90.223 15.6251C91.091 15.6251 91.9505 15.7962 92.7523 16.1287C93.5541 16.4611 94.2825 16.9483 94.8959 17.5625L94.9251 17.5875C96.1637 18.8281 96.8594 20.5095 96.8594 22.2625C96.8594 24.0155 96.1637 25.6969 94.9251 26.9375Z"
        stroke="#A259FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}

export default Summary;
