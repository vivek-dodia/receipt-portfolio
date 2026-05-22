"use client"

import { useEffect, useRef, useState } from "react"

export default function ReceiptPortfolio() {
  const receiptRef = useRef<HTMLDivElement>(null)
  const [printingComplete, setPrintingComplete] = useState(false)
  const [barcodeHeights, setBarcodeHeights] = useState<number[]>([])
  const [timestamp, setTimestamp] = useState("")

  useEffect(() => {
    setBarcodeHeights(Array.from({ length: 50 }, () => Math.random() * 20 + 10))

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const now = new Date()
    const dd = String(now.getDate()).padStart(2, "0")
    const hh = String(now.getHours()).padStart(2, "0")
    const mm = String(now.getMinutes()).padStart(2, "0")
    setTimestamp(`${days[now.getDay()]} ${dd} ${months[now.getMonth()]} ${now.getFullYear()}  ${hh}:${mm}`)
  }, [])

  useEffect(() => {
    const receipt = receiptRef.current
    if (!receipt) return

    const timer = setTimeout(() => {
      setPrintingComplete(true)
    }, 100)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion) {
      return () => clearTimeout(timer)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = receipt.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = (e.clientX - centerX) / (rect.width / 2)
      const mouseY = (e.clientY - centerY) / (rect.height / 2)

      const rotateX = mouseY * 3 + 2
      const rotateY = -mouseX * 3 - 1
      const rotateZ = mouseX * 1.5 + 1

      receipt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    }

    const handleMouseLeave = () => {
      receipt.style.transform = "rotateX(2deg) rotateY(-1deg) rotateZ(1deg)"
    }

    receipt.addEventListener("mousemove", handleMouseMove)
    receipt.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      receipt.removeEventListener("mousemove", handleMouseMove)
      receipt.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-3 py-6 sm:p-4 [padding-left:max(0.75rem,env(safe-area-inset-left))] [padding-right:max(0.75rem,env(safe-area-inset-right))] [padding-top:max(1.5rem,env(safe-area-inset-top))] [padding-bottom:max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="receipt-container">
        <div ref={receiptRef} className="receipt">
          {/* Header */}
          <div className={`text-center mb-4 ${printingComplete ? "thermal-print" : ""}`}>
            <h1 className="text-2xl font-bold mb-1">VIVEK</h1>
            <p className="text-sm">PLATFORM ENGINEER</p>
            <p className="text-xs tracking-wider mt-1 opacity-80">{timestamp || " "}</p>
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
              Platform Engineer at ResiBridge, mostly working on transit, LoRaWAN networks, and infra and network low level control planes. Open source contributor.
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
                <div className="leader-row font-bold">
                  <span>PLATFORM ENGINEER</span>
                  <span className="leader-dots" aria-hidden="true"></span>
                  <span>PRESENT</span>
                </div>
                <div className="text-xs">RESIBRIDGE INC • MAY 2026 - PRESENT</div>
                <div className="text-xs">NYC</div>
              </div>
              <div>
                <div className="leader-row font-bold">
                  <span>NETWORK DEVELOPER</span>
                  <span className="leader-dots" aria-hidden="true"></span>
                  <span>2026</span>
                </div>
                <div className="text-xs">RESIBRIDGE INC • SEPT 2024 - MAY 2026</div>
                <div className="text-xs">NYC</div>
              </div>
              <div>
                <div className="leader-row font-bold">
                  <span>SENIOR NSE</span>
                  <span className="leader-dots" aria-hidden="true"></span>
                  <span>2024</span>
                </div>
                <div className="text-xs">PILOT FIBER • JULY 2023 - SEPT 2024</div>
                <div className="text-xs">NYC</div>
              </div>
              <div>
                <div className="leader-row font-bold">
                  <span>NETWORK ENGINEER</span>
                  <span className="leader-dots" aria-hidden="true"></span>
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
              <div className="leader-row">
                <span>BS INFORMATION TECHNOLOGY</span>
                <span className="leader-dots" aria-hidden="true"></span>
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
              <div>
                EMAIL:{" "}
                <a href="mailto:vivek.dodia@icloud.com" className="underline-offset-2 hover:underline">
                  vivek.dodia@icloud.com
                </a>
              </div>
              <div>
                GITHUB:{" "}
                <a
                  href="https://github.com/vivek-dodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  github.com/vivek-dodia
                </a>
              </div>
              <div>
                LINKEDIN:{" "}
                <a
                  href="https://linkedin.com/in/vivekdodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  linkedin.com/in/vivekdodia
                </a>
              </div>
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
            <div className="text-xs">
              <p>RECEIPT #: PE-2026-001</p>
            </div>
          </div>

          {/* Barcode simulation */}
          <div className={`barcode mt-4 ${printingComplete ? "thermal-print" : ""}`} style={{ animationDelay: "2.5s" }}>
            <div className="barcode-lines">
              {barcodeHeights.map((h, i) => (
                <div key={i} className="barcode-line" style={{ height: h + "px" }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
