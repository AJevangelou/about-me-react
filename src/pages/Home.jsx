import React, { useRef, useState, useEffect } from "react";
import Typewriter from "../components/Typewriter";
import { Canvas, useFrame } from "@react-three/fiber";
import PC from "../models/PC";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { ScrollControls, useScroll, OrbitControls } from "@react-three/drei";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import flyThroughState from "../Fly.json";
const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const groupRef = useRef();
  const sheet = getProject("Fly Through 2", { state: flyThroughState }).sheet(
    "Scene"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <section
        id="home"
        className="bg-gradient-to-br from-background from-50% to-blue-foreground w-full flex lg:flex-row flex-col justify-center items-center h-screen padding-x"
      >
        <div className="relative flex flex-col h-[100vh] justify-center items-start max-lg:items-center w-full max-xl:mx-auto pt-10 xl:px-6">
          <h1 className="select-none leading-none mt-0 text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="select-none  mt-0 text-red-400 xl:whitespace-nowrap relative z-10 pr-10">
              I'm Alex,
            </span>
            <br />
            <span className="select-none max-md:text-2xl text-2xl text-white xl:whitespace-nowrap relative z-10 pr-10">
              A Tech Enthusiast 🚀
            </span>
            <br />
            <span className="select-none max-md:text-2xl text-2xl text-white xl:whitespace-nowrap relative z-10 pr-10">
              Specializing in:
            </span>
            <br />
            <span className="select-none max-md:text-4xl text-7xl font-custom1 text-white relative z-10 pr-10">
              <Typewriter />
            </span>
          </h1>
        </div>
        <div className="flex justify-center w-[100%] h-1/2 items-center">
          <Canvas gl={{ preserveDrawingBuffer: true }}>
            {/* <OrbitControls
              enablePan={false}
              autoRotate={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2.2}
            /> */}
            <ScrollControls pages={3} damping={1} maxSpeed={0.5}>
              <SheetProvider sheet={sheet}>
                <Scene />
              </SheetProvider>
            </ScrollControls>
          </Canvas>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;

function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    //the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    //update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });
  return (
    <>
      <directionalLight position={[-25, -6.5, -98]} intensity={0.5} />
      <ambientLight intensity={2} />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[-0.409, 0.231, -2.432]}
        rotation={[0, -3.02, 0]}
        fov={75}
        near={0.1}
        far={70}
      />
      <PC />
    </>
  );
}
