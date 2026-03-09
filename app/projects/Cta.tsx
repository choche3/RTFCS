"use client"

import { fadeUp } from "@/lib/animations"
import { motion } from "framer-motion"

export default function Cta() {
  return (
    <section className="bg-gray-700 py-20 text-center text-white">

      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
          Have a Project in Mind?
        </h2>

        <p className="mb-10">
          Our team is ready to deliver strong and reliable fabrication
          solutions tailored to your project needs.
        </p>

        <a
          href="/contacts"
          className="bg-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Request a Quote
        </a>

      </motion.div>

    </section>
  )
}