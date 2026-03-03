import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return(
        <section className="relative w-full h-[85vh] flex items-center">
            {/**Background Image */}
            <Image
               src="/image/hero.jpg"
               alt="Industrial steel fabrication workshop"
               fill
               priority
                className="object-cover"
            />

            {/**Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
            {/**Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-3xl">

                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wideHeavy leading-tight mb-6">
                        Real Time Fabricators & Construction Services
                    </h1>

                    <p className="text-steel text-lg md:text-xl mb-8">
                        Serving Lusaka and Kitwe with reliable structural, security, and industrial
                        solutions. Contact us for your steel fabrication and construction needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                           href="/contacts"
                           className="bg-steel text-white px-8 py-4 rounded-md uppercase font-bold tracking-wide border border-industrial hover:bg-yellow-400 transition duration-300 text-center"
                        >
                            Contact Us
                        </Link>

                        <Link 
                            href="/projects"
                            className="border border-white px-8 py-4 uppercase rounded-md font-bold tracking-wide hover:bg-white hover:text-black transition-colors text-center"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}