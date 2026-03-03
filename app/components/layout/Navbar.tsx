"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

export default function Navbar(){
    const[isOpen, setIsOpen] = useState(false);

    return(
        <header className="w-full bg-navy border-b border-steel/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justift-between">
                {/**logo */}
                <Link href="/" className="flex flex-col leading-tight">
                    <span className="text-white font-extrabold text-lg tracking-wideHeavy uppercase">
                        RT Fabrications
                    </span>
                    <span className="text-steel text-xs uppercase tracking-wider">
                        & Construction Services
                    </span>
                </Link>

                {/**Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/about" className="text-steel uppercaser text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        About Us
                    </Link>
                    <Link href="/services" className="text-steel uppercaser text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Services
                    </Link>
                    <Link href="/projects" className="text-steel uppercaser text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Projects
                    </Link>
                    <Link href="/contacts" className="text-steel uppercaser text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Location
                    </Link>
                    <Link href="/contacts" className="text-steel uppercaser text-sm tracking-wide font-semibold hover:text-industrial transition-colors duration-300">
                        Contact
                    </Link>

                    {/**Call to action CTA */}
                    <Link href="/contact" className="bg-industrial text-black px-5 py-2 rounded-md uppercase text-sm font-bold tracking-wide border border-industrial hover:bg-yellow-400 transition-colors duration-300">
                        Get in Touch
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
                    <Link href="/contact" className="block text-white uppercase text-base tracking-wide font-semibold" onClick={() => setIsOpen(false)}>
                        Location
                    </Link>
                    <Link href="/contact" className="block text-white uppercase text-base tracking-wide font-semibold" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>

                    <Link
                        href="/contact"
                        className="block w-full text-center bg-industrial text-black py-3 uppercase font-bold tracing-wide"
                        onClick={() => setIsOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </div>
            )}
        </header>
    )
}