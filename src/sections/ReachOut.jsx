import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";
const ReachOut = () => {
  const globeRef = useRef();

  const myLocation = [
    {
      lat: 28.6139,
      lng: 77.2090,
      color: "limegreen",
    }
  ];

  const pingLocation = [
    { lat: 28.6139, lng: 77.2090, color: "limegreen" },
  
  ];

  useEffect(() => {
    const globe = globeRef.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.3;
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 mb-10 gap-2">
      
      {/* 🌍 Globe Centered */}
      <div className="flex items-center justify-center">
        <Globe
          ref={globeRef}
          height={560}
          width={560}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

          /* Solid Dot */
          pointsData={myLocation}
          pointLat={(d) => d.lat}
          pointLng={(d) => d.lng}
          pointColor={(d) => d.color}
          pointAltitude={0.05}
          pointRadius={0.4}

          /* Ping */
          ringsData={pingLocation}
          ringLat={(d) => d.lat}
          ringLng={(d) => d.lng}
          ringColor={(d) => d.color}
          ringMaxRadius={5}
          ringPropagationSpeed={3}
          ringRepeatPeriod={2000}
        />
        </div>

  
      {/* 📝 Text Centered */}

{/* 📝 Text + CTA */}
<div className="flex flex-col items-center text-center text-zinc-600 text-xs tracking-[0.2em] font-medium mt-6">
  
  {/* Quote */}
  <p
    className="italic font-medium
               text-2xl md:text-3xl lg:text-4xl
               leading-tight tracking-wide
               mb-6
               bg-gradient-to-r
               from-[#EBCFBE] via-[#DEBAE0] via-[#9E79B3] to-[#B4ABD9]
               bg-clip-text text-transparent
               drop-shadow-[0_0_16px_rgba(180,171,217,0.35)]"
  >
    “Step into discomfort. Step into growth.”
  </p>

  {/* CTA Button */}
  <Link to="/contact">
    <Button name="Contact Me" isBeam containerClass="mt-6" />
  </Link>

  {/* Contact Text */}
  <p className="mt-6 leading-relaxed">
    I work remotely and am open to opportunities worldwide.
    <br />
    Feel free to reach out via email at{" "}
    <span className="text-lime-400 font-medium">
      manasvijindal57@gmail.com
    </span>
  </p>
</div>

{/* FOOTER */}
<footer className="mt-24">
  {/* Zinc Divider Line */}
  <div className="w-full h-px bg-zinc-700/80 mb-6" />

  {/* Footer Text */}
  <p className="text-center text-zinc-500 text-sm">
    Designed & Developed by <span className="text-white">Manasvi Jindal</span>
  </p>
  <p className="text-center text-zinc-600 text-xs mt-1">
    © 2026. All rights reserved.
  </p>
        </footer>

        </div>
 
    
  );
};

export default ReachOut;
