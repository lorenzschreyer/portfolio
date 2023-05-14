import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="70"
      height="70"
      viewBox="0 0 1080 1080"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M890.31,590.82L563.58,264.09c-7.81-7.81-20.47-7.81-28.28,0l-42.56,42.56c-44.52,44.52-44.52,116.7,0,161.22l333.8,333.8
			c3.91,3.91,10.24,3.91,14.14,0l49.63-49.63C934.83,707.52,934.83,635.34,890.31,590.82z"/>
          <path d="M591.2,772.42v-92.31c0-11.05-8.95-20-20-20H399.94c-27.61,0-50,22.39-50,50v102.31c0,5.52,4.48,10,10,10H541.2
			C568.81,822.42,591.2,800.04,591.2,772.42z"/>
          <path d="M972.94,369.61V277.3c0-11.05-8.95-20-20-20h-92.31c-27.61,0-50,22.39-50,50v102.31c0,5.52,4.48,10,10,10h102.31
			C950.56,419.61,972.94,397.23,972.94,369.61z"/>
          <path d="M107.06,708.7l0-431.09c0-11.05,8.95-20,20-20h60.19c62.96,0,114,51.04,114,114l0,441.09c0,5.52-4.48,10-10,10l-70.19,0
			C158.1,822.7,107.06,771.66,107.06,708.7z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
