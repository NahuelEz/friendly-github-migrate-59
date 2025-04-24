import { Link } from "react-router-dom";
export function InstagramBanner() {
  return <div className="flex items-center justify-between w-full px-10 py-8 bg-[#d9d9d9]">
      {/* Logo - Enlarged to match text height */}
      <div className="flex space-x-3">
        <img alt="Logo flower" className="w-32 h-32" src="/lovable-uploads/ec0a8a1f-5ce8-4e5d-9fdf-c882118d3f37.png" />
        <img alt="Logo square" className="w-32 h-32" src="/lovable-uploads/add2638f-1139-4d31-832a-9d2b29378692.png" />
      </div>

      {/* Text - Explicitly in 3 rows */}
      <div className="max-w-xl">
        <h1 className="text-[#4f1092] font-bold text-3xl leading-tight uppercase">
          <span className="block font-bold text-left">Haz crecer tu cuenta en Instagram</span>
          <span className="block">con más de 3000 seguidores al mes</span>
          <span className="block">registrandote hoy mismo</span>
        </h1>
      </div>

      {/* Button */}
      <Link to="#" className="px-10 py-4 bg-[#ff6200] text-white rounded-full text-xl font-medium">
        comenzar
      </Link>
    </div>;
}