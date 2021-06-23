import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 200 200" {...props}>
      <defs>
        <style>{`.cls-1{fill:#ffeb3d;}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M54,46.74c.74-1.65,2.79-3.34,6.18-5.08a101.28,101.28,0,0,1,11.94-5.08Q79,34.12,86.84,32.05t15-3.7q7.13-1.65,12.35-2.61a48.8,48.8,0,0,1,6.86-1,17.94,17.94,0,0,1,6.58,1.78,43.46,43.46,0,0,1,8.24,4.81,35.64,35.64,0,0,1,7.41,7.41,21.37,21.37,0,0,1,4.12,9.33q.54,3.28-3.71,8.92T133.08,69.79q-6.32,7.14-13.58,15.37t-13.17,16.33a77.47,77.47,0,0,0-9.06,15.64Q94.1,124.69,96,130.44c.92,2.75.64,4.58-.82,5.49s-3.29,1-5.49.27A15.57,15.57,0,0,1,83.41,132a14.08,14.08,0,0,1-3.57-8.64q-.27-3.3,3.84-9.06a145.63,145.63,0,0,1,10-12.35q5.89-6.59,12.76-13.59t12.22-13.17a77.28,77.28,0,0,0,8.09-10.84c1.83-3.11,2.1-5.3.82-6.59s-3.61-1.6-7-1a52.36,52.36,0,0,0-11.67,4q-6.59,3-14,7.28T81.08,76.79a128.81,128.81,0,0,0-11.26,8.78,33.86,33.86,0,0,0-6.44,7c-1.1,1.83-2.2,2.19-3.3,1.1s-2.1-3.07-3-5.9a84,84,0,0,1-2.47-10.3q-1.1-6-1.64-12.07a77.2,77.2,0,0,1-.28-11.12A23.09,23.09,0,0,1,54,46.74Zm34.58,96.6a9.29,9.29,0,0,1,4,2.2,50.8,50.8,0,0,1,4.67,4.39,50.14,50.14,0,0,1,4.12,4.94c1.18,1.64,1.78,2.93,1.78,3.84a10.18,10.18,0,0,1-1.51,4.66,29.22,29.22,0,0,1-3.84,5.36,41.69,41.69,0,0,1-4.67,4.52,6.77,6.77,0,0,1-4,1.93,11.18,11.18,0,0,1-5.62-1.24,30.2,30.2,0,0,1-6.45-3.84,33.43,33.43,0,0,1-5.22-4.94,7.77,7.77,0,0,1-2.19-4.8c0-1.47.77-3.2,2.33-5.22a39.93,39.93,0,0,1,5.49-5.76,38.73,38.73,0,0,1,6.31-4.53C85.92,143.66,87.53,143.16,88.62,143.34Z"
      />
    </Svg>
  );
};

export default Icon;