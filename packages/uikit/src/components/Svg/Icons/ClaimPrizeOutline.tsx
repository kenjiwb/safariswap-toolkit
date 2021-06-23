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
        d="M36,126.48c-10.8-1.66-10.8-1.66-10.8-11.71,0-12.68.1-25.36-.05-38-.06-5.17,2.15-7.22,7.25-7.16,13.67.15,27.33,0,42.21,0-2.09-1.71-3.42-2.69-4.62-3.8C65.83,62,61.2,58.61,57.75,54.26,45,38.27,54.54,25.57,67,19.42c6-3,12.45-1.83,16.62,3,5,5.81,8.89,12.67,12.74,19.37,2,3.42,2.79,7.49,4.29,11.72,3-5.61,5.38-11.22,8.71-16.22,7-10.55,17.81-11.75,27.27-3.5,6.57,5.74,8.17,13.78,3.3,21.08-3.41,5.11-7.9,9.5-12.35,14.74h12.12c9.46,0,18.92.1,28.38,0,4.6-.07,6.76,2,6.77,6.46,0,14.49,0,29,0,43.48,0,7.14-5.71,5.82-10.41,6.54-.11,2.06-.3,4-.31,5.94,0,14.29-.12,28.58,0,42.87,0,5.05-1.84,7.34-7.07,7.33q-57.06-.14-114.12,0c-5.2,0-7.13-2.21-7.08-7.3C36.07,158.84,36,142.77,36,126.48Zm53.26,20c0-6.44-.12-12.89,0-19.33.1-4.1-1.59-5.82-5.72-5.77q-15.39.18-30.8,0c-4-.05-5.89,1.33-5.84,5.61q.23,19.62,0,39.25c-.05,3.91,1.69,5.57,5.35,5.58,10.47,0,20.94,0,31.41,0,4.09,0,5.7-2,5.59-6C89.1,159.36,89.23,152.91,89.23,146.47Zm64.07.35c0-6.64-.1-13.29,0-19.93.08-3.77-1.37-5.55-5.29-5.51-10.46.1-20.93.13-31.4,0-4.21-.06-5.68,1.83-5.65,5.84.1,12.88.12,25.77,0,38.65,0,4.07,1.6,6,5.66,6q15.39,0,30.8,0c4.34,0,6.09-1.93,5.92-6.31C153.12,159.31,153.3,153.06,153.3,146.82Zm-90.68-36c7,0,14.05-.12,21.07,0,4.16.1,5.74-1.56,5.6-5.72-.23-6.62-.2-13.25,0-19.87.11-3.67-1.52-5.19-4.94-5.19q-21.68,0-43.36,0c-3.41,0-5.09,1.47-5,5.15.2,6.42.28,12.86,0,19.27-.21,4.65,1.36,6.58,6.16,6.39C49,110.64,55.79,110.85,62.62,110.84Zm75,0c6.82,0,13.65-.15,20.47.05,4.23.12,6.31-1.11,6.08-5.79-.31-6.41-.29-12.85,0-19.26.19-4.24-1.56-5.8-5.57-5.79q-21.07.09-42.14,0c-4.1,0-5.69,1.74-5.53,5.88.25,6.41.23,12.85,0,19.26-.15,4.18,1.49,5.79,5.63,5.69C123.61,110.72,130.63,110.84,137.66,110.85Zm-49.6-48,1.56-1.41C87.36,52,84.86,42.64,79,34.58c-2.73-3.73-6.13-4.88-10.4-2.06-5.52,3.64-6.76,7.48-1.91,12.32C73.23,51.41,80.88,56.9,88.06,62.85Zm23.49-1.44,1.9,1.53c4.9-4,9.92-7.88,14.65-12.08,2.69-2.38,3.7-5.28.17-8.08s-6.93-2.58-9,1.42C116.37,49.77,114.09,55.66,111.55,61.41Z"
      />
    </Svg>
  );
};

export default Icon;