
import { Link } from "react-router-dom";

export function InstagramBanner() {
  return (
    <div className="flex items-center justify-between w-full px-10 py-8 bg-[#d9d9d9]">
      {/* Logo - Enlarged to match text height */}
      <div className="flex space-x-3">
        <img src="/lovable-uploads/10c9cb7c-f217-47ed-a9b4-fd116a7171e0.png" alt="Logo flower" className="w-32 h-32" />
        <img src="/lovable-uploads/9c6dab0a-2fb3-4e27-9f31-b23a80c5032a.png" alt="Logo square" className="w-32 h-32" />
      </div>

      {/* Text - Explicitly in 3 rows */}
      <div className="max-w-xl">
        <h1 className="text-[#4f1092] font-bold text-3xl leading-tight uppercase">
          <span className="block">Haz crecer tu cuenta en Instagram</span>
          <span className="block">con más de 3000 seguidores al mes</span>
          <span className="block">registrandote hoy mismo</span>
        </h1>
      </div>

      {/* Button */}
      <Link to="#" className="px-10 py-4 bg-[#ff6200] text-white rounded-full text-xl font-medium">
        comenzar
      </Link>
    </div>
  );
}
