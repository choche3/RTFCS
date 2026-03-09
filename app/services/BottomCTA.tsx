"use client"

import { fadeUp } from "@/lib/animations"
import { motion } from "framer-motion"


export default function BottomCTA() {
    return(
        <section className="bg-navy py-20 text-center text-white">
            <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-6"
                >
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-16">
                    Ready to Get Started?
                </h2>
                <p className="mb-10">
                    Contact us today for a free consultation and quote.
                </p>
                
                <a href="/contacts"
                 className="bg-yellow-600 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                 >
                    Request a Quote
                </a>
            </motion.div>
        </section>
    )
}