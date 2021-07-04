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
        d="M188.32,97.94c0-4.2-1.43-5.77-5.71-5.89a15.92,15.92,0,0,1-8-2.65A181.13,181.13,0,0,1,159,77.55a8.21,8.21,0,0,1-2.72-5.37c-.23-13-.18-25.91-.08-38.87,0-3.66-1.11-5.49-5.1-5.48-35.27.1-70.55-.22-105.81.23C24,28.34,7.58,50.48,12.58,71.19c4,16.35,14.67,25.56,31.53,28.8v5.1c0,20.4.07,40.8,0,61.2,0,4.11,1.2,5.91,5.6,5.9q66.53-.16,133,0c4.38,0,5.64-1.77,5.62-5.89Q188.14,132.13,188.32,97.94ZM43.89,91.22C31.75,91.55,20,78.25,19.51,64c-.42-13.37,11.32-27,24.38-27.72Zm120.22.8H69C91,68.56,131.77,61.52,164.11,92Zm-15.68-55.7V70.47c-5.79-1.78-11.45-3.75-17.23-5.25-8-2.09-8.37-2.51-5.56-10.66C129.09,44.58,139,36.48,148.43,36.32Zm-92.68-.89c13.82,0,27.64,0,41.46,0H129.7c-8.59,8.09-13.31,16.85-13.37,27.39C109,64.21,101.88,65.24,94.93,67c-13.62,3.46-24,12.53-34.85,20.8-1.65,1.26-3.22,2.65-5,3.74-2,1.23-3.44.84-3.44-1.88q0-25.87,0-51.74C51.64,34.73,54,35.43,55.75,35.43ZM72.11,164.66c-6.63-.25-13.27-.07-20.12-.07-.15-1.68-.33-2.83-.33-4,0-18.87.06-37.74-.08-56.61,0-3.26.8-4.46,4.22-4.33,6.62.26,13.27.08,20.12.08.14,1.68.32,2.82.33,4,0,18.87-.06,37.74.08,56.61C76.35,163.6,75.52,164.79,72.11,164.66Zm108.71-4.39c0,3.74-1.29,4.39-4.62,4.38q-43.93-.17-87.85,0c-3.29,0-4.69-.57-4.65-4.35q.3-28.11,0-56.22c0-3.74,1.3-4.42,4.63-4.39,14.71.15,29.43.07,44.14.07s29.14.08,43.7-.07c3.3,0,4.69.59,4.65,4.36Q180.52,132.15,180.82,160.27Z"
      />
      <path
        className="cls-1"
        d="M136.27,120.15c-.14-3.27.91-7.81-4-7.86s-4,4.49-4,7.77-1,7.81,3.93,7.85S136.16,123.44,136.27,120.15Z"
      />
    </Svg>
  );
};

export default Icon;
