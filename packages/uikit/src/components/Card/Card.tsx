import React from "react";
import StyledCard from "./StyledCard";
import { CardProps } from "./types";
import { Flex, Box } from "../Box";
import commonImage from "./Images/common.png";
import mediumImage from "./Images/medium.png";
import rareImage from "./Images/rare.png";
import buyImage from "./Images/buy.png";

interface Obj {
  common: string;
  medium: string;
  rare: string;
  [key: string]: string;
}

const cardImage: Obj = {
  common: commonImage,
  medium: mediumImage,
  rare: rareImage
};

const Card: React.FC<CardProps> = ({ children, variant = 'common', ...props }) => {
  const imgSrc: string = cardImage[variant];
  return (
    <StyledCard {...props}>
      <Flex justifyContent='space-between'>
        <Box p="10px 0 0 0">
          <img src={imgSrc} alt="variant icon" width="140px" height="140px" />
        </Box>
        <Box>
          {children}
        </Box>
        <Box p="10px 0 0 0">
          <img src={buyImage} width="140px" alt="buy button" height="140px" />
        </Box>
      </Flex>
    </StyledCard>
  );
};
export default Card;
