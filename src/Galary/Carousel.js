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

const Carouselpage = () => {
  

  
  const memories = [
    {
      image: img1,
      date: "June 15, 2023",
      title: "Our First Date",
      description: "A magical evening at the beachside restaurant...",
    },
    {
      image: img2,
      date: "July 4, 2023",
      title: "Summer Adventure",
      description: "Exploring the mountains together...",
    },
    {
      image: img3,
      date: "August 20, 2023",
      title: "Picnic in the Park",
      description: "A perfect sunny afternoon...",
    },
    {
      image: img4,
      date: "July 4, 2023",
      title: "Summer Adventure",
      description: "Exploring the mountains together...",
    },
    {
      image: img5,
      date: "August 20, 2023",
      title: "Picnic in the Park",
      description: "A perfect sunny afternoon...",
    },
  ];

  return (
    <>
    {memories.map((memory, index) => (
              <div
                key={index}
                className="memory-card bg-white p-6 rounded-xl shadow-lg"
              >
                <img
                   src={memory.image}
                  alt={memory.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  style={{
                    height:"400px"
                  }}
                />
                <div className="text-sm text-gray-500">{memory.date}</div>
                <h3 className="text-xl font-semibold  mb-2">
                  {memory.title}
                </h3>
                <p className="text-gray-700">{memory.description}</p>
              </div>
            ))}
    </>
  );
};

export default Carouselpage;
