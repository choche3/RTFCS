"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"

export default function Assurance() {
    return(
        <motion.section 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-800 py-20 text-center"
        >
            <motion.div 
            variants={fadeUp}
                className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
                Built on Strength. Trusted for Reliability.
                </h2>
                <p className="text-gray-200">
                We remain committed to delivering workmanship that stands the test of time.
                Our goal is to continue raising the standard of metal fabrication and
                security services in every project we undertake.
                </p>
            </motion.div>
        </motion.section>
    )
}