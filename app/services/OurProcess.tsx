"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"


export default function OurProcess() {
    return(
        <section className="bg-gray-700 py-20 text-white">
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
                    Our Process
                </motion.h2>
                
                <motion.div 
                    variants={fadeUp}
                    className="grid md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-industrial">Consultation</h3>
                        <p className="text-steel">
                            We begin by understanding your project requirements and providing expert advice.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-instrial">Fabrication</h3>
                        <p className="text-steel">
                            Our skilled technicians craft strong, precise metal structures using reliable techniques.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-instrial">Delivery</h3>
                        <p className="text-steel">
                            we ensure timely installation and completion ehile maintaining quality workmanship.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}