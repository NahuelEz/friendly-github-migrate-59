import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { TrendingUp } from "lucide-react"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function GrowthDashboard() {
  // Chart data
  const chartData = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        data: [16, 25, 22, 32, 36],
        borderColor: "#ffffff",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#ffffff",
      },
    ],
  }

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Our Growth",
        color: "#ffffff",
        font: {
          size: 24,
          weight: "bold" as "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
        align: "center" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: {
          stepSize: 10,
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="bg-[#fdfdfd] py-16 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 items-start">
        {/* Left section - Title */}
        <div className="md:w-1/4 md:pt-1">
          <h1 className="text-[#4f1092] text-3xl md:text-4xl font-bold leading-tight">
            CRECIMIENTO CON
            <br />
            <span className="text-5xl md:text-6xl">PACK 1</span>
          </h1>
        </div>

        {/* Middle section - Text blocks */}
        <div className="md:w-1/4 space-y-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-[#4f1092] text-xl font-semibold">Lorem ipsum</h3>
              <p className="text-[#4f1092]">Dolor sit amet consectetur. Eget faucibus fringilla sed bibendum.</p>
            </div>
          ))}
        </div>

        {/* Right section - Chart */}
        <div className="md:w-1/2 relative">
          <div className="bg-[#b762f7] rounded-3xl p-6 h-[400px] w-full">
            <div className="h-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Live reactions overlay */}
          <div className="absolute bottom-20 -right-[20%] bg-[#181615] text-white p-4 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-300">Live Reactions</p>
                <p className="text-4xl font-bold">7,265</p>
              </div>
              <div className="flex items-center gap-1 text-green-400 ml-4">
                <TrendingUp size={16} />
                <span className="font-medium">+11.01%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
