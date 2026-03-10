"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations";


export default function Hero(){
    return(
        <section className="relative mt-25 w-full h-[65vh] flex items-center">
            {/**Bsckground Image */}
            <Image
                src="/image/IMG-20260309-WA0022.jpg"
                alt="industrial steel fabrication workshop"
                fill
                priority
                quality={75}
                sizes="100vh"
                className="object-cover"
            />

            {/**Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
            {/**Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true }}
                    className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
                            Contact Us
                        </h1>
                        <p className="text-steel max-w-2xl mx-auto">
                            <em>Know us, know the quality.</em> Whether you have questions about our 
                            services, want to discuss a project, or need a quote, our team is ready to 
                            assist you, and deliver to you strength, precision and reliability. 
                            Reach out today and let's build something strong together.

                        </p>
                </motion.div>
            </div>
        </section>
    )
}