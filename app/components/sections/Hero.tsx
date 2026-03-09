"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
    return(
        <section className="relative mt-15 w-full h-[75vh] flex items-center">
            {/**Background Image */}
            <Image
               src="/image/MainHero.jpg"
               alt="Industrial steel fabrication workshop"
               fill
               priority
                className="object-cover"
            />

            {/**Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
            {/**Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    className="max-w-3xl"
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                >

                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
                        Real Time <span className=" text-yellow-600">Fabricators</span> & Construction Services
                    </h1>

                    <p className="text-steel text-lg md:text-xl mb-8">
                        Serving Lusaka and Kitwe with reliable structural, security, and industrial
                        solutions. Contact us for your steel fabrication and construction needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                           href="/contacts"
                           className="bg-yellow-600 text-white px-8 py-4 rounded-md uppercase font-bold tracking-wide border border-industrial hover:bg-yellow-500 transition duration-300 text-center"
                        >
                            Contact Us 📞
                        </Link>

                        <Link 
                            href="/projects"
                            className="border border-white px-8 py-4 uppercase rounded-md font-bold tracking-wide hover:bg-white hover:text-black transition-colors text-center"
                        >
                            View Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}