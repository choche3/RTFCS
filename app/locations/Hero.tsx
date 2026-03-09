"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"


export default function Hero(){
    return(
        <section className="relative mt-28 w-full h-[65vh] flex items-center">
            {/**Background Image */}
            <Image
                src="/image/IMG-20260225-WA0023.jpg"
                alt="Industrial steel fabrication workshop"
                fill
                priority
                className="object-cover"
            />

            {/**Dark overlay */}
            <div className="absolute inset-0 bg black/70" />
            {/**Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div 
                    className = "max-w-3xl"
                    initial= "hidden"
                    animate="show"
                    variants={fadeUp}
                >

                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-6">
                        Our Location
                    </h1>

                    <p className="text-steel max-w-2xl mx-auto">
                        Visit our workshop or office to discuss your fabrication and construction needs with us.
                    </p>

                </motion.div>
            </div>
        </section>
    )
}