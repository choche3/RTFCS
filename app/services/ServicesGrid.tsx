"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"

export default function ServicesGrid() {
    return(
        <section className="bg-navy py-20">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-6 lg:px-12"
            >
                <motion.h2 
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold text-center uppercase mb-16"
                >
                    What We Do
                </motion.h2>

                <motion.div 
                    variants={fadeUp}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-xl shadow border border-steel/30">
                        <h3 className="text-xl text-gray-800 font-bold mb-4">Metal Fabrication</h3>
                        <p className="text-gray-700">
                            Custom metal fabrication services tailored to industrial, commercial and residential projects.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-steel/30">
                        <h3 className="text-xl text-gray-800 font-bold mb-4">Security Installations</h3>
                        <p className="text-gray-700">
                            Professional installation of security doors, window guards, fencing and other protective structures.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-steel/30">
                        <h3 className="text-xl text-gray-800 font-bold mb-4">Structural Steel Works</h3>
                        <p className="text-gray-700">
                            Durable steel structure designed to support construction projects requiring strength and stability.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-steel/30">
                        <h3 className="text-xl text-gray-800 font-bold mb-4">Welding Services</h3>
                        <p className="text-gray-700">
                            Precision welding solutions carried out by experienced technicians using industry-standard techniques and equipment.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-steel/30">
                        <h3 className="text-xl text-gray-800 font-bold mb-4">Gate & Fence Fabrication</h3>
                        <p className="text-gray-700">
                            Custom gates, fencing systems and security barriers built for durability and long-term performance.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-steel/30">
                        <h3 className="text-xl text-gray-800 font-bold mb-4">Construction Support</h3>
                        <p className="text-gray-700">
                            Supporting construction projects with steel components, fabrication and installation services.
                        </p>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    )
}