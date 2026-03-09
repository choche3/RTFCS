"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"

export default function MissionStatement() {
    return(
        <motion.section 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-700 py-20 text-center text-white">
            <motion.div 
                variants={fadeUp}
                className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
                Our Mission
                </h2>
                <p className="text-lg">
                To deliver high-quality metal fabrication and security solutions built
                on precision, reliability, and long-term durability.
                </p>
            </motion.div>
        </motion.section>
    )
}