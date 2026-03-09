"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"


export default function Address() {
    return(
        <section className="bg-black text-center py-20">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 text-center"
                >

                <motion.div
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-bold uppercase mb-6">
                        Visit our offices
                    </h2>

                    <p className="text-gray-300 mb-6">
                        Our workshop and office are located in the heart of the city, 
                        Lusaka city, where our skilled team handles fabricarion, installations and project consultations. 
                        
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Address</h3>
                            <p className="text-gray-300">
                                plot B1/12/13. Industrial area, Kalingalinga, Lusaka, Zambia
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-gray-300">
                                +260 972 9568096
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Business Hours</h3>
                            <p className="text-gray-300">
                                Mon-Sat: 06:00 hrs - 18:00 hrs
                            </p>
                        </div>
                        
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}