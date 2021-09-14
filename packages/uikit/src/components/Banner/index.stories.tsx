import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Banner from "./Banner";
import safariswap from "../../images/safariswap-lion.jpg";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <Banner
      date="weekly"
      title="Claim Prize"
      description="Compete with other teams to win CAKE, collectible NFTs, achievements & more!"
      image={safariswap}
    />
  );
};
