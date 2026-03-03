

export default function ContactInfo() {
    return(
    <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 grid lg:grid-cols-2 gap">
            <div className="space-y-8">
                <div className="border border-steel/30 p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <p className="text-steel">+260 97 2958096</p>
                </div>

                <div className="border border-steel/30 p-6 rounded-xl shadow-sm">
                
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-steel">tembopearson760@gmail.com</p>
                </div>

                <div className="border border-steel/30 p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Office Address</h3>
                    <p className="text-steel">Alick Nkhata Road, Lusaka, Zambia</p>
                </div>

                <div className="border border-steel/30 p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                    <p className="text-steel">Monday - Friday: 8:00 AM - 17:00 PM</p>
                    <p className="text-steel">Saturday: 9:00 AM - 13:00 PM</p>
                    <p className="text-steel">Sunday: Closed</p>
                </div>

                <a 
                    href="https://wa.me/260972958096"
                    target="_blank"
                    className="inline-block bg-industrial text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition"
                >
                    Click<i className="fab fa-whatsapp mr-2"> here </i>to chat with us on <i className="fab fa-whatsapp mr-2">WhatsApp</i>
                </a>
             
            </div>

        </div>
    </section>
    )

}