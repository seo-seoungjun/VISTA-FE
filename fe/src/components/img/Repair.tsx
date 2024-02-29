import React, { useEffect } from 'react';
import {
  motion,
  useAnimate,
  useInView,
} from 'framer-motion/dist/framer-motion';

function Repair() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate('path', { pathLength: 1 }, { duration: 1, delay: 1 });
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
        d="M62.5 78.125H46.875V93.75"
        stroke="#BFFB4F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M94.4458 81.1792C92.7908 86.0156 89.5859 90.1707 85.3284 92.9997C81.0708 95.8287 75.9986 97.1735 70.8987 96.8254C65.7988 96.4773 60.9564 94.4559 57.1227 91.0746C53.2889 87.6934 50.6783 83.1414 49.6958 78.125"
        stroke="#BFFB4F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M81.25 65.625H96.875V50"
        stroke="#BFFB4F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M49.3042 62.5708C50.9592 57.7344 54.1641 53.5793 58.4216 50.7503C62.6792 47.9213 67.7514 46.5766 72.8513 46.9246C77.9512 47.2727 82.7936 49.2941 86.6273 52.6754C90.4611 56.0566 93.0717 60.6086 94.0542 65.625"
        stroke="#BFFB4F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M15.625 28.125V65.625H34.375"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M15.625 53.125L26.8292 41.9208C27.4096 41.34 28.0988 40.8793 28.8573 40.565C29.6158 40.2506 30.4289 40.0888 31.25 40.0888C32.0711 40.0888 32.8842 40.2506 33.6427 40.565C34.4012 40.8793 35.0904 41.34 35.6708 41.9208L38.0917 44.3417C38.7633 45.0125 39.5789 45.5216 40.4766 45.8302C41.3744 46.1389 42.3306 46.239 43.2728 46.1229C44.2149 46.0068 45.1183 45.6777 45.9143 45.1604C46.7102 44.6431 47.3779 43.9513 47.8667 43.1375L49.3583 40.6375"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <motion.path
        pathLength={0}
        d="M31.25 84.375H9.375C7.7174 84.375 6.12768 83.7165 4.95558 82.5444C3.78348 81.3723 3.125 79.7826 3.125 78.125V9.375C3.125 7.7174 3.78348 6.12768 4.95558 4.95558C6.12768 3.78348 7.7174 3.125 9.375 3.125H53.6625C55.3189 3.12535 56.9075 3.78326 58.0792 4.95417L70.0458 16.9208C71.2167 18.0925 71.8746 19.6811 71.875 21.3375V31.25"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}

export default Repair;
