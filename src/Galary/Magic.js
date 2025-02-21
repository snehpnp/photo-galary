import { useEffect,useRef, useState } from "react";
import "./Magic.css";

import Img1 from "../Images/1.jpg";
import Img2 from "../Images/2.jpg";
import Img3 from "../Images/3.jpg";
import Img4 from "../Images/4.jpg";
import Img5 from "../Images/5.jpg";
import Img6 from "../Images/6.jpg";
import Img7 from "../Images/7.jpg";
import Img8 from "../Images/8.jpg";
import Img9 from "../Images/9.jpg";

const items = [
  { title: "Hi Beauty 👋", img: Img1, num: "01" },
  { title: "Don’t Go Away 🤍", img: Img2, num: "02" },
  { title: "Always Together 💞", img: Img3, num: "03" },
  { title: "You are Amazing 🤩", img: Img4, num: "04" },
  { title: "Most Beautiful Person on Earth 💯", img: Img5, num: "05" },
  { title: "And Cutest 🎀", img: Img6, num: "06" },
  { title: "And Since I Met You 😗", img: Img7, num: "07" },
  { title: "I Feel Very Lucky Everyday 😇", img: Img8, num: "08" },
  { title: "You 👸", img: Img9, num: "09" },
];

const HtmlPage = () => {
  const [progress, setProgress] = useState(50);
  const [active, setActive] = useState(0);
  const itemsRef = useRef([]);
  const cursorRef = useRef([]);

  const speedWheel = 0.02;
  const speedDrag = -0.1;
  let startX = 0;
  let isDown = false;

  const getZindex = (array, index) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );

  const displayItems = () => {
    if (!itemsRef.current.length) return;
    const newActive = Math.floor(
      (progress / 100) * (itemsRef.current.length - 1)
    );
    setActive(newActive);

    itemsRef.current.forEach((item, index) => {
      if (item) {
        const zIndex = getZindex([...itemsRef.current], newActive)[index];
        item.style.setProperty("--zIndex", zIndex);
        item.style.setProperty(
          "--active",
          (index - newActive) / itemsRef.current.length
        );
      }
    });
  };

  useEffect(() => {
    displayItems();
  }, [progress]);

  const handleWheel = (e) => {
    setProgress((prev) =>
      Math.max(0, Math.min(prev + e.deltaY * speedWheel, 100))
    );
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    setProgress((prev) => Math.max(0, Math.min(prev + mouseProgress, 100)));
    startX = x;
  };

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  useEffect(() => {
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="Main">
        <div
          className="card"
          style={{
            width: "70rem",
            height: "45rem",
            // background: linear-gradient(135deg, black, #220033);
            backgroundColor: "linear-gradient(135deg, black, #220033)",
            background: "linear-gradient(135deg, black, #220033)",

            borderRadius: "10px",
          }}
        >
          <div className="carousel1">
            {items.map((itemd, index) => (
              <div
                key={index}
                className="carousel-item1"
                ref={(el) => (itemsRef.current[index] = el)}
                onClick={() => setProgress((index / 9) * 100 + 10)}
              >
                <div className="carousel-box1">
                  <div className="title">{`${index + 1}`}</div>
                  <div className="title">{itemd.title}</div>
                  <img src={itemd.img} alt={` ${index + 1}`} />
                  {/* <div className="num">{itemd.num}</div> */}
                </div>
              </div>
            ))}
            <div
              ref={(el) => (cursorRef.current[0] = el)}
              className="cursor1"
            />
            <div
              ref={(el) => (cursorRef.current[1] = el)}
              className="cursor1 cursor2"
            />
          </div>

         


        </div>

      
      </div>
    </>
  );
};

export default HtmlPage;
