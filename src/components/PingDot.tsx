import React, { CSSProperties } from "react";

interface PingDotProps {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  scale?: string;
}

const PingDot: React.FC<PingDotProps> = ({ top="0", left="0", width="w-3", height="h-3", scale="scale-50" }) => {
  const style: CSSProperties = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    zIndex: 10,
  };

  return (
    <div style={style}>
      <span className={`relative flex ${width} ${height}`}>
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ backgroundColor: "#E4675D" }}
        ></span>
        <span
          className={`relative inline-flex rounded-full ${width} ${height} ${scale}`}
          style={{ backgroundColor: "#E4675D" }}
        ></span>
      </span>
    </div>
  );
};

export default PingDot;
