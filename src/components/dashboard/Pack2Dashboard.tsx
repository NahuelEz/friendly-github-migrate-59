
import { TrendingUp } from "lucide-react";

export const Pack2Dashboard = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Primera columna: Gráfico (ocupa 2 de 4 columnas) */}
        <div className="relative md:col-span-2">
          {/* Growth Chart Card */}
          <div className="bg-[#b762f7] rounded-3xl p-6 pb-16 shadow-lg">
            <h2 className="text-white text-2xl font-medium mb-4">Our Growth</h2>
            <div className="relative h-[300px]">
              <div className="absolute left-0 top-0 h-full w-full">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white/80 text-sm">
                  <div>40</div>
                  <div>30</div>
                  <div>20</div>
                  <div>10</div>
                  <div>0</div>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-white/80 text-sm">
                  <div>Item 1</div>
                  <div>Item 2</div>
                  <div>Item 3</div>
                  <div>Item 4</div>
                  <div>Item 5</div>
                </div>

                {/* Horizontal grid lines */}
                <div className="absolute left-[30px] top-0 right-0 h-full flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-white/20 w-full h-0"></div>
                  ))}
                </div>

                {/* Line chart */}
                <svg
                  className="absolute left-[30px] top-0 right-0 h-full w-[calc(100%-30px)]"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  <path d="M0,180 L80,100 L160,140 L240,40 L320,20" fill="none" stroke="white" strokeWidth="2" />
                  {/* Data points */}
                  <circle cx="0" cy="180" r="4" fill="white" />
                  <circle cx="80" cy="100" r="4" fill="white" />
                  <circle cx="160" cy="140" r="4" fill="white" />
                  <circle cx="240" cy="40" r="4" fill="white" />
                  <circle cx="320" cy="20" r="4" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          {/* Comments Liked Card */}
          <div className="absolute left-[10%] bottom-[-40px] bg-[#181615] text-white rounded-2xl p-5 shadow-xl w-[280px]">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-300">Comments liked</div>
              <div className="bg-[#29292e] rounded-full p-1">
                <TrendingUp size={16} className="text-white" />
              </div>
            </div>
            <div className="flex justify-between items-end mt-2">
              <div className="text-4xl font-bold">7,265</div>
              <div className="text-[#ff6200] font-medium">+11.01%</div>
            </div>
          </div>
        </div>

        {/* Segunda columna: Título (ahora en el medio) */}
        <div className="flex flex-col md:pt-6">
          <div>
            <h1 className="text-[#4f1092] text-4xl md:text-4xl font-bold uppercase">CRECIMIENTO CON</h1>
            <h1 className="text-[#4f1092] text-6xl md:text-6xl font-bold uppercase leading-tight">PACK 2</h1>
          </div>
        </div>

        {/* Tercera columna: Lorem Ipsum (ahora al final) */}
        <div className="flex flex-col md:pt-6">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="max-w-xs">
                <h3 className="text-[#4f1092] text-lg font-medium">Lorem ipsum</h3>
                <p className="text-[#4f1092] text-sm">
                  Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="absolute left-[25%] bottom-[70px] md:left-[30%] md:bottom-[90px] bg-[#4f1092] rounded-3xl overflow-hidden shadow-xl w-[280px] z-10">
        <div className="p-6 flex flex-col items-center">
          <div className="rounded-full overflow-hidden border-2 border-white w-20 h-20 mb-3">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white text-xl font-medium">nkchaudhary01</h3>
          <p className="text-white/80 text-sm">Wildlife Photographer</p>
          <p className="text-[#ff6200] text-sm mt-1">61K Followers</p>
        </div>

        <div className="grid grid-cols-2 border-t border-white/20">
          <div className="p-4 flex flex-col items-center border-r border-white/20">
            <div className="text-white text-2xl font-bold">39,389</div>
            <div className="text-white/70 text-xs">Followers Gained</div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div className="text-white text-2xl font-bold">
              1,000<span className="text-lg">+</span>
            </div>
            <div className="text-white/70 text-xs">Avg. Likes/Post</div>
          </div>
        </div>
      </div>
    </div>
  );
};
