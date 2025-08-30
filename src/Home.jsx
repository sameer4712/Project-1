import React from "react";
import Page from "./assets/download.png";
import Button from "./components/Button";

function Home() {
    return (
        <div className="overflow-x-hidden">
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

                    <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[1.2rem] py-6 max-w-2xl md:max-w-3xl font-semibold leading-relaxed">
                        Step beyond web frameworks into the future of industrial automation.
                        Your software skills can revolutionize manufacturing, robotics, and
                        the physical world.
                    </p>
                </div>

                <div className="relative z-10 px-6 sm:px-12 lg:px-16 flex flex-wrap gap-4 top-32 md:top-40">
                    <Button />
                    <button className="bg-transparent text-orange-400 py-2 px-5 border border-gray-400 rounded-xl font-bold hover:bg-orange-400 hover:text-black transition">
                        Free Simulation Software
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
