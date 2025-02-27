"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen the popup
      const hasSeenPopup = localStorage.getItem("hasSeenPopup")
      if (!hasSeenPopup) {
        setIsVisible(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsVisible(false)
    // Set flag in localStorage to prevent showing again in this session
    localStorage.setItem("hasSeenPopup", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={closePopup}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>

            <div className="text-center">
              <div className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full mb-4">
                Limited Time Offer
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">10% OFF This Season!</h3>
              <p className="text-gray-600 mb-6">
                Book your wedding photography package now and get 10% off on all our premium services.
              </p>

              <div className="space-y-3">
                <a href="tel:+919641271657">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Book Now</Button>
                </a>
                <button className="text-sm text-gray-500 hover:text-gray-700" onClick={closePopup}>
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

