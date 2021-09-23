import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 200 200" {...props}>
      <defs>
        <style>{`.cls-1{fill:#ffeb3d;}`}</style>
      </defs>
      <image
        width="200"
        height="200"
        x="0"
        y="0"
        href="data:image/png;base64,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"
      ></image>
    </Svg>
  );
};

export default Icon;
