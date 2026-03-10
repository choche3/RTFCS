"use client"

import { fadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import { useState, } from "react"


export default function ContactPage(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [status, setStatus] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        try{
            const response = await fetch("https://formspree.io/f/mdawegon", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            })

            if(response.ok){
                setStatus("✅ Message sent successfully! We will get back to you.")
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
            }
        } catch (error){
            setStatus("❌ Something went wrong. please try again")
        }
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
        {status && (
            <p className="mt-4 text-green-500 font-medium">{status}</p>
        )}
        <p className="mt-10">Send us an email with your inquiry or project detail</p>
    </motion.div>
    )

} 
