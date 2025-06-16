import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';
import { easing } from 'maath';
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = ({ id }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id={id}
      className="flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : 0.4}
                position={isMobile ? [0, -1.5, 0] : [0, -1, 0]}
              />
            </Float>
            <OrbitControls enableZoom={false} />
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
