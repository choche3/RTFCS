"use client"

import { fadeUp } from "@/lib/animations"
import { motion } from "framer-motion"

export default function Assurance() {
    return(
        <section className="bg-industrial py-16 text-center text-white">
            <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true}}
                className="max-w-4xl mx-auto px-6"
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Built on Strength. Delivered with Precision.
                </h2>
                <p>
                Our team is committed to providing dependable fabrication
                and construction solutions tailored to your needs.
                </p>
            </motion.div>
        </section>
    )
}