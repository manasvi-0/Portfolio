import React, { useState } from 'react';
import CarouselCanvas from '../components/CarouselCanvas';
const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="about"
      className="relative pt-28 pb-20 px-4 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
        <div>
          <h2 className="text-5xl font-bold mb-6 text-white tracking-tighter">
            ABOUT <span className="ml-3 text-zinc-500">ME</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-4">
            I’m an AI and Machine Learning engineer with a strong foundation in data analytics
            and a growing focus on building intelligent, scalable systems.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            My experience spans machine learning, deep learning, time-series analysis, and MLOps.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setShowResume(true)}
              className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-medium
                         hover:bg-white hover:text-black transition-all duration-300"
            >
              Resume / CV
            </button>

            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium
                         hover:bg-zinc-200 transition-all duration-300"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>

{/* SOCIAL ICONS */}
<div className="flex gap-6 mt-4 items-center">
  
  {/* GitHub */}
  <a
    href="https://github.com/manasvi-0"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center
               opacity-70 hover:opacity-100 transition-all duration-300"
  >
    <img
      src="/assets/github.png"
      alt="GitHub"
      className="w-full h-full object-contain scale-150"
    />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/manasvi-jindal-03aa6a278/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center
               opacity-70 hover:opacity-100 transition-all duration-300"
  >
    <img
      src="/assets/link.webp"
      alt="LinkedIn"
      className="w-full h-full object-contain scale-150"
    />
  </a>

  {/* X */}
  <a
    href="https://x.com/manasvi005"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center
               opacity-70 hover:opacity-100 transition-all duration-300"
  >
    <img
      src="/assets/X.png"
      alt="X"
      className="w-full h-full object-contain"
    />
  </a>

  {/* Gmail */}
  <a
    href="mailto:manasvijindal57@gmail.com"
    className="w-10 h-10 flex items-center justify-center
               opacity-70 hover:opacity-100 transition-all duration-300"
  >
    <img
      src="/assets/gmail.png"
      alt="Email"
      className="w-full h-full object-contain"
    />
  </a>
</div>



      {/* Resume Modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative w-[90%] md:w-[70%] h-[85%] bg-black rounded-2xl border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/assets/manasvi_ai.pdf"
              title="Resume"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* RIGHT: AVATAR */}
      <div className="absolute top-40 right-40 translate-y-6">
        <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden border border-zinc-800 rounded-2xl">
          <img
            src="/assets/me.jpg"
            alt="Avatar"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* CORE SYSTEMS */}
      <h2 className="text-5xl font-bold mt-32 mb-12 text-white tracking-tighter">
        CORE <span className="ml-3 text-zinc-500">SYSTEMS</span>
      </h2>

      <div className="mt-4 rounded-3xl border border-zinc-900/50 backdrop-blur-sm pt-6 px-6 md:px-[60px] relative">
        <div className="relative w-full h-[400px]">
          <CarouselCanvas />
        </div>
      </div>
    </section>
  );
};

export default About;
