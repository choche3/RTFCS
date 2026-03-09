"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"

export default function Experience() {
    return(
        <section className="bg-navy py-20 text-white">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 text-center">

                <motion.div variants={fadeUp}>
                    <h3 className="text-4xl font-extrabold text-yellow-600 mb-4">13+</h3>
                    <p className="uppercase tracking-wide text-steel">
                        Years of Operation
                    </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <h3 className="text-4xl font-extrabold text-yellow-600 mb-4">100+</h3>
                    <p className="uppercase tracking-wide text-steel">
                        Completed Projects
                    </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                <h3 className="text-4xl font-extrabold text-yellow-600 mb-4">Dedicated</h3>
                <p className="uppercase tracking-wide text-steel">
                    Skilled Team
                </p>
                </motion.div>

            </motion.div>
        </section>
    )
}