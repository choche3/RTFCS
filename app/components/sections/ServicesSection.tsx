import Image from "next/image";
import Link from "next/link"

export default function ServiceSection(){
    return(
        <section className="bg-navy py-24 border-t border-steel/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/**Section Header */}
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wideHeavy mb-4">
                        Our Services
                    </h2>
                    <p className="text-steel text-lg">
                        Comprehensive steel fabrication and construction solutions delivered with
                        precision and reliability. Serving Lusaka and Kitwe with structural, security, and industrial services.
                    </p>
                </div>

                {/**Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/**Service 1 */}
                    <div className="border border-steel/30 bg-black hover:border-industrial transition-colors duration-300">
                        <div className="relative h-56 w-full">
                            <Image
                                src="/image/hero.jpg"
                                alt="Security fabrication"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4">
                                Security Fabrication
                            </h3>
                            <p className="text-steel mb-6">
                                Custom gates, burglar bars, steel doors and reinforced security structure
                                for residential and commercial clients
                            </p>
                            <Link 
                                href="/services"
                                className="uppercase text-sm font tracking-wide text-industrial"
                            >
                                    Learn More →
                            </Link>
                        </div>
                    </div>

                    {/**Service 2 */}
                    <div className="border border-steel/30 bg-black hover:border-industrial transition-colors">
                        <div className="relative h-56 w-full">
                            <Image
                                src="/image/hero.jpg"
                                alt="structural steel fabrication"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4">
                                Structural steel
                            </h3>
                            <p className="text-steel mb-6">
                                Fabrication of steel sections, tank stands, industrial frameworks, and 
                                heavy-duty structural components.
                            </p>
                            <Link 
                                href="/services"
                                className="uppercase text-sm font tracking-wide text-industrial"
                            >
                                    Learn More →
                            </Link>
                        </div>
                    </div>
                    {/**Service 3 */}    
                    <div className="border border-steel/30 bg-black hover:border-industrial transition-colors">
                        <div className="relative h-56 w-full">
                            <Image
                                src="/image/hero.jpg"
                                alt="Construction services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-4">
                                construction services
                            </h3>
                            <p className="text-steel mb-6">
                                General construction, structural installations, and on-site project execution
                                across Zambia.
                            </p>
                            <Link 
                                href="/services"
                                className="uppercase text-sm font tracking-wide text-industrial"
                            >
                                    Learn More →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}