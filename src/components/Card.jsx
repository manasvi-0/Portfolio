
import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { HOVER_TRANSITION_SPEED } from '../constants/carouselData';

const GrayscaleShaderMaterial = {
  uniforms: {
    uTexture: { value: null },
    uGrayscale: { value: 1.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uGrayscale;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(uTexture, vUv);
      float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      vec3 finalColor = mix(color.rgb, vec3(gray), uGrayscale);
      gl_FragColor = vec4(finalColor, color.a);
    }
  `,
};

const Card = ({ data, position, width, height }) => {
  const meshRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  
  // Load texture with crossOrigin support. 
  // Error handling is managed by Suspense in the parent component.
  const logoTexture = useLoader(THREE.TextureLoader, data.image, (loader) => {
    loader.setCrossOrigin('anonymous');
  });

  const combinedTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const scale = 4;
    canvas.width = width * scale;
    canvas.height = height * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Card Background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.roundRect(0, 0, canvas.width, canvas.height, 10 * scale);
    ctx.fill();

    // Icon drawing
    const padding = 14 * scale;
    const logoSize = (height - 24) * scale;
    const logoX = padding;
    const logoY = (canvas.height - logoSize) / 2;

    if (logoTexture && logoTexture.image) {
      try {
        ctx.drawImage(logoTexture.image, logoX, logoY, logoSize, logoSize);
      } catch (e) {
        // Fallback if image data is corrupted
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.arc(logoX + logoSize/2, logoY + logoSize/2, logoSize/3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const textX = logoX + logoSize + (12 * scale);
    
    // Label
    ctx.font = `bold ${14 * scale}px Inter, system-ui, sans-serif`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(data.label.toUpperCase(), textX, (canvas.height / 2) - (6 * scale));

    // Category
    ctx.font = `${9 * scale}px Inter, system-ui, sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText(data.category.toUpperCase(), textX, (canvas.height / 2) + (8 * scale));

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }, [data, logoTexture, width, height]);
  
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      ...GrayscaleShaderMaterial,
      uniforms: {
        ...THREE.UniformsUtils.clone(GrayscaleShaderMaterial.uniforms),
        uTexture: { value: combinedTexture },
      },
      transparent: true,
    });
  }, [combinedTexture]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const target = hovered ? 0.0 : 1.0;
    const step = delta / HOVER_TRANSITION_SPEED; 
    
    if (Math.abs(material.uniforms.uGrayscale.value - target) > 0.001) {
      if (material.uniforms.uGrayscale.value < target) {
        material.uniforms.uGrayscale.value = Math.min(target, material.uniforms.uGrayscale.value + step);
      } else {
        material.uniforms.uGrayscale.value = Math.max(target, material.uniforms.uGrayscale.value - step);
      }
    }

    const scaleTarget = hovered ? 1.04 : 1.0;
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, scaleTarget, 0.1));
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[width, height]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

export default Card;
