
export default function OurProcess() {
    return(
        <section className="bg-navy py-20 text-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-16">
                    Our Process
                </h2>
                
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-industrial">Consultation</h3>
                        <p className="text-steel">
                            We begin by understanding your project requirements and providing expert advice.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-instrial">Fabrication</h3>
                        <p className="text-steel">
                            Our skilled technicians craft strong, precise metal structures using reliable techniques.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-instrial">Delivery</h3>
                        <p className="text-steel">
                            we ensure timely installation and completion ehile maintaining quality workmanship.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}