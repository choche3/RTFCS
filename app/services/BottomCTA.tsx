

export default function BottomCTA() {
    return(
        <section className="bg-navy py-20 text-center text-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-16">
                    Ready to Get Started?
                </h2>
                <p className="mb-10">
                    Contact us today for a free consultation and quote.
                </p>
                
                <a href="/contacts"
                 className="bg-yellow-600 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                 >
                    Request a Quote
                </a>
            </div>
        </section>
    )
}