import React from 'react';
import classes from './CheckMark.module.css';

const CheckMark = () => {
  return (
    <svg
      className={classes.svg} // Verwenden Sie die importierten Klassen für das SVG-Element
      width="115px"
      height="115px"
      viewBox="0 0 133 133"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className={classes.checkGroup} // Verwenden Sie die importierten Klassen für die Gruppe
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <circle
          className={classes.filledCircle} // Verwenden Sie die importierten Klassen für den gefüllten Kreis
          fill="#867872"
          cx="66.5"
          cy="66.5"
          r="54.5"
        />
        <circle
          className={classes.whiteCircle}
          fill="#FFFFFF"
          cx="66.5"
          cy="66.5"
          r="55.5"
        />
        <circle
          className={classes.outline}
          stroke="#726661"
          strokeWidth="4"
          cx="66.5"
          cy="66.5"
          r="54.5"
        />
        <polyline
          className={classes.check}
          stroke="#FFFFFF"
          strokeWidth="5.5"
          points="41 70 56 85 92 49"
        />
      </g>
    </svg>
  );
};

export default CheckMark;

