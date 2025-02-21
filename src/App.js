import React, { useEffect, useRef, useState } from "react";

import Carousel from "./Galary/Carousel";
import Movingpage from "./Galary/Movingpage";
import Doomtaana from "./Songs/Doomtaana.mp3";
import { Analytics } from '@vercel/analytics/react';
import Magic from "./Galary/Magic";

function importAll(r) {
  return r.keys().map((fileName) => r(fileName));
}

const images = importAll(require.context("./Images", false, /\.(png|jpe?g|svg)$/));


const songs = [Doomtaana];

function App() {
  const [tab, setTab] = useState("carousel");
  const [isPlaying, setIsPlaying] = useState(false); // Track play state
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      audio.play().catch((error) => {
        console.log("Autoplay blocked:", error);
      });
    };

    audio.addEventListener("ended", () => {
      setCurrentSong((prev) => (prev + 1) % songs.length);
    });

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      audio.removeEventListener("ended", playAudio);
      document.removeEventListener("click", playAudio);
    };
  }, []);

  useEffect(() => {
    audioRef.current.src = songs[currentSong];
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <div
      id="app"
      className="card"
      style={{
        height:"74rem",
        background:
          "linear-gradient(90deg, rgba(255,94,98,1) 0%, rgba(255,166,201,1) 50%, rgba(255,202,212,1) 100%)",
      }}
    >
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="fixed top-2 right-4 p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        {isPlaying ? (
          <i className="bi bi-pause-circle text-3xl text-red-500"></i>
        ) : (
          <i className="bi bi-play-circle text-3xl text-green-500"></i>
        )}
      </button>

      <audio ref={audioRef} autoPlay loop />

      <section className="flex flex-col items-center" style={{ marginTop: "4rem" }}>
        <h1 className="romantic-title text-5xl md:text-7xl mb-8 text-center">
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
            <i className="bi bi-images me-2"></i>Carousel Gallery
          </button>
          <button
            className="gallery-button bg-indigo-500 text-white px-8 py-4 rounded-full text-lg hover:bg-indigo-600"
            onClick={() => setTab("masonry")}
          >
            <i className="bi bi-bricks me-2"></i>Masonry Gallery
          </button>
          <button
            className="gallery-button bg-blue-500 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600"
            onClick={() => setTab("memory")}
          >
            <i className="bi bi-journal me-2"></i>Memory Page
          </button>

          <button
            className="gallery-button bg-blue-500 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600"
            onClick={() => setTab("magic")}
          >
            <i className="bi bi-journal me-2"></i>magic Memory 
          </button>
        </div>
      </section>

      {tab === "carousel" && (
        <section
          // className="p-4 bg-white/50"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,94,98,1) 0%, rgba(255,166,201,1) 50%, rgba(255,202,212,1) 100%)",
          }}
        >
          <h2 className="romantic-title text-4xl text-center mb-8">
            Our Special Moments
          </h2>
          <Movingpage />
        </section>
      )}

      {tab === "masonry" && (
        <section
          className="p-4 bg-white/50"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,94,98,1) 0%, rgba(255,166,201,1) 50%, rgba(255,202,212,1) 100%)",
          }}
        >
          <h2 className="romantic-title text-4xl text-center mb-8">
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

      {tab === "memory" && (
        <section
          className="p-4 bg-white/50"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,94,98,1) 0%, rgba(255,166,201,1) 50%, rgba(255,202,212,1) 100%)",
          }}
        >
          <h2 className="romantic-title text-4xl text-center mb-8">
            Our Special Moments
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Carousel />
          </div>
        </section>
      )}

      {tab === "magic" && (
        <section
          className="p-4 bg-white/50"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,94,98,1) 0%, rgba(255,166,201,1) 50%, rgba(255,202,212,1) 100%)",
          }}
        >
          <h2 className="romantic-title text-4xl text-center mb-8">
            Our Special Moments
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Magic />
          </div>
        </section>
      )}
      <Analytics />



      
    </div>
  );
}

export default App;
