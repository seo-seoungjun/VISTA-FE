import React, { useEffect } from 'react';
import {
  motion,
  useAnimate,
  useInView,
} from 'framer-motion/dist/framer-motion';

function Infograpic() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate('path', { pathLength: 1 }, { duration: 1.5, delay: 1 });
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
        d="M96.8458 96.875H3.125V3.125"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M96.8457 45.8333C84.7611 48.4292 80.9749 27.0832 70.3945 26.0415C59.8141 24.9999 46.5882 50 36.0077 50C25.4272 50 17.4918 26.0415 4.26615 29.1665C3.88965 29.2555 3.53032 29.3715 3.18701 29.5128"
        stroke="#0ACF83"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M3.125 88.5417C16.1458 86.0633 35.4167 64.5833 45.8333 67.8879C56.25 71.1925 68.75 87.7154 77.0833 86.0633C85.4167 84.4108 95.8333 64.5833 95.8333 64.5833"
        stroke="#FF7262"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M96.8458 16.6667C94.2008 27.0833 83.62 62.5 67.7491 60.4167C51.8787 58.3333 49.2333 10.4167 36.0078 10.4167C16.8579 10.4167 27.7433 55.8183 3.18994 55.9733"
        stroke="#4044ED"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}

export default Infograpic;
