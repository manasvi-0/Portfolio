import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/canvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
const Hero = () => {
    // const X = useControls(
    //     'HackerRoom',{
    //         positionX: {value:2.5, min: -10, max:10},
    //         positionY: {value:2.5, min: -10, max:10},
    //         positionZ: {value:2.5, min: -10, max:10},
    //         rotationX: {value:0, min: -Math.PI, max:Math.PI},
    //         rotationY: {value:0, min: -Math.PI, max:Math.PI},
    //         rotationZ: {value:0, min: -Math.PI, max:Math.PI},   
    //         scale: {value:8, min: 0.9, max:100}
    //     }
    // );
    const isSmall = useMediaQuery({ query: '(max-width: 440px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const Sizes = calculateSizes(isSmall, isMobile, isTablet);



    return (

        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Manasvi <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Learning Fast. Building Smart.</p>
            </div>

            <div className="w-full h-full absolute inset-0">
            
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                     
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom scale={Sizes.deskScale} position={Sizes.deskPosition} rotation={[0,0.5,0]} />
                        </HeroCamera>
                        <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="/contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
      
    </section>
  );
};

export default Hero;