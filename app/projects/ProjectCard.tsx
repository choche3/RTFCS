
type Project = {
    title: string;
    category: string;
    description: string;
    image: string;

};

export default function ProjectCard({ title, category, description, image }: Project) {
    return (
        <div className="bg-white rounded-xl shadow border border-steel/30 overflow-hidden">

            <img src={image} alt={title} className="w-full h-56 object-cover" />

            <div className="p-6">

                <span className="text-sm text-gray-900 text-indutrial font-semibold uppercase">
                    {category}
                </span>

                <h3 className="text-xl text-gray-700 font-bold mt-2 mb-3">
                    {title}
                </h3>

                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </div> 
    )
}