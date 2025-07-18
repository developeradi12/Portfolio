import React from 'react'
import { useRef } from "react";
import Card from "../components/Card"
import { Globe } from "../components/globe";
import CopyEmailButton from '../components/CopyEmailButton';
import { FrameWorks } from '../components/Frameworks';

const About = ({ id }) => {
    const grid2Container = useRef();
    return (
        <section id={id} className="c-space section-spacing" >
            <h2 className="text-heading">About Me</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/*Grid 1 */}
                <div className='flex items-end grid-default-color grid-1'>
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className='z-10'>
                        <p className='headtext'>Hi, I'm Aditya Gangil</p>
                        <p className='subtext'>
                            Over the last one years, I developed my frontend and backend dev
                            skills to deliver dynamic and software and web applications.
                        </p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
                </div>

                {/*Grid 2 */}
                <div className='grid-default-color grid-2'>
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="Write with Wisdom"
                            containerRef={grid2Container} />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="Build Scalable Systems"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                            text="Clean Responsibilities"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            text="	Reusable Architecture"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="Smart Design Thinking"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/image/stack/Express.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/image/stack/NodeJs.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                            image="assets/image/stack/React.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "15%", left: "20%" }}
                            image="assets/image/stack/Redux.svg"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>

                {/*Grid 3 */}
                <div className='grid-black-color grid-3'>
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            Operating remotely — available for opportunities across the globe.                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>

                {/* Grid 4 - Fun Developer Fact */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col justify-center items-center text-center size-full gap-4">
                        <p className="headtext">Quick Developer Stat 💡</p>
                        <p className="subtext max-w-xs">
                            I've written over <span className="text-white font-semibold">50,000+ lines</span> of code in the last year, and I still get excited about writing my next `console.log`.
                        </p>
                        <p className="text-sm text-neutral-400 italic">"Code is 10% writing, 90% debugging."</p>
                    </div>
                </div>


                {/*Grid 5 */}
                <div className='grid-default-color grid-5'>
                    <div className="z-10 w-[50%]">
                        <p className="headText">Teck Stack</p>
                        <p className="subtext">
                            I specialize in a variety of languages, frameWorks, and tools that
                            allow me to build robust and scalable applications
                        </p>
                    </div><div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <FrameWorks />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
