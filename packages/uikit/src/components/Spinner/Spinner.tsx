import React from "react";
import styled, { keyframes } from "styled-components";
import SafariswapGaming from "../../images/safariswap-gaming.png";
import SafariSwapIcon from "../../images/safariswap-coin.png";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100px;
`;

const RotatingSafariSwapIcon = styled.img`
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
  height: 100%;
`;

const RotatingSafariSwapGaming = styled.img`
  margin-bottom: 8px;
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <>
      <Container>
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
      </Container>
      <Container>
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
        <RotatingSafariSwapGaming width={`${size}px`} src={SafariswapGaming} />
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
      </Container>
      <Container>
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
        <RotatingSafariSwapIcon width={`${size * 0.3}px`} src={SafariSwapIcon} />
      </Container>
    </>
  );
};

export default Spinner;
