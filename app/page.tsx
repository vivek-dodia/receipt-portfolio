"use client"

import { useEffect, useRef, useState } from "react"

export default function ReceiptPortfolio() {
  const receiptRef = useRef<HTMLDivElement>(null)
  const [printingComplete, setPrintingComplete] = useState(false)

  useEffect(() => {
    const receipt = receiptRef.current
    if (!receipt) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = receipt.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate mouse position relative to center (-1 to 1)
      const mouseX = (e.clientX - centerX) / (rect.width / 2)
      const mouseY = (e.clientY - centerY) / (rect.height / 2)

      // Create subtle crumple effect
      const rotateX = mouseY * 3 + 2 // Base rotation + mouse influence
      const rotateY = -mouseX * 3 - 1 // Base rotation + mouse influence
      const rotateZ = mouseX * 1.5 + 1 // Base rotation + mouse influence

      // Apply transform
      receipt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    }

    const handleMouseLeave = () => {
      // Return to original position
      receipt.style.transform = "rotateX(2deg) rotateY(-1deg) rotateZ(1deg)"
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove)
    receipt.addEventListener("mouseleave", handleMouseLeave)

    // Start printing animation after initial load
    const timer = setTimeout(() => {
      setPrintingComplete(true)
    }, 100)

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      receipt.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center">
      <div className="receipt-container">
        <div ref={receiptRef} className="receipt">
          {/* Header */}
          <div className={`text-center mb-4 ${printingComplete ? "thermal-print" : ""}`}>
            <h1 className="text-2xl font-bold mb-1">VIVEK</h1>
            <p className="text-sm">NETWORK DEVELOPER</p>
            <p className="text-xs">EST. 2021</p>
          </div>

          <div
            className={`dashed-line ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "0.3s" }}
          ></div>

          {/* About Section */}
          <div
            className={`receipt-section ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-xs leading-relaxed">
              Network Developer at ResiBridge, focused on automation and infrastructure. Open source contributor.
            </p>
          </div>

          <div
            className={`dashed-line ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "0.7s" }}
          ></div>

          {/* Experience Section */}
          <div
            className={`receipt-section ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "0.9s" }}
          >
            <h2 className="font-bold mb-2">WORK EXPERIENCE</h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between font-bold">
                  <span>NETWORK DEVELOPER</span>
                  <span>PRESENT</span>
                </div>
                <div className="text-xs">RESIBRIDGE INC • SEPT 2024 - PRESENT</div>
                <div className="text-xs">NYC</div>
              </div>
              <div>
                <div className="flex justify-between font-bold">
                  <span>SENIOR NSE</span>
                  <span>2024</span>
                </div>
                <div className="text-xs">PILOT FIBER • JULY 2023 - SEPT 2024</div>
                <div className="text-xs">NYC</div>
              </div>
              <div>
                <div className="flex justify-between font-bold">
                  <span>NETWORK ENGINEER</span>
                  <span>2023</span>
                </div>
                <div className="text-xs">CLOUDPATH.COM • SEPT 2021 - JUNE 2023</div>
                <div className="text-xs">CT</div>
              </div>
            </div>
          </div>

          <div
            className={`dashed-line ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "1.3s" }}
          ></div>

          {/* Education */}
          <div
            className={`receipt-section ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "1.5s" }}
          >
            <h2 className="font-bold mb-2">EDUCATION</h2>
            <div>
              <div className="flex justify-between">
                <span>BS INFORMATION TECHNOLOGY</span>
                <span>2021</span>
              </div>
              <div className="text-xs">NEW YORK INSTITUTE OF TECHNOLOGY</div>
              <div className="text-xs">2017 - 2021</div>
            </div>
          </div>

          <div
            className={`dashed-line ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "1.7s" }}
          ></div>

          {/* Contact */}
          <div
            className={`receipt-section ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "1.9s" }}
          >
            <h2 className="font-bold mb-2">CONTACT INFO</h2>
            <div className="space-y-1 text-xs">
              <div>EMAIL: vivek.dodia@icloud.com</div>
              <div>GITHUB: github.com/vivek-dodia</div>
              <div>LINKEDIN: linkedin.com/in/vivekdodia</div>
            </div>
          </div>

          <div
            className={`dashed-line ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "2.1s" }}
          ></div>

          {/* Footer */}
          <div
            className={`text-center mt-4 ${printingComplete ? "thermal-print" : ""}`}
            style={{ animationDelay: "2.3s" }}
          >
            <p className="text-xs mb-2">THANK YOU FOR YOUR CONSIDERATION!</p>
            <p className="text-xs">HAVE A GREAT DAY!</p>
            <div className="mt-3 text-xs">
              <p>RECEIPT #: NET-2024-001</p>
              <p>REF: PORTFOLIO-HIRE-VIVEK</p>
            </div>
          </div>

          {/* Barcode simulation */}
          <div className={`barcode mt-4 ${printingComplete ? "thermal-print" : ""}`} style={{ animationDelay: "2.5s" }}>
            <div className="barcode-lines">
              {Array.from({ length: 50 }, (_, i) => (
                <div key={i} className="barcode-line" style={{ height: Math.random() * 20 + 10 + "px" }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
