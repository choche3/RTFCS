import Link from "next/link";

export default function Footer() {
    return(
        <footer className="bg-black text-steel border-t border-steel/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-12">
                {/**Company Info */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-wideHeavy mb-4">
                        RT Fabrications & Construction Services
                    </h3>
                    <p className="text-sm leading-relaxed">
                    Professional steel fabrication and costruction services operating
                    in Lusaka and Kitwe. Delivering reliable structural and security solutions 
                    across Zambia
                    </p>
                </div>

                {/**Quick Links */}
                <div>
                    <h4 className="text-white font-semibold uppercase tracking-wideHeavy mb-4">
                        Quick Links
                    </h4>   
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
                        <li><Link href="/projects" className="hover:text-white transition-colors duration-300">Projects</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
                    </ul>
                </div>

                {/** Locations */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wide m-4">
                        Locations
                    </h4>
                    <div className="text-sm space-y-4">
                        <div>
                            <p className="text-white font-semibold">Lusaka</p>
                            <p>Alick Nkhata Road</p>
                            <p>+26097 xx xxx</p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Kitwe</p>
                            <p>Wusakile Round About</p>
                            <p>+26095 xx xxx</p>
                        </div>
                    </div>
                </div>

                {/**Contact Info */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wide mb-4">
                        Contact Us
                    </h4>
                    <Link 
                    href="/contact"
                    className="inline-block bg-industrial text-black px-6 py-3 rounded-md uppercase text-sm font-bold tracking-wide border border-industrial hover:bg-yellow-400 transition-colors duration-300">
                    Get in Touch
                    </Link>
                </div>
    
            </div>

            {/**Botto bar */}
            <div className="border-t border-steel/20 py-6 text-center text-xs"
            >
                &copy; {new Date().getFullYear()} Real Time Fabrications & Construction Services. All rights reserved.
            </div>
        </footer>
    )
}
