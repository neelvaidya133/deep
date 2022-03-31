import React from "react";
import Img from "../../assets/rere.svg";
import {
  MainContainer,
  InfoContainer,
  ImageContainer,
  Title,
  BTN,
  BtnWrap,
  Content,
} from "./HomeStyle";
const Home = () => {
  return (
    <>
      <MainContainer>
        <ImageContainer>
          <img style={{ height: "300px", width: "100%" }} src={Img} alt="" />
        </ImageContainer>
        <InfoContainer>
          <Title>
            <h1> Hi, I am Deep. </h1>
          </Title>
          <Content>
            <p>
              lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet
              lorem ipsum dolor sit ametlorem ipsum dolor sit amet
            </p>
          </Content>
          <BTN>
            <BtnWrap>
              <a href=""> Free Consultancy </a>
            </BtnWrap>
            <BtnWrap>
              <a href=""> Contact Now </a>
            </BtnWrap>
          </BTN>
        </InfoContainer>
      </MainContainer>
    </>
  );
};

export default Home;
