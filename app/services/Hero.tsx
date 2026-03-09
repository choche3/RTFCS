"use client"

import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion  } from "framer-motion";
import Image from "next/image";


export default function Hero() {
    return(
        <section className="relative mt-28 w-full h-[65vh] flex items-center">
            {/**Background Image */}
            <Image
               src="/image/20260308_0009.jpg"
               alt="Industrial steel fabrication workshop"
               fill
               priority
                className="object-cover"
            />

            {/**Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
            {/**Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
                >
                <motion.div 
                    variants={fadeUp}
                    className="max-w-3xl">

                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wideHeavy leading-tight mb-6">
                        Our services
                    </h1>

                    <p className="text-steel text-lg md:text-xl mb-8">
                        Providing reliable metal fabrication, beautiful gate installations
                        built and installed on precision and durability since 2012.<br />
                        Security installations like temper proof steel doors and burglar bars.
                    </p>

                </motion.div>
            </motion.div>
        </section>
    )
}