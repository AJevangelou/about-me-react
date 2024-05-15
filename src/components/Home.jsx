import React, {useRef} from 'react';
import Typewriter from './Typewriter';
import { Canvas } from '@react-three/fiber';
import PC from '../models/PC';
import { OrbitControls } from '@react-three/drei';
import Floor from '../models/Floor';
import { useFrame, useThree } from "@react-three/fiber";
const Home = () => {
  const groupRef = useRef();

  return (
    <React.Fragment>
        <section id='home' className='bg-gradient-to-br from-background from-50% to-blue-foreground w-full flex lg:flex-row flex-col justify-center items-center h-screen padding-x'>
            <div className='relative flex flex-col h-[100vh] justify-center items-start max-lg:items-center w-full max-xl:mx-auto pt-10 xl:px-6'>
                <h1 className='select-none leading-none mt-0 text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='select-none  mt-0 text-red-400 xl:whitespace-nowrap relative z-10 pr-10'>I'm Alex,</span>
                    <br />
                    <span className='select-none max-md:text-2xl text-2xl text-white xl:whitespace-nowrap relative z-10 pr-10'>A Tech Enthusiast 🚀</span>
                    <br />
                    <span className='select-none max-md:text-2xl text-2xl text-white xl:whitespace-nowrap relative z-10 pr-10'>Specializing in:</span>
                    <br />
                    <span className='select-none max-md:text-4xl text-7xl font-custom1 text-white relative z-10 pr-10'>
                        <Typewriter />
                    </span>
                </h1>

            </div>
            <div className="flex justify-center w-full h-[60vh] items-center ">
                <Canvas className={`w-full bg-transparent`}
                    style={{ maxWidth: 'calc(100vw - 400px)', maxHeight: '100vh' }}
                    camera={{ position: [-0.45, 1, -4], rotation: [0, -170, 0], fov: 70, near: 0.1, far: 1000 }}>
                    <directionalLight position={[-25, -6.5, -98]} intensity={0.5} />
                    <ambientLight intensity={1} />
                    <PC />
                    <OrbitControls enablePan={false} autoRotate={true} enableZoom={false} maxPolarAngle={Math.PI / 2.2} />
                </Canvas> 
            </div>
        </section>
    </React.Fragment>
);

};

export default Home;
