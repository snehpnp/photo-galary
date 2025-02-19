import React, { useState } from "react";
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";
import img5 from "./Images/5.jpg";
import img6 from "./Images/6.jpg";
import img7 from "./Images/7.jpg";
import img8 from "./Images/8.jpg";
import img9 from "./Images/9.jpg";
import img10 from "./Images/10.jpg";
import img11 from "./Images/11.jpg";
import Carousel from "./Galary/Carousel";
import Movingpage from "./Galary/Movingpage";

function App() {
  const [tab, setTab] = useState("carousel");

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
    <div id="app" className="card">
      <section
        className=" flex flex-col items-center"
        style={{ marginTop: "4rem" }}
      >
        <h1 className="romantic-title text-5xl md:text-7xl text-pink-600 mb-8 text-center">
          Our Love Story
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
          A beautiful collection of our precious moments together...
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="gallery-button bg-pink-500 text-white px-8 py-4 rounded-full text-lg hover:bg-pink-600"
            onClick={() => setTab("carousel")}
          >
            <i class="bi bi-images me-2"></i>Carousel Gallery
          </button>
          <button
            className="gallery-button bg-purple-500 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-600"
            onClick={() => setTab("grid")}
          >
            <i class="bi bi-grid-3x3 me-2"></i>Grid Gallery
          </button>
          <button
            className="gallery-button bg-indigo-500 text-white px-8 py-4 rounded-full text-lg hover:bg-indigo-600"
            onClick={() => setTab("masonry")}
          >
            <i class="bi bi-bricks me-2"></i>Masonry Gallery
          </button>
          <button
            className="gallery-button bg-blue-500 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600"
            onClick={() => setTab("memory")}
          >
            <i class="bi bi-journal me-2"></i>Memory Page
          </button>
        </div>
      </section>

      {/* Carousel Gallery */}
      {tab === "carousel" && (
        <section className=" p-4 bg-white/50 backdrop-blur-sm">
          <h2 className="romantic-title text-4xl text-center text-pink-600 mb-8">
            Our Special Moments
          </h2>
        <Carousel /> 
       <Movingpage />
        </section>
      )}

      {/* Grid Gallery */}
      {tab === "grid" && (
        <section className=" p-4 bg-white/50 backdrop-blur-sm">
          <h2 className="romantic-title text-4xl text-center text-pink-600 mb-8">
            Our Special Moments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                 src={img}
                alt={`Grid ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              />
            ))}
          </div>
        </section>
      )}

      {/* Masonry Gallery */}
      {tab === "masonry" && (
        <section className=" p-4 bg-white/50 backdrop-blur-sm">
          <h2 className="romantic-title text-4xl text-center text-pink-600 mb-8">
            Our Special Moments
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                 src={img}
                alt={`Masonry ${index + 1}`}
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
              />
            ))}
          </div>
        </section>
      )}

      {/* Memory Page */}
      {tab === "memory" && (
        <section className=" p-4 bg-white/50 backdrop-blur-sm">
          <h2 className="romantic-title text-4xl text-center text-pink-600 mb-8">
            Our Special Moments
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <div
                key={index}
                className="memory-card bg-white p-6 rounded-xl shadow-lg"
              >
                <img
                   src={memory.image}
                  alt={memory.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-sm text-gray-500">{memory.date}</div>
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  {memory.title}
                </h3>
                <p className="text-gray-700">{memory.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
