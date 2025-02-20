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

const Card = styled.div`
  width: 400px;
  height: 300px;
  background: transparent;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 180px;
  height: 200px;
  position: relative;
  perspective: 1100px;
`;

const CarouselWrapper = styled.div`
  width: 100%;
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
  height: 200px;
  border: 2px solid #000;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ index }) => `
    transform: rotateY(${index * 40}deg) translateZ(300px);
  `}
`;

const CarouselPage = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  return (
    <div
      className="flex justify-center items-center p-4 mt-10"
      style={{
        background: "linear-gradient(90deg, rgba(255,94,98,1) 0%, rgba(255,166,201,1) 50%, rgba(255,202,212,1) 100%)",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card>
        <Container>
          <CarouselWrapper>
            {images.map((src, index) => (
              <CarouselItem key={index} index={index}>
                <img src={src} alt={`Wild Animal ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselWrapper>
        </Container>
      </Card>
    </div>
  );
};

export default CarouselPage;
