import React from "react";
import Page from "./assets/download.png";
import Button from "./components/Button";
import { Mouse, Cpu, Zap, GlobeLock } from 'lucide-react'
import Card from "./components/Card";
import work from './assets/space.mp4'


import AOS from "aos";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="overflow-x-hidden bg-black">
            <div className="relative w-full h-screen">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={Page}
                    alt="Background"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

                <div className="relative z-10 px-6 sm:px-12 lg:px-16 top-32 md:top-40">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-snug">
                        Where <span className="text-cyan-400">Code </span> <br className="hidden sm:block" />
                        Controls <span className="text-orange-400">Reality</span>
                    </h1>

                    <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-[1.3rem] py-6 max-w-2xl md:max-w-3xl font-semibold leading-relaxed">
                        Step beyond web frameworks into the future of industrial automation.
                        Your software skills can revolutionize manufacturing, robotics, and
                        the physical world.
                    </p>
                </div>

                <div className="relative z-10 px-6 sm:px-12 lg:px-16 flex flex-wrap gap-4 top-32 md:top-40">
                    <Button />
                    <button className="bg-transparent text-orange-400 py-2 px-5 border border-gray-400 rounded-xl font-bold hover:text-cyan-50 transition">
                        Free Simulation Software
                    </button>
                </div>
                <Mouse className='w-12 h-12 text-cyan-300 relative left-190 top-87 animate-bounce ' />
            </div>
            <div className="flex flex-col mt-15 gap-7 items-center justify-center text-center px-4" data-aos="fade-up">
                <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold">
                    Why <span className="text-cyan-400">Industrial Tech</span>?
                </h1>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-[1.3rem] max-w-xl md:max-w-2xl lg:max-w-4xl">
                    Transform from building apps to building the future. Your code doesn't just run
                    in browsers—it controls robots, optimizes factories, and shapes the physical world.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:gap-8">
                <div data-aos="fade-up" data-aos-delay="100">
                    <Card
                        image={<GlobeLock className="w-14 h-14 rounded-2xl bg-[#DC2626] text-white p-2 mb-6" />}
                        name="Real-World Impact"
                        para="Your code directly controls physical systems, moving from digital interfaces to tangible results that change how things are made."
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <Card
                        image={<Cpu className="w-14 h-14 rounded-2xl bg-[#8B4513] text-white p-2 mb-6" />}
                        name="Cutting-Edge Tech"
                        para="Work with IoT, edge computing, real-time systems, and digital twins—the most advanced technologies in industry."
                    />
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <Card
                        image={<Zap className="w-14 h-14 rounded-2xl bg-[#064E3B] text-white p-2 mb-6" />}
                        name="High Autonomy"
                        para="Lead technical decisions, architect systems, and solve complex problems with minimal bureaucracy and maximum engineering freedom."
                    />
                </div>

            </div>
            <div className="pt-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-10">
                <div className="flex-1 flex flex-col gap-8">
                    <h1 className="text-4xl sm:text-5xl text-white font-bold">
                        From <span className="text-green-500">Abstract </span>
                        to <span className="text-orange-400">Physical</span>
                    </h1>

                    <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-[1.3rem] max-w-xl md:max-w-2xl lg:max-w-4xl leading-relaxed">
                        Stop building another CRUD app. Start building systems where your algorithms
                        control robotic arms, your data structures optimize supply chains, and your
                        code directly impacts the physical world.
                    </p>

                    <ul className="text-gray-300 text-[1rem] leading-relaxed [&>li]:before:content-['➤'] [&>li]:before:mr-2 [&>li]:before:text-green-500 space-y-2">
                        <li>PLC Programming meets Modern Software Engineering</li>
                        <li>SCADA Systems using Web Technologies</li>
                        <li>Industrial IoT using modern libraries and Real-time Data</li>
                        <li>Digital Twins using 3D Graphics and Open Source Technologies</li>
                    </ul>

                    <div className="bg-slate-900 border border-gray-600 rounded-xl p-4">
                        <video
                            src={work}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto rounded-3xl shadow-lg"
                        ></video>
                    </div>
                </div>

                <div className="flex-1 flex flex-col bg-slate-900 p-4  rounded-xl items-start text-white font-mono text-[0.9rem] border border-gray-700 w-full lg:w-[40rem] lg:mt-[7.7rem] lg:h-[35rem] ">
                    <p>(* IEC 61131-3 Structured Text *)</p>

                    <p className="py-2">PROGRAM ConveyorMerge</p>

                    <p className="pt-2">VAR</p>

                    <p className="pl-5 pt-3">
                        ConveyorA_Speed : REAL := 1.5; (* m/s *) <br />
                        ConveyorB_Speed : REAL := 1.2; (* m/s *) <br />
                        PartDetectorA : BOOL; <br />
                        PartDetectorB : BOOL; <br />
                        AllowMerge : BOOL := FALSE; <br />
                    </p>

                    <p className="pb-4">END_VAR</p>

                    <p className="leading-7">
                        IF PartDetectorA AND NOT PartDetectorB THEN <br />
                        <span className="pl-5">AllowMerge := TRUE;</span><br />
                        <span className="pl-5">ConveyorA_Speed := 2.0; (* Accelerate *)</span><br />
                        ELSIF PartDetectorB THEN <br />
                        <span className="pl-5">ConveyorA_Speed := 0.8; (* Wait for merge *)</span><br />
                        END_IF;
                    </p>

                    <div className="w-full bg-green-950 px-5 py-3 mt-4 border-l-4 border-green-500 rounded">
                        <p className="text-white font-bold">✓ PLC Program Executed</p>
                        <p className="text-white text-[0.8rem]">
                            Conveyor A: 2.0 m/s, AllowMerge: TRUE, Parts flowing smoothly
                        </p>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Home;
