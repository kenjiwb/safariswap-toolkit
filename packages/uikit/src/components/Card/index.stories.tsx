import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import Card from "./Card";
import { Box, Flex } from "../Box";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card variant="common">
          <CardBody>
            <Box 
              style={{ 
                color: "#FDF104",
                fontSize: "28px",
                fontWeight: "600",
                textShadow: "1px 2px #464C48"
              }}
            >
              COMMON
            </Box>
            <Box 
              style={{ 
                color: "#E8E8E4",
                fontSize: "24px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              Lootbox
            </Box>
          </CardBody>
          <CardFooter>
            <Box 
              style={{ 
                color: "#E8E8E4",
                fontSize: "20px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              3 Common NFTs
            </Box>
            <Flex 
              style={{ 
                color: "#E8E8E4",
                fontSize: "20px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              Price: 
              <Flex style={{ fontSize: "24px", fontWeight: "700", marginLeft: "10px" }}>50</Flex>
            </Flex>
          </CardFooter>
        </Card>
      </Row>
      <Row>
        <Card variant="medium">
          <CardBody>
            <Box 
              style={{ 
                color: "#FDF104",
                fontSize: "28px",
                fontWeight: "600",
                textShadow: "1px 2px #464C48"
              }}
            >
              MEDIUM
            </Box>
            <Box 
              style={{ 
                color: "#E8E8E4",
                fontSize: "24px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              Lootbox
            </Box>
          </CardBody>
          <CardFooter>
            <Box 
              style={{ 
                color: "#E8E8E4",
                fontSize: "20px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              3 Common NFTs
            </Box>
            <Flex 
              style={{ 
                color: "#E8E8E4",
                fontSize: "20px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              Price: 
              <Flex style={{ fontSize: "24px", fontWeight: "700", marginLeft: "10px" }}>50</Flex>
            </Flex>
          </CardFooter>
        </Card>
      </Row>
      <Row>
        <Card variant="rare">
          <CardBody>
            <Box 
              style={{ 
                color: "#FDF104",
                fontSize: "28px",
                fontWeight: "600",
                textShadow: "1px 2px #464C48"
              }}
            >
              RARE
            </Box>
            <Box 
              style={{ 
                color: "#E8E8E4",
                fontSize: "24px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              Lootbox
            </Box>
          </CardBody>
          <CardFooter>
            <Box 
              style={{ 
                color: "#E8E8E4",
                fontSize: "20px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              3 Common NFTs
            </Box>
            <Flex 
              style={{ 
                color: "#E8E8E4",
                fontSize: "20px",
                fontWeight: "400",
                textShadow: "1px 1px #464C48"
              }}
            >
              Price: 
              <Flex style={{ fontSize: "24px", fontWeight: "700", marginLeft: "10px" }}>50</Flex>
            </Flex>
          </CardFooter>
        </Card>
      </Row>
    </div>
  );
};
