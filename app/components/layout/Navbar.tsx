"use client"

import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Navbar(){
    const[isOpen, setIsOpen] = useState(false);
    const { scrollY } =useScroll()
    const [ scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setScrolled(latest >80)
        })
        return () => unsubscribe()
    }, [scrollY])

    return(
        <motion.header 
           className="fixed top-0 left-0 w-full z-50 border-b border-steel/30"
           animate={{
            padding: scrolled ? "10px" : "20px",
            paddingBottom: scrolled ? "10px" : "20px",
            backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.6)",
            backdropFilter: "blur(6px)"
           }}
           transition={{ duration: 0.5 }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                {/**logo */}
                <Link href="/" className="flex flex-col leading-tight">
                    <span className="text-white font-extrabold text-lg tracking-wide uppercase">
                        RT <span className="text-yellow-600">Fabrications</span>
                    </span>
                    <span className="text-steel text-xs uppercase tracking-wider">
                        & Construction Services
                    </span>
                </Link>

                {/**Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/about" className="text-steel uppercase text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        About Us
                    </Link>
                    <Link href="/services" className="text-steel uppercase text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Services
                    </Link>
                    <Link href="/projects" className="text-steel uppercase text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Projects
                    </Link>
                    <Link href="/locations" className="text-steel uppercase text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Location
                    </Link>
                    <Link href="/contacts" className="text-steel uppercase text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Contact
                    </Link>

                   
                </nav>

                {/**Mobile Navigation */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/**Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-navy border-t border-steel/20 px-6 py-6 space-y-6">
                    <Link href="/about" className="block text-white uppercase text-base tracking-wide font-semibold" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>
                    <Link href="/services" className="block text-white uppercase text-base tracking-wide font-semibold" onClick={() => setIsOpen(false)}>
                        Services
                    </Link>
                    <Link href="/projects" className="block text-white uppercase text-base tracking-wide font-semibold" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/locations" className="block text-white uppercase text-base tracking-wide font-semibold" onClick={() => setIsOpen(false)}>
                        Location
                    </Link>
                    <Link href="/contacts" className="block text-white uppercase text-base tracking-wide font-semibold" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>

                    <Link
                        href="/contacts"
                        className="block w-full text-center bg-industrial text-gray-300 py-3 uppercase font-bold tracking-wide"
                        onClick={() => setIsOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </div>
            )}
        </motion.header>
    )
}