import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import ClaimprizeBanner from "./ClaimprizeBanner";
// import safariswap from "../../images/lion.jpg";

export default {
  title: "Components/ClaimprizeBanner",
  component: ClaimprizeBanner,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return <ClaimprizeBanner date="weekly" />;
};
