"use client"

//import { Link } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";


export default function ProjectsPreview() {
    return(
        <section className="bg-gray-700 py-28 border-t border-steel/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/**Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4">
                            Completed Projects
                        </h2>
                        <p className="text-steel text-lg">
                            A selection of our recent fabrication and construction work
                            delivered across Lusaka and Kitwe.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="uppercase text-sm font-bold tracking-wide text-industrial"
                    >
                       <span className="text-yellow-600">view All Projects →</span>
                    </Link>
                </div>

                {/** Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                     className="grid md:grid-cols-2 gap-8"
                >
                    {/** project card */}
                    <motion.div 
                        variants={fadeUp}
                        className="relative group h-80 overflow-hidden border border-steel/30">
                        <Image
                            src="/image/IMG-20260309-WA0002.jpg"
                            alt="steel structure installation"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                        <div className="absolute bottom-0 p-8">
                            <h3 className="text-2xl font-bold uppercase tracking-wide">
                                Industrial Steel Framework
                            </h3>
                            <p className="text-steel mt-2 text-sm">
                                Structural installation project - Lusaka
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp} 
                        className="relative group h-80 overflow-hidden border border-steel/30">
                        <Image
                            src="/image/IMG-20260309-WA0016.jpg"
                            alt="Custom security gate"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                        <div className="absolute bottom-0 p-8">
                            <h3 className="text-2xl font-bold uppercase tracking-wide">
                                Heavy-Duty Tank Stand
                            </h3>
                            <p className="text-steel mt-2 text-sm">
                                Industrial fabrication project - Lusaka
                            </p>
                        </div>
                    </motion.div> 

                    <motion.div 
                        variants={fadeUp}
                        className="relative group h-80 overflow-hidden border border-steel/30">
                        <Image
                            src="/image/IMG-20260309-WA0024.jpg"
                            alt="Steel door fabrication"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-transform duration-500" />
                        <div className="absolute bottom-0 p-8">
                            <h3 className="text-2xl font-bold uppercase tracking-wide">
                                Reinforced Steel Doors 
                            </h3>
                            <p className="text-steel mt-2 text-sm">
                                Commercial security project - kitwe
                            </p>
                        </div>

                    </motion.div>                       
                </motion.div>
            </div>
        </section>
    )
}