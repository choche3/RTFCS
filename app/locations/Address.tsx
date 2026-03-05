

export default function Address() {
    return(
        <section className="bg-steel/10 py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 text-center">

                <div>
                    <h2 className="text-3xl font-bold uppercase mb-6">
                        Visit our offices
                    </h2>

                    <p className="text-gray-700 mb-6">
                        Our workshop and office are located in the heart of the city, 
                        Lusaka city, where our skilled team handles fabricarion, installations and project consultations. 
                        
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semiold">Address</h3>
                            <p className="text-gray-600">
                                plot 1234. Industrial area, Lusaka, Zambia
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-gray-600">
                                +260 972 9568096
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Business Hours</h3>
                            <p className="text-gray-600">
                                Mon-Fri: 8:00 AM - 17:00 PM
                                Saturday: 9:00 AM - 13:00 PM
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}