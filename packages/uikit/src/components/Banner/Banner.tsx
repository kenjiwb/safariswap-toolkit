import React from "react";
import styled from "styled-components";
import { BannerProps } from "./types";

const BannerWrapper = styled.div`
@media screen and (min-width: 968px)
{
    margin-top: -64px;
}
margin-top: -32px;
position: relative;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    z-index: 0;
    background: radial-gradient(329.58% 50% at 50% 50%, rgb(59, 40, 100) 0%, rgb(25, 19, 38) 100%);
    clip-path: ellipse(170% 100% at 50% 0);
    padding: 48px 0px;
    display: flex;
`

const Container = styled.div`
@media screen and (min-width: 968px)
{
    padding-top: 48px;
    padding-bottom: 48px;
}

@media screen and (min-width: 576px)
{
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

@media screen and (min-width: 370px)
{
    padding-left: 24px;
    padding-right: 24px;
  }

`

const ContainerNested = styled.div`
padding-top: 10px;
flex-direction: row-reverse !important;
flex-wrap: wrap;
-webkit-box-pack: justify;
justify-content: space-between;
flex-direction: column;
display: flex;
margin-bottom: 0px;
`

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
background: linear-gradient(rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%);
    background-image: linear-gradient(rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%);
border: 1px solid rgb(118, 69, 217);
box-sizing: border-box;
border-radius: 0px 0px 24px 24px;
padding: 16px 18px;
margin: -30px auto 50px;
justify-content: space-around;
display: flex;
}
`

const ImageContainer = styled.div`
@media screen and (min-width: 1080px)
 {
    margin-bottom: 16px;
    margin-right: 0px;
}
webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 12px;
    display: flex;
`

const LeftSideContainer = styled.div`
display: flex;
flex-direction: column;
`

const Date = styled.div`
@media screen and (min-width: 852px)
{
    text-align: left;
}
text-align: center;
color: rgb(122, 110, 170);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
    text-transform: capitalize;
`
const Title = styled.h2`
@media screen and (min-width: 852px)
{
    text-align: left;
    font-size: 64px;
}

@media screen and (min-width: 968px)
{
    font-size: 20px;
}

@media screen and (min-width: 576px)
{
    font-size: 64px;
}

font-size: 48px;
white-space: nowrap;
text-align: center;
line-height: 110%;
color: rgb(255, 255, 255);
text-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
background: linear-gradient(rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%) text;
-webkit-text-stroke: 4px transparent;
`

const Prizes = styled.h2`
@media screen and (min-width: 852px)
 {
    text-align: left;
}

@media screen and (min-width: 576px)
 {
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
`

const Description = styled.div`
@media screen and (min-width: 852px)
{
    text-align: left;
}
font-size: 16px;
text-align: center;
color: rgb(215, 202, 236);
margin-top:16px;
font-weight: 600;

@media screen and (min-width: 968px)
 {
    font-size: 20px;
}
`

const Image = styled.img`
@media screen and (min-width: 576px)
 {
    height: 64px;
    width: 64px;
}
margin-left: auto;
margin-right: auto;
height: 48px;
width: 48px;
align-self: center;
fill: rgb(40, 13, 95);
flex-shrink: 0;
`

const Banner: React.FC<BannerProps> = ({ date,title,prizes,description,image  }) => {

  return (
<BannerWrapper>
<Container>
  <ContainerNested>
    <RightSideContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
    </RightSideContainer>
    <LeftSideContainer>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Prizes>$Nutuuve in Prizes! </Prizes>
      <Description>{description}</Description>
    </LeftSideContainer>
  </ContainerNested>
  </Container>
</BannerWrapper>
  );
};

export default Banner;