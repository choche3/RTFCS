"use client"
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion"
import Image from "next/image";

export default function Hero() {
    return(
        <section className="relative mt-25 w-full h-[65vh] flex items-center">
            {/**Background Image */}
            <Image
               src="/image/IMG-20260225-WA0018.jpg"
               alt="Industrial steel fabrication workshop"
               fill
               priority
               quality={75}
               sizes="100vw"
               className="object-cover"
            />

            {/**Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
            {/**Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div 
                    variants={fadeUp}
                    initial="hidden"
                    whileInView= "show"
                    viewport={{ once: true }}
                    className="max-w-3xl">

                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
                        Our Projects
                    </h1>

                    <p className="text-steel text-lg md:text-xl mb-8">
                        A showcase of fabrication, structural steel and security projects
                        delivered with strength and precision.<br />
                        Flats and homes, steel structure installation to make a neat and tidy look
                        around the yard.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}