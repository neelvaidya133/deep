import React from "react";
import Img from "../../assets/jojo.png";
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
          <img style={{ height: "500px", width: "500px" }} src={Img} alt="" />
        </ImageContainer>
        <InfoContainer>
          <Title>
            <h1> Hi, I am Deep. </h1>
          </Title>
          <Content>
            <p>
              lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet
              lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
              dolor sit amet, consectet lorem ipsum dolor sit amet lorem ipsum
              dolor sit ametlorem ipsum dolor sit amet
            </p>
          </Content>
          <BTN>
            <a href=""> Free Consultancy </a>
          </BTN>
        </InfoContainer>
      </MainContainer>
    </>
  );
};

export default Home;
