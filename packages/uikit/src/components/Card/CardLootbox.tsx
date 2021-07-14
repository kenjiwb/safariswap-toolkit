/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import StyledCard from "./StyledCard";
import { CardLootboxProps } from "./types";
import { Flex, Box } from "../Box";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import commonImage from "./Images/common.png";
import mediumImage from "./Images/medium.png";
import rareImage from "./Images/rare.png";
import buyImage from "./Images/buy.png";

const CardLootbox: React.FC<CardLootboxProps> = ({ variant = "common", totalNFT, price, onBuy, ...props }) => {
  interface Obj {
    common: string;
    medium: string;
    rare: string;
    [key: string]: string;
  }

  const cardImage: Obj = {
    common: commonImage,
    medium: mediumImage,
    rare: rareImage,
  };

  const imgSrc: string = cardImage[variant];

  return (
    <StyledCard {...props}>
      <Flex justifyContent="space-between">
        <Box p="10px 0 0 0">
          <img src={imgSrc} alt="variant icon" width="140px" height="140px" />
        </Box>
        <Box>
          <CardBody>
            <Box
              style={{
                color: "#FDF104",
                fontSize: "28px",
                fontWeight: 600,
                textShadow: "1px 2px #464C48",
              }}
            >
              {variant.toUpperCase()}
            </Box>
            <Box
              style={{
                color: "#E8E8E4",
                fontSize: "24px",
                fontWeight: 400,
                textShadow: "1px 1px #464C48",
              }}
            >
              Lootbox
            </Box>
          </CardBody>
          <CardFooter>
            <Box
              style={{
                color: "#E8E8E4",
                fontSize: "18px",
                fontWeight: 400,
                textShadow: "1px 1px #464C48",
              }}
            >
              {totalNFT} Common NFTs
            </Box>
            <Flex
              style={{
                color: "#E8E8E4",
                fontSize: "20px",
                fontWeight: 400,
                textShadow: "1px 1px #464C48",
              }}
            >
              Price:
              <Flex style={{ fontSize: "24px", fontWeight: 700, marginLeft: "10px" }}>{price}</Flex>
            </Flex>
          </CardFooter>
        </Box>
        <Box p="10px 0 0 0">
          <img
            src={buyImage}
            width="140px"
            alt="buy button"
            height="140px"
            onClick={onBuy}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Flex>
    </StyledCard>
  );
};

CardLootbox.defaultProps = {
  variant: "common",
};

export default CardLootbox;
