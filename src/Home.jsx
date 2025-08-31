import React from "react";
import Page from "./assets/download.png";
import Button from "./components/Button";
import { Mouse, Cpu, Zap, GlobeLock, Fan, Infinity } from 'lucide-react'
import Card from "./components/Card";
import work from './assets/space.mp4'
import Car from './assets/fac.mp4'


import AOS from "aos";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

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
                    <Button name="Apply Now" />
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
            <motion.div className="pt-24 px-6 md:px-12 lg:px-24 flex flex-col lg:py-14 lg:flex-row gap-10 bg-gradient-to-t from-gray-900/80 to-black"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: .6, ease: "easeOut" }}
            >
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

                    <motion.div className="bg-slate-900 border border-gray-600 rounded-xl p-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        <video
                            src={work}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto rounded-3xl shadow-lg"
                        ></video>
                    </motion.div>
                </div>

                <motion.div className="flex-1 flex flex-col bg-slate-900 p-4  rounded-xl items-start text-white font-mono text-[0.9rem] border border-gray-700 w-full lg:w-[40rem] lg:mt-[7.7rem] lg:h-[35rem] "
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
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

                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col gap-5 justify-center items-center mt-12 px-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <button className="bg-[#2d0d3a] text-[#c47dff] px-6 py-3 rounded-lg border border-gray-700 font-bold text-lg sm:text-xl">
                    Our Vision
                </button>

                <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug">
                    Engineering <span className="text-[#c47dff]">Excellence</span>
                </h1>

                <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-xl sm:max-w-2xl lg:max-w-4xl py-3">
                    To create the most intellectually stimulating environment for optimistic engineers,
                    granting them autonomy to act decisively, ensuring impactful and innovative automation
                    solutions.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-around mt-10 lg:mt-20 gap-6 px-4 sm:px-8 lg:px-20">

                <motion.div
                    className="flex flex-col w-full sm:max-w-lg lg:max-w-2xl h-auto"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center mb-4 sm:mb-6">
                        <span className="text-white px-2 sm:px-3 py-1 rounded-md mr-2">
                            <Fan size={28} className="inline text-cyan-400" /> Real-time Control Systems
                        </span>
                    </h1>

                    <div className="bg-slate-900 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 flex flex-col flex-1 border border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                            <h2 className="text-cyan-50 font-bold text-lg sm:text-xl lg:text-2xl flex items-center">
                                <span className="px-2 py-1 rounded-md mr-2 text-white">MQTT</span>
                                Industrial Messaging
                            </h2>
                            <button className="text-slate-900 bg-cyan-400 px-4 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition text-sm sm:text-base">
                                Run Code
                            </button>
                        </div>

                        <div className="space-y-3">
                            <Card2 input="Input" />
                            <Card2 input="Processing" />
                            <Card2 input="Decision" />
                        </div>

                        <div className="bg-emerald-950 px-3 sm:px-4 py-4 sm:py-6 rounded-xl mt-4 leading-relaxed border-gray-700 border">
                            <h2 className="text-cyan-50 font-bold text-sm sm:text-base flex items-center mb-2 sm:mb-3">
                                <Cpu size={16} className="inline mr-2" /> MQTT Industrial Messaging
                            </h2>
                            <p className="text-cyan-50 text-xs sm:text-sm lg:text-base">
                                These examples show real MQTT payload data from industrial systems,
                                featuring hierarchical topic structures, standardized JSON formats,
                                and telemetry data for sensors, PLCs, and alarms in manufacturing environments.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col w-full lg:w-[35rem] space-y-5 mt-6 lg:mt-0"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center">
                        <span className="px-3 py-2 rounded-md mr-2 -mt-1 text-white">
                            <Infinity size={32} className="inline text-[#c47dff]" /> Our Core Values
                        </span>
                    </h1>

                    <div className="text-white bg-slate-900 px-6 sm:px-8 py-6 rounded-xl border border-gray-700 space-y-5">
                        <div className="flex items-start gap-3">
                            <span className="w-3 h-3 rounded-full bg-green-500 mt-2"></span>
                            <p className="font-bold text-lg sm:text-xl">Project needs come first</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></span>
                            <div>
                                <p className="font-bold text-lg sm:text-xl">Intellectual Stimulation</p>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    Complex technical challenges that push the boundaries of engineering excellence.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="w-3 h-3 rounded-full bg-orange-400 mt-2"></span>
                            <div>
                                <p className="font-bold text-lg sm:text-xl">Engineering Autonomy</p>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    Freedom to make decisive technical decisions and architect innovative solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4 lg:mt-5 overflow-hidden shadow-lg border border-gray-700">
                        <video src={Car} className="w-full rounded-lg object-cover" autoPlay
                            loop
                            muted
                            playsInline />
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 px-6 sm:px-12 lg:px-24 mt-12"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Card3 no="31" title="Sucessfull Project" para="Launched across multiple industries" />
                <Card3 no="3" title="Fortune 500 Companies" para="Trusted by industry leaders worldwide" />
                <Card3 no="3" title="Countries" para="Global offices serving international clients" />
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center py-16 gap-6 px-4 text-center"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
            >
                <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug">
                    Ready to Build the <span className="text-cyan-400">Future</span>?
                </h1>
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-xl sm:max-w-2xl lg:max-w-4xl">
                    Join a team where your code doesn't just run in browsers—it runs factories, controls robots, and shapes the physical world around us.
                </p>
                <Button name="Start Your Application" />
            </motion.div>


        </div>
    );
}

export default Home;
