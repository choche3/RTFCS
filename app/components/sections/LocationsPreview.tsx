"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"
export default function LocationPreview(){
    return(
        <section className="bg-gray-100 py-20">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
                <motion.h2 
                    variants={fadeUp}
                    className="text-3xl text-gray-500 font-bold mb-4">
                    Our Locations
                </motion.h2>

                <motion.p 
                    variants={fadeUp}
                    className="text-gray-600 mb-12">
                    Visit our workshops in Lusaka or Kitwe for what services you would like.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="grid md:grid-cols-2 gap-8">
                        {/**Lusaka */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <motion.h3 
                                variants={fadeUp}
                                className="text-xl font-semibold text-gray-600 mb-2">
                                Lusaka
                            </motion.h3>
                            <motion.p 
                                variants={fadeUp}
                                className="text-gray-600 mb-4">
                                    Plot B1/13/12, Kalingalinga, Lusaka
                                </motion.p>
                                <a
                                    href="tel:+260972958096"
                                    className="text-yellow-600 font-medium"
                                >
                                    Call Now
                                </a>
                        </div>

                        {/**Kitwe */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl text-gray-600 font-semibold mb-2">
                                Kitwe
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Copperbelt Branch
                            </p>

                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeUp}
                        className="mt-10">
                        <Link 
                            href="/contacts"
                            className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
                        >
                            View Full contact Details
                        </Link>
                    </motion.div>


            </motion.div>
        </section>
    )
}