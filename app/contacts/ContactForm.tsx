"use client"

import { fadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        alert("Message sent successfully!")
    }

    return(
    <motion.div
        initial="hidden"
        variants={fadeUp}
        whileInView="show"
        viewport={{ once: true }}
        >
        <form onSubmit={handleSubmit} className="space-y-6 border border-steel/30 p-8 rounded-xl shadow-md">

            
            <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-steel/40 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial"
                />
            </div>

            <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-steel/40 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial"
                />
            </div>

            <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                    <input 
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-steel/40 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial"
                    />
            </div>

            <div>
                <label className="block mb-2 font-medium">Project Details</label>
                <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-steel/40 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial"
                />
            </div>

            <button 
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
                Send Message
            </button>
        </form>
        <p className="mt-10">Send us an email with your inquiry or project detail</p>
    </motion.div>
    )

} 
