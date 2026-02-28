import Link from "next/link";


export default function CallToAction() {
    return(
        <section className="bg-industrial py-28 border-black/40">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
                    Lets Build Something Strong
                </h2>

                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
                    Whether its structural fabrication, custom steel works, or full construction,
                    our team is ready to deliver reliable results on time and on budget.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">

                    <Link
                        href="/contact"
                        className="bg-gray-900 text-white px-8 py-4 uppercase text-sm font-bold tracking-wide hover:bg-black/80 transition"
                    >
                        Request a Quote
                    </Link>

                    <Link 
                        href="/projects"
                        className=" bg-gray-900  border-2 border-black px-8 py-4 uppercase text-sm font-bold tracking-wide hover:bg-black hover:text-white transition"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>
        </section>
    )
}