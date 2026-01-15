import React, { useState } from 'react';
import CarouselCanvas from '../components/CarouselCanvas';

const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="about"
      className="relative pt-20 md:pt-28 pb-20 px-4 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
            ABOUT <span className="ml-2 md:ml-3 text-zinc-500">ME</span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-4">
            I’m an AI and Machine Learning engineer with a strong foundation in data analytics
            and a growing focus on building intelligent, scalable systems.
          </p>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
            My experience spans machine learning, deep learning, time-series analysis, and MLOps.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-6">
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

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-6 mt-8 items-center">
            {[
              { href: "https://github.com/manasvi-0", src: "/assets/github.png", alt: "GitHub" },
              { href: "https://www.linkedin.com/in/manasvi-jindal-03aa6a278/", src: "/assets/link.webp", alt: "LinkedIn" },
              { href: "https://x.com/manasvi005", src: "/assets/X.png", alt: "X" },
              { href: "mailto:manasvijindal57@gmail.com", src: "/assets/gmail.png", alt: "Email" },
            ].map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition"
              >
                <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* AVATAR (INLINE ON MOBILE) */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border border-zinc-800 rounded-2xl">
            <img
              src="/assets/me.jpg"
              alt="Avatar"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* RESUME MODAL */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative w-full md:w-[70%] h-[80%] bg-black rounded-2xl border border-zinc-800"
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

      {/* CORE SYSTEMS */}
      <h2 className="text-3xl md:text-5xl font-bold mt-24 mb-10 text-white tracking-tighter">
        CORE <span className="ml-2 md:ml-3 text-zinc-500">SYSTEMS</span>
      </h2>

      <div className="rounded-3xl border border-zinc-900/50 backdrop-blur-sm pt-6 px-4 md:px-[60px]">
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px]">
          <CarouselCanvas />
        </div>
      </div>
    </section>
  );
};

export default About;
