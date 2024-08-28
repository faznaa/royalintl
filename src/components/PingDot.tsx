import React, { CSSProperties } from 'react'

interface PingDotProps {
  top: string;
  left: string;
}

const PingDot: React.FC<PingDotProps> = ({ top, left }) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    zIndex: 10
  };

  return (
    <div style={style}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
      </span>
    </div>
  );
};

export default PingDot;