import { useState } from "react";
import { ArrowRight } from "lucide-react";
export default function ArticlesHero() {
  const [activeFilter, setActiveFilter] = useState("reseñas");
  const filters = [{
    id: "instagram",
    label: "instagram"
  }, {
    id: "crecimiento",
    label: "crecimiento en instagram"
  }, {
    id: "reseñas",
    label: "reseñas"
  }, {
    id: "herramientas",
    label: "herramientas útiles"
  }];
  const articles = [{
    id: 1,
    title: "Titular lorem ipsum dolor sit amet consectetur.",
    content: "Lorem ipsum dolor sit amet consectetur. Tempus hendrerit netus quam orci velit. Lacus commodo ultricies ipsum in sed scelerisque. Id tempus purus nibh cursus etiam"
  }, {
    id: 2,
    title: "Titular lorem ipsum dolor sit amet consectetur.",
    content: "Lorem ipsum dolor sit amet consectetur. Tempus hendrerit netus quam orci velit. Lacus commodo ultricies ipsum in sed scelerisque. Id tempus purus nibh cursus etiam"
  }, {
    id: 3,
    title: "Titular lorem ipsum dolor sit amet consectetur.",
    content: "Lorem ipsum dolor sit amet consectetur. Tempus hendrerit netus quam orci velit. Lacus commodo ultricies ipsum in sed scelerisque. Id tempus purus nibh cursus etiam"
  }];
  return <div className="min-h-screen">
      <div style={{
      backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B8D3533AF-457E-49ED-96A1-310791FEE17C%7D-hruWdEmoylsAvqmAbGKREQVXkiwV7T.png')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }} className="p-6 pb-32 bg-gradient-to-b from-purple-500 to-purple-300 py-[9px]">
        <div className="max-w-7xl mx-auto">
          <h1 style={{
          fontFamily: "'Formula Condensed', sans-serif"
        }} className="text-5xl font-bold text-purple-900 mb-12 mt-8 my-[40px] md:text-8xl">
            ARTICULOS DE INTERES
          </h1>

          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map(filter => <button key={filter.id} className={`px-4 py-2 rounded-full border-2 transition-colors font-bold ${activeFilter === filter.id ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-purple-900 border-purple-300 hover:bg-purple-100/10"}`} onClick={() => setActiveFilter(filter.id)}>
                {filter.label}
              </button>)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative -mb-48">
            {articles.map(article => <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 my-0 py-[133px]"></div>
                <div className="p-6 py-[50px]">
                  <h2 className="text-lg font-bold mb-3">{article.title}</h2>
                  <p className="text-sm text-gray-700 mb-6">{article.content}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <a href="#" className="inline-flex items-center text-purple-700 hover:text-purple-900 font-medium">
                      seguir leyendo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[400px] pb-20"></div>
    </div>;
}