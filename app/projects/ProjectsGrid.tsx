
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Industrial Steel Structure",
    category: "Structural Fabrication",
    description: "Fabrication and installation of a reinforced steel structure for a warehouse facility.",
    image: "/image/project1.jpg"
  },
  {
    title: "Security Gate Installation",
    category: "Security Systems",
    description: "Custom heavy-duty security gate designed and installed for residential protection.",
    image: "/image/project2.jpg"
  },
  {
    title: "Commercial Steel Staircase",
    category: "Metal Fabrication",
    description: "Precision-crafted steel staircase installed for a commercial office building.",
    image: "/image/project3.jpg"
  },
  {
    title: "Perimeter Security Fencing",
    category: "Security Installations",
    description: "Full perimeter steel fencing installation for an industrial property.",
    image: "/image/project1.jpg"
  },
  {
    title: "Custom Fabricated Balcony",
    category: "Custom Fabrication",
    description: "Decorative yet durable steel balcony fabricated for residential property.",
    image: "/image/project2.jpg"
  },
  {
    title: "Warehouse Steel Reinforcement",
    category: "Structural Steel",
    description: "Structural reinforcement project improving load-bearing capability.",
    image: "/image/project3.jpg"
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