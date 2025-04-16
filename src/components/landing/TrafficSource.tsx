
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const data = [
  {
    name: "Lorem ipsum dolor",
    value: 35
  }, 
  {
    name: "Lorem ipsum amet",
    value: 25
  }, 
  {
    name: "Lorem consectetur",
    value: 20
  }, 
  {
    name: "Lorem adipiscing",
    value: 20
  }
];

const COLORS = ["#9b87f5", "#7E69AB", "#F97316", "#1A1F2C"];

export const TrafficSource: React.FC = () => {
  return (
    <div className="shadow-[1px_3px_20px_0px_rgba(0,0,0,0.15)] bg-white w-full pl-[29px] py-14 rounded-[20px] max-md:max-w-full max-md:mt-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[45%] h-[300px] max-md:w-full max-md:ml-0">
          <ChartContainer className="w-full h-full" config={{}}>
            <PieChart>
              <Pie 
                data={data} 
                cx="50%" 
                cy="50%" 
                innerRadius={60} 
                outerRadius={100} 
                fill="#8884d8" 
                paddingAngle={2} 
                dataKey="value"
                startAngle={90} 
                endAngle={-270}
                animationBegin={0}
                animationDuration={1200}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
        <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-xl text-black font-bold text-center mt-[37px] max-md:mt-10">
            <div className="text-left">Fuente de trafico</div>
            <div className="shrink-0 h-0 mt-[7px] border-black" />
            <div className="mt-6 flex flex-col gap-3">
              {data.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-normal">
                  <div className="w-3 h-3 rounded-full" style={{
                    backgroundColor: COLORS[index]
                  }} />
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficSource;
