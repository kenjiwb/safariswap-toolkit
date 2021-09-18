import React from "react";
import styled, { keyframes } from "styled-components";
import { ClaimPrizeBannerProps } from "./types";
// import './style.css'
import lion from "./lion.png";

const floatingAnimation = keyframes`
0%{transform: translate(0, 0px);}
50%{transform: translate(0, 20px);}
100%{transform: translate(0, 0px)}
`;
const BannerWrapper = styled.div`
  @media screen and (min-width: 968px) {
    margin-top: -64px;
  }
  margin-top: -32px;
  position: relative;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  z-index: 0;
  // background: linear-gradient( #824026 0%,  rgb(45,23,14) 100%);
  background: #824026;
  clip-path: ellipse(170% 100% at 50% 0);
  padding: 48px 0px;
  display: flex;
`;

const Container = styled.div`
  @media screen and (min-width: 968px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 576px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  min-height: auto;
  padding-top: 16px;
  padding-bottom: 16px;

  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 370px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const ContainerNested = styled.div`
  padding-top: 10px;
  flex-direction: row-reverse !important;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: center;
  flex-direction: column;
  display: flex;
  margin-bottom: 0px;
`;

const RightSideContainer = styled.div`
@media screen and (min-width: 1080px)
{
    flex-direction: column;
    margin: -38px 0px 0px 36px;
}

@media screen and (min-width: 576px)
{
    padding: 16px 24px;
}

width: fit-content;
height: fit-content;
box-sizing: border-box;
padding: 16px 18px;
margin: -30px auto 30px;
justify-content: space-around;
display: flex;
}
`;

const ImageContainer = styled.div`
  @media screen and (min-width: 1080px) {
    margin-bottom: 16px;
    margin-right: 0px;
  }
  webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-right: 12px;
  display: flex;
`;

const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  @media screen and (min-width: 852px) {
    text-align: left;
  }
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 16px;
  text-transform: capitalize;
`;
const Title = styled.h2`
  @media screen and (min-width: 852px) {
    text-align: left;
    font-size: 64px;
  }

  @media screen and (min-width: 968px) {
    font-size: 20px;
  }

  @media screen and (min-width: 576px) {
    font-size: 64px;
  }

  font-size: 48px;
  white-space: nowrap;
  text-align: center;
  line-height: 110%;
  color: rgb(255, 255, 255) !important;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  background: -webkit-linear-gradient(rgb(30, 53, 123) 0%, rgb(20, 32, 69) 100%);
  -webkit-text-stroke: 4px transparent;
  -webkit-background-clip: text;
`;

const Prizes = styled.h2`
  @media screen and (min-width: 852px) {
    text-align: left;
  }

  @media screen and (min-width: 576px) {
    font-size: 40px;
  }

  font-weight: 600;

  font-size: 32px;
  white-space: nowrap;
  text-align: center;
  line-height: 110%;
  color: rgb(255, 255, 255);
  background: -webkit-linear-gradient(rgb(255, 216, 0) 0%, rgb(253, 171, 50) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.div`
  @media screen and (min-width: 852px) {
    text-align: left;
  }
  font-size: 16px;
  text-align: center;
  // color: rgb(215, 202, 236);
  color: #ffffff;
  margin-top: 16px;
  font-weight: 600;

  @media screen and (min-width: 968px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  @media screen and (min-width: 576px) {
    height: 280px;
    width: 280px;
    animation: ${floatingAnimation} 3s linear infinite;
  }
  margin-left: auto;
  margin-right: auto;
  height: 280px;
  width: 280px;
  align-self: center;
  fill: rgb(40, 13, 95);
  flex-shrink: 0;

  animation: ${floatingAnimation} 3s linear infinite;
`;

const ClaimprizeBanner: React.FC<ClaimPrizeBannerProps> = ({ date, title, description, image }) => {
  return (
    <BannerWrapper>
      <Container>
        <ContainerNested>
          <RightSideContainer>
            <ImageContainer>
              <Image className="banner" src={image} />
            </ImageContainer>
          </RightSideContainer>
          <LeftSideContainer>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Prizes>$Nature in Prizes! </Prizes>
            <Description>{description}</Description>
          </LeftSideContainer>
        </ContainerNested>
      </Container>
    </BannerWrapper>
  );
};

ClaimprizeBanner.defaultProps = {
  title: "Claim Prize",
  description: "Exchange NFTs here to get our $Nature Tokens",
  image: lion,
};

export default ClaimprizeBanner;
