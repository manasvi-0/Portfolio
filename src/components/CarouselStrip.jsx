
import React, { useRef, useMemo, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Card from './Card';
import { CARD_WIDTH, CARD_GAP } from '../constants/carouselData';

const CarouselStrip = ({ cards, speed, yPos, reverse = false }) => {
  const groupRef = useRef(null);
  const { size } = useThree();
  
  const cycleWidth = cards.length * (CARD_WIDTH + CARD_GAP);
  const copiesCount = useMemo(() => {
    return Math.ceil(size.width / cycleWidth) + 2;
  }, [size.width, cycleWidth]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const direction = reverse ? 1 : -1;
    const moveAmount = speed * 60 * delta;
    groupRef.current.position.x += moveAmount * direction;

    if (reverse) {
      if (groupRef.current.position.x > 0) {
        groupRef.current.position.x -= cycleWidth;
      }
    } else {
      if (groupRef.current.position.x < -cycleWidth) {
        groupRef.current.position.x += cycleWidth;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, yPos, 0]}>
      {Array.from({ length: copiesCount + 1 }).map((_, i) => {
        const copyIndex = i - 1;
        return (
          <group key={copyIndex} position={[copyIndex * cycleWidth, 0, 0]}>
            {cards.map((card, index) => (
              <Suspense key={`${copyIndex}-${card.id}`} fallback={null}>
                <Card
                  data={card}
                  width={CARD_WIDTH}
                  height={54}
                  position={[index * (CARD_WIDTH + CARD_GAP), 0, 0]}
                />
              </Suspense>
            ))}
          </group>
        );
      })}
    </group>
  );
};

export default CarouselStrip;
