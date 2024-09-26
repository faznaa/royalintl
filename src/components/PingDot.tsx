import React, { CSSProperties } from "react";

interface PingDotProps {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  scale?: string;
}

/**
 *PingDot is used for highlighting location in a map with circle expanding effect and it receives tailwind classes as props 
 *@example
 * // Example usage of the PingDot component
 * import PingDot from "components/PingDot";
 * 
 * function App() {
 *   return <PingDot top="20" left="30" width="w-3" height="h-3" scale="scale-50"/>
 * }
 * 
 * @param {PingDotProps} props { top="0", left="0", width="w-3", height="h-3", scale="scale-50" }
 *  All props has default value incase if we dont pass any props it will take default value and all props value needs to be string
 *  
 * @return {JSX.Element} A div container with following structure
 *  - span wraps 2 span element
 *  - 1st span is responsible for the circle effect
 *  - 2nd span is responsible for the dot filled circle
 */

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
          className={`relative inline-flex rounded-full ${width} ${height} ${scale}`} // the props width, height, scale have default value incase if props not passed it will take the default value
          style={{ backgroundColor: "#E4675D" }}
        ></span>
      </span>
    </div>
  );
};

export default PingDot;
