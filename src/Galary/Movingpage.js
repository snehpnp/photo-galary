import React from "react";
import styled, { keyframes } from "styled-components";
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/6.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";
import img9 from "../Images/9.jpg";
import img10 from "../Images/10.jpg";
import img11 from "../Images/11.jpg";

const rotating = keyframes`
  from {
    transform-origin: 60% 50%;
    transform: rotateY(0deg);
  }
  to {
    transform-origin: 60% 50%;
    transform: rotateY(-360deg);
  }
`;

const Container = styled.div`
  width: 110px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 1100px;
`;

const CarouselWrapper = styled.div`
  width: 10%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  animation: ${rotating} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const CarouselItem = styled.div`
  display: block;
  position: absolute;
  width: 180px;
  height: 120px;
  border: 2px solid #000;

  img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  ${({ index }) => `
    transform: rotateY(${index * 40}deg) translateZ(288px);
  `}
`;

const CarouselPage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  return (
    <Container>
      <CarouselWrapper>
        {images.map((src, index) => (
          <CarouselItem key={index} index={index}>
            <img src={src} alt={`Wild Animal ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Container>
  );
};

export default CarouselPage;
