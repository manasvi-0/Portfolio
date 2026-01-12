
import React, { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import CarouselStrip from './CarouselStrip';
import { 
  CARD_HEIGHT, 
  CARD_GAP, 
  STRIP_1_DATA, 
  STRIP_2_DATA, 
  STRIP_3_DATA 
} from '../constants';

const Scene = () => {
  const { size } = useThree();
  const stripYOffset = CARD_HEIGHT + CARD_GAP + 40;

  return (
    <>
      <OrthographicCamera 
        makeDefault 
        position={[0, 0, 100]} 
        zoom={1}
        left={-size.width / 2}
        right={size.width / 2}
        top={size.height / 2}
        bottom={-size.height / 2}
      />
      
      <ambientLight intensity={1} />
      
      <group position={[0, 0, 0]}>
        <CarouselStrip 
          cards={STRIP_1_DATA} 
          speed={0.8} 
          yPos={stripYOffset} 
        />
        <CarouselStrip 
          cards={STRIP_2_DATA} 
          speed={0.6} 
          yPos={0} 
          reverse 
        />
        <CarouselStrip 
          cards={STRIP_3_DATA} 
          speed={1.0} 
          yPos={-stripYOffset} 
        />
      </group>
    </>
  );
};

const CarouselCanvas = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-transparent">
      <Canvas dpr={[1, 2]} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CarouselCanvas;
