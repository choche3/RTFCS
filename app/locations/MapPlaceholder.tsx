

export default function MapPlaceholder () {
    return(
        <section className="bg-steel/10">
            <h3 className="mb-5 max-w-4xl mx-auto px-6 py-6">Our Lusaka office Address</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3846.3964597688864!2d28.3421667!3d-15.409138899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI0JzMyLjkiUyAyOMKwMjAnMzEuOCJF!5e0!3m2!1sen!2szm!4v1772904164323!5m2!1sen!2szm" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                loading="lazy" 

                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg">
                    
                </iframe>
                
                <div className="max-w-4xl mx-auto px-6 mt-1 mb-1">
                    <a 
                        href= "https://www.google.com/maps?pb=-15.4091389,28.3421667"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-instustrial max-w-4xl mx-auto px-6 text-yellow-200 py-3 rounded-lg"
                        >
                            <i>Open in Google Maps</i>
                    </a>
                </div>
                <div className="max-w-4xl mx-auto px-6 mt-1 mb-6">
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=-15.409139,28.342167"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-industrial text-yellow-200 max-w-4xl mx-auto px-6 py-4 rounded-lg hover:opacity-90 transition"
                        >
                       <i>Get Directions</i>
                    </a>
                </div>
        </section>
    )
}