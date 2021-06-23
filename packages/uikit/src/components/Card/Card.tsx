import React from "react";
import StyledCard from "./StyledCard";
import { CardProps } from "./types";
import { Flex, Box } from "../Box";
import commonImage from "./Images/common.png";
import mediumImage from "./Images/medium.png";
import rareImage from "./Images/rare.png";
import buyImage from "./Images/buy.png";

const cardImage = {
  'common': commonImage,
  'medium': mediumImage,
  'rare': rareImage
};

const Card: React.FC<CardProps> = ({ children, variant = 'common', ...props }) => {
  return (
    <StyledCard {...props}>
      <Flex justifyContent='space-between'>
        <Box p="10px 0 0 0">
          <img src={cardImage[variant]} width="140px" height="140px" />
        </Box>
        <Box>
          {children}
        </Box>
        <Box p="10px 0 0 0">
          <img src={buyImage} width="140px" height="140px" />
        </Box>
      </Flex>
    </StyledCard>
  );
};
export default Card;
