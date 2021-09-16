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
      description="Exchange NFTs here to get our $Nature Tokens"
      image={safariswap}
    />
  );
};
