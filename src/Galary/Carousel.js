import React from "react";
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/1.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";
import img9 from "../Images/9.jpg";
import img10 from "../Images/10.jpg";
import img11 from "../Images/11.jpg";

import Carousel from "react-bootstrap/Carousel";

const Carouselpage = () => {
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
    <>
      {/* <div className="row">
        <div class="container1">
          <div id="carousel1">
            {images.map((src, index) => (
              <div class="carousel-item1" key={index}>
                <img src={src} alt={`Wild Animal ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Horizontal Scrollable Image Gallery */}
      <div className="flex overflow-x-auto space-x-4 p-4">
        {images.map((img, index) => (
          <img
            key={index}
            // src={img} // ✅ Fixed: Image now displays
            alt={`Slide ${index + 1}`}
            className="w-64 h-64 object-cover rounded-lg shadow-xl"
          />
        ))}
      </div>

      {/* Bootstrap Carousel */}
      {/* <div className="p-4">
        <Carousel fade>
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                // src={img} // ✅ Fixed: Image now displays in Carousel
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "400px", objectFit: "cover" }} // Ensuring images fit properly
              />
              <Carousel.Caption>
                <h3>Slide {index + 1}</h3>
                <p>Beautiful Image {index + 1}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */}
    </>
  );
};

export default Carouselpage;
