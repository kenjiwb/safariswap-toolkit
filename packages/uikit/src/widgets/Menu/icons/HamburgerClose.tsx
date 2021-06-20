import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 200 200" {...props}>
      <defs>
        <style>{`.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}`}</style>
        <linearGradient id="linear-gradient" x1="14.08" y1="60" x2="185.92" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3e473a" />
          <stop offset="0.18" stopColor="#71723b" />
          <stop offset="0.38" stopColor="#a39d3c" />
          <stop offset="0.57" stopColor="#cbbf3c" />
          <stop offset="0.74" stopColor="#e8d73d" />
          <stop offset="0.89" stopColor="#f9e63d" />
          <stop offset="1" stopColor="#ffeb3d" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="14.08" y1="100" x2="185.92" y2="100" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-3" x1="14.08" y1="140" x2="185.92" y2="140" xlinkHref="#linear-gradient" />
      </defs>
      <path
        className="cls-1"
        d="M19.79,60A369.42,369.42,0,0,1,59.9,55.52q20-1.25,40.1-1.23t40.1,1.22A364.53,364.53,0,0,1,180.21,60a364.53,364.53,0,0,1-40.11,4.49q-20,1.26-40.1,1.22T59.9,64.48A369.42,369.42,0,0,1,19.79,60Z"
      />
      <path
        className="cls-2"
        d="M19.79,100A369.42,369.42,0,0,1,59.9,95.52q20-1.24,40.1-1.23t40.1,1.22A364.53,364.53,0,0,1,180.21,100a364.53,364.53,0,0,1-40.11,4.49q-20,1.26-40.1,1.22t-40.1-1.23A369.42,369.42,0,0,1,19.79,100Z"
      />
      <path
        className="cls-3"
        d="M19.79,140a369.42,369.42,0,0,1,40.11-4.48q20-1.25,40.1-1.23t40.1,1.22A364.53,364.53,0,0,1,180.21,140a364.53,364.53,0,0,1-40.11,4.49q-20,1.26-40.1,1.22t-40.1-1.23A369.42,369.42,0,0,1,19.79,140Z"
      />
    </Svg>
  );
};

export default Icon;
