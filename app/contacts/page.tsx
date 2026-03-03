import Hero from "./Hero"
import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"
import Assurance from "./Assurance"
//import Assurance from "./Assurance"

export default function ContactPage() {
  return (
    <>
      <Hero />

      <section className="bg-industrial py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
          <Assurance />
        </div>
      </section>

      <Assurance />
    </>
  )
}