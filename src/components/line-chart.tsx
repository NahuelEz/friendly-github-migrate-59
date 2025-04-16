
"use client"

import React, { useEffect, useRef } from "react"

export function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Data points (x, y) coordinates
    const dataPoints = [
      { x: 0.1, y: 0.05 },
      { x: 0.2, y: 0.2 },
      { x: 0.4, y: 0.18 },
      { x: 0.6, y: 0.14 },
      { x: 0.8, y: 0.3 },
      { x: 1, y: 0.35 },
    ]

    // Draw horizontal grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
    ctx.lineWidth = 1

    for (let i = 0; i <= 4; i++) {
      const y = canvas.height - canvas.height * (i / 4)
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()

      // Add y-axis labels
      ctx.fillStyle = "white"
      ctx.font = "14px Arial"
      ctx.textAlign = "left"
      ctx.fillText(`${i * 10}`, 5, y - 5)
    }

    // Draw the line chart
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
    ctx.beginPath()

    dataPoints.forEach((point, index) => {
      const x = point.x * canvas.width
      const y = canvas.height - point.y * canvas.height * 2.5

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      // Draw data points
      ctx.fillStyle = "white"
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    })

    ctx.stroke()

    // Add x-axis label
    ctx.fillStyle = "white"
    ctx.font = "14px Arial"
    ctx.textAlign = "left"
    ctx.fillText("Item 1", 5, canvas.height - 5)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-[300px]" />
}
