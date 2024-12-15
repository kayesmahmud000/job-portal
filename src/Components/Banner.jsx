import React from 'react';
import { easeOut, motion } from "framer-motion";
import teamImg1 from "../assets/team1.jpg"
import teamImg2 from "../assets/team2.jpg"
const Banner = () => {
    return (
        <div className='my-5 container  mx-auto'>
            <div className="hero bg-base-200 min-h-80 py-10 ">
                <div className="hero-content flex-col lg:justify-between lg:flex-row-reverse">
                    <div className='lg:flex-1 hidden md:block'>
                        <motion.img
                            animate={{ y: [50, 100, 50] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            src={teamImg1}
                            className="max-w-sm w-44 lg:w-72  rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] border-blue-600 shadow-2xl" />
                        <motion.img
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            src={teamImg2}
                            className="max-w-sm w-44 lg:w-72  rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] border-blue-600 shadow-2xl" />
                    </div>
                    <div className='lg:flex-1
                    '>
                        <motion.h1

                            className="lg:text-5xl font-bold">The
                            <motion.span
                                className='ml-2 '
                                animate={{
                                    color: ['#ff1a1a', '#77ff33', '#ff1aff'

                                    ]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                Easiest Way</motion.span>  to Get Your New Job</motion.h1>
                        <p className="py-6">
                            Each month, more than 3 million job seekers turn to
                            website in their search for work, making over 140,000
                            applications every single day
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;