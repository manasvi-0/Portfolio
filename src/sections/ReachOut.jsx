import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const ReachOut = () => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [size, setSize] = useState({ width: 300, height: 300 });
  const myLocation = [
    { lat: 28.6139, lng: 77.2090, color: "limegreen" }
  ];
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;
      const globeSize = Math.min(width, 360);

      setSize({
        width: globeSize,
        height: globeSize,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen flex flex-col bg-black text-white px-4">
      
      {/* 🔝 Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        
        {/* 🌍 Globe */}
        <div
          ref={containerRef}
          className="w-full flex justify-center items-center mb-10"
        >
          <Globe
            ref={globeRef}
            width={size.width}
            height={size.height}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            animateIn


          pointsData={myLocation}
          pointLat={(d) => d.lat}
          pointLng={(d) => d.lng}
          pointColor={(d) => d.color}
          pointRadius={0.35}

          
          />
        </div>

        {/* ✨ Quote */}
        <p className="text-center italic text-lg opacity-80 mb-6">
          “Step into discomfort. Step into growth.”
        </p>

        {/* 🔘 Button */}
        <a href="/contact" className="w-fit">
          <Button name="Contact Me" isBeam />
        </a>
      </div>

      {/* FOOTER */}
    <footer className="mt-16 w-full px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-5xl">
    {/* Divider */}
    <div className="w-full h-px bg-zinc-700/80 mb-6" />

    {/* Text */}
    <div className="text-center">
      <p className="text-zinc-500 text-sm sm:text-base">
        Designed & Developed by{" "}
        <span className="text-white font-medium">
          Manasvi Jindal
        </span>
      </p>

      <p className="text-zinc-600 text-xs sm:text-sm mt-1">
        © 2026. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </section>
  );
};

export default ReachOut;
