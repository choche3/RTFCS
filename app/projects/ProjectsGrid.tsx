
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Industrial Gate installation",
    category: "Structural Fabrication",
    description: "Fabrication and installation of heavy-duty reinforced steel gate structure for industrial Protection.",
    image: "/image/IMG-20260309-WA0011.jpg"
  },
  {
    title: "Security Gate Installation",
    category: "Security Systems",
    description: "Custom heavy-duty security gate designed and installed for residential protection.",
    image: "/image/IMG-20260225-WA0022.jpg"
  },
  {
    title: "Commercial Steel Window Frames",
    category: "Metal Fabrication",
    description: "Precision-crafted steel window frames installed for a small office building and homes.",
    image: "/image/IMG-20260309-WA0004.jpg"
  },
  {
    title: "Perimeter Security Fencing",
    category: "Security Installations",
    description: "Full perimeter steel fencing installation for an industrial property.",
    image: "/image/IMG-20260309-WA0008.jpg"
  },
  {
    title: "Custom Fabricated Residential Gates",
    category: "Custom Fabrication",
    description: "Decorative yet durable steel gates fabricated for residential property.",
    image: "/image/IMG-20260309-WA0006.jpg"
  },
  {
    title: "Tank Stand Steel Reinforcement",
    category: "Structural Steel",
    description: "Structural reinforcement project improving load-bearing capability.",
    image: "/image/IMG-20260309-WA0018.jpg"
  }
]

export default function ProjectsGrid() {
  return (
    <section className="bg-steel/10 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-16">
          Recent Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

        </div>

      </div>
    </section>
  )
}