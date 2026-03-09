"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";


export default function Hero(){
    return(
        <section className="relative mt-25 w-full h-[65vh] flex items-center">
            {/**Background */}
            <Image
                src="/image/IMG-20260225-WA0015.jpg"
                alt="Industrial steel fabrication workshop"
                fill
                priority
                className="object-cover"
            />

            {/**Dark overlay */}
            <div className="absolute inset-0 bg-black/70 "/>
            {/**Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div 
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
                            About Us
                        </h1>
                        <p className="text-steel text-lg md:text-xl mb-8">
                            Building strength, security and reliability in every project since 2012
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}