"use client"

import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link"
import { motion } from "framer-motion";

export default function ServiceSection(){
    return(
        <section className="bg-navy py-28 border-t border-steel/30">
            <motion.div 
                className="max-w-7xl mx-auto px-6 lg:px-12"
                variants ={staggerContainer}
                initial= "hidden"
                whileInView= "show"
                viewport={{ once: true}}
            >

                {/**Section Header */}
                <motion.div 
                    variants={fadeUp}
                    className="mb-16 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wideHeavy mb-4">
                        Our Services
                    </h2>
                    <p className="text-steel text-lg">
                        Comprehensive steel fabrication and construction solutions delivered with
                        precision and reliability. Serving Lusaka and Kitwe with structural, security, and industrial services.
                    </p>
                </motion.div>

                {/**Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/**Service 1 */}
                    <motion.div 
                        variants={fadeUp}
                        className="group border border-steel/30 bg-navy hover:border-industrial transition-colors duration-300"
                    >
                        <div className="relative h-56 w-full">
                            <Image
                                src="/image/IMG-20260225-WA0020.jpg"
                                alt ="Security fabrication"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4 group-hover:text-industrial transition-colors">
                                Security Fabrication
                            </h3>
                            <p className="text-steel mb-6">
                                Custom gates, burglar bars, steel doors and reinforced security structure
                                for residential and commercial clients
                            </p>
                            <Link 
                                href="/services"
                                className="uppercase text-sm font tracking-wide text-yellow-600"
                            >
                                    Learn More →
                            </Link>
                        </div>
                    </motion.div>

                    {/**Service 2 */}
                    <motion.div
                        variants={fadeUp}
                        className="group border border-steel/30 bg-navy hover:border-industrial transition-colors"
                    >
                        <div className="relative h-56 w-full">
                            <Image
                                src="/image/MainHero.jpg"
                                alt="structural steel fabrication"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4 group-hover:text-industrial transition-colors">
                                Structural steel
                            </h3>
                            <p className="text-steel mb-6">
                                Fabrication of steel sections, tank stands, industrial frameworks, and 
                                heavy-duty structural components.
                            </p>
                            <Link 
                                href="/services"
                                className="uppercase text-sm font tracking-wide text-yellow-600"
                            >
                                    Learn More →
                            </Link>
                        </div>
                    </motion.div>
                    {/**Service 3 */}    
                    <motion.div
                        variants={fadeUp} 
                        className="group border border-steel/30 bg-navy hover:border-industrial transition-colors">
                        <div className="relative h-56 w-full">
                            <Image
                                src="/image/IMG-20260225-WA0009.jpg"
                                alt="Construction services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4 group-hover:text-industrial transition-colors">
                                construction services
                            </h3>
                            <p className="text-steel mb-6">
                                General construction, structural installations, and on-site project execution
                                across Zambia.
                            </p>
                            <Link 
                                href="/services"
                                className="uppercase text-sm font tracking-wide text-yellow-600"
                            >
                                    Learn More →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}