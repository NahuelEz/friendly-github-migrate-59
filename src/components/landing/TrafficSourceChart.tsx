import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
export const TrafficSourceChart: React.FC = () => {
  const data = [{
    name: "Instagram",
    value: 40,
    color: "#4F1092"
  }, {
    name: "Twitter",
    value: 20,
    color: "#6E59A5"
  }, {
    name: "TikTok",
    value: 10,
    color: "#D6BCFA"
  }, {
    name: "Facebook",
    value: 30,
    color: "#F97316"
  }];
  return <div className="bg-white rounded-lg p-6 shadow-md mx-0 w-max py-[25px] px-[150px]">
      <h3 className="text-[#4F1092] text-2xl font-bold mb-4">Fuente de trafico</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <ul className="space-y-2">
            {data.map((item, index) => <li key={index} className="flex items-center">
                <span className="w-4 h-4 mr-2 inline-block rounded-sm" style={{
              backgroundColor: item.color
            }}></span>
                <span className="text-gray-800">
                  {item.name}: <strong>{item.value}%</strong>
                </span>
              </li>)}
          </ul>
        </div>
      </div>
    </div>;
};
export default TrafficSourceChart;