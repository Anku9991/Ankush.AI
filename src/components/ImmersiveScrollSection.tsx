"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LiquidImageMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uDistortionOffset: 0.0,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uDistortionOffset;
    
    // Simplex noise
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vUv = uv;
      vec3 pos = position;
      float noise = snoise(vec2(pos.x * 2.0 + uTime * 0.5, pos.y * 2.0 + uTime * 0.5));
      pos.z += noise * 0.5 * uDistortionOffset;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float uDistortionOffset;
    uniform float uTime;

    void main() {
      vec2 uv = vUv;
      float r = texture2D(uTexture, uv + vec2(0.02 * uDistortionOffset, 0.0)).r;
      float g = texture2D(uTexture, uv).g;
      float b = texture2D(uTexture, uv - vec2(0.02 * uDistortionOffset, 0.0)).b;
      float alpha = 1.0 - (uDistortionOffset * 0.8);
      gl_FragColor = vec4(r, g, b, alpha);
    }
  `
);

extend({ LiquidImageMaterial });

const ImagePlane = ({ url, position, index, globalZ, maxZ }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const texture = useTexture(url);

  useFrame((state) => {
    if (!materialRef.current || !meshRef.current) return;
    materialRef.current.uTime = state.clock.elapsedTime;
    
    const relativeZ = position[2] + globalZ.current;
    
    let distortion = 0;
    if (relativeZ > -5 && relativeZ < 5) {
      distortion = Math.max(0, 1.0 - Math.abs(relativeZ) / 5);
    }
    
    materialRef.current.uDistortionOffset = distortion;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <planeGeometry args={[16, 9, 64, 64]} />
      {/* @ts-ignore */}
      <liquidImageMaterial ref={materialRef} uTexture={texture} transparent={true} />
    </mesh>
  );
};

const Scene = ({ images, texts, setActiveIndex, scrollRef }: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const globalZ = useRef(0);

  useEffect(() => {
    if (!groupRef.current || !scrollRef.current) return;

    const zSpacing = 20; 
    const totalDistance = zSpacing * (images.length - 1);

    gsap.to(groupRef.current.position, {
      z: totalDistance + 5,
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          globalZ.current = groupRef.current!.position.z;
          const progress = self.progress;
          const currentIndex = Math.min(
            Math.floor(progress * images.length),
            images.length - 1
          );
          setActiveIndex(currentIndex);
        }
      }
    });
  }, [images.length]);

  return (
    <group ref={groupRef}>
      {images.map((url: string, index: number) => (
        <ImagePlane 
          key={index} 
          index={index} 
          url={url} 
          position={[0, 0, -index * 20]} 
          globalZ={globalZ}
        />
      ))}
      <mesh position={[0, 0, -50]}>
         <sphereGeometry args={[100, 16, 16]} />
         <meshBasicMaterial color="#050a14" side={THREE.BackSide} />
      </mesh>
    </group>
  );
};

export default function ImmersiveScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/assets/hero-image.png",
    "/assets/saas-dashboard.png",
    "/assets/queue-management.png"
  ];

  const texts = [
    "CREATIVE DIGITAL EXPERIENCES",
    "ENTERPRISE GRADE SCALABILITY",
    "SEAMLESS SMART WORKFLOWS"
  ];

  return (
    <section 
      ref={containerRef}
      style={{
        position: "relative",
        height: "400vh",
        background: "#050a14",
      }}
    >
      <div 
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden"
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <Scene 
            images={images} 
            texts={texts} 
            setActiveIndex={setActiveIndex} 
            scrollRef={containerRef} 
          />
        </Canvas>

        <div 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
            width: "100%",
            zIndex: 10
          }}
        >
          <h2 
            key={activeIndex} 
            className="section-title fade-in-text"
            style={{ 
              color: "#fff", 
              fontSize: "clamp(2rem, 5vw, 5rem)",
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              margin: 0
            }}
          >
            {texts[activeIndex]}
          </h2>
        </div>
      </div>
      
      <style>{`
        .fade-in-text {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
