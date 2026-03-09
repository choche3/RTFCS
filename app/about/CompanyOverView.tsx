"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"

export default function CompanyOverview() {
    return(
        <section className="bg-gray-700 py-20">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center"
            >

                <motion.div variants={fadeUp}>
                <h2 className="text-3xl text-black md:text-4xl font-bold uppercase mb-6">
                    Who We Are
                </h2>

                <p className="text-white mb-6">
                    Established in 2012, our company has built a solid reputation in metal
                    fabrication, security installations, and construction services.
                    With over a decade of hands-on industry experience, we have consistently
                    delivered durable and dependable solutions tailored to our clients’ needs.
                </p>

                <p className="text-gray-700">
                    Our skilled team combines technical expertise with precision workmanship,
                    ensuring every project meets the highest standards of strength, safety,
                    and structural integrity.
                </p>
                </motion.div>

                <motion.div     
                    variants={fadeUp}
                    className="border border-steel/30 p-10 bg-gray-200 shadow-lg rounded-2xl"
                >
                    <h3 className="text-2xl text-black font-bold mb-4">Since 2012</h3>
                    <p className="text-gray-600">
                        Over 13 years of experience delivering reliable metal fabrication
                        and security solutions across Zambia.
                    </p>
                </motion.div>

            </motion.div>
</section>
    )
}