"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Phone } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setPhoneNumber("")
    }, 3000)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            >
              Request a Callback
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Leave your number and we'll call you back to discuss your photography needs.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Thank You!</h3>
                <p className="text-gray-600 mb-4">We've received your request and will call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="event" className="text-sm font-medium text-gray-700">
                    Event Type
                  </label>
                  <select
                    id="event"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="birthday">Birthday</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Your Message (Optional)
                  </label>
                  <Textarea id="message" placeholder="Tell us about your event" rows={4} />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I agree to be contacted regarding my photography needs
                  </label>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Request Callback
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600">
                    Or call us directly at{" "}
                    <a href="tel:+919641271657" className="text-red-600 font-medium">
                      +91-9641271657
                    </a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          <div className="mt-12 text-center">
            <a href="tel:+919641271657" className="inline-flex items-center justify-center">
              <div className="bg-red-100 rounded-full p-3 mr-3">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-600">Call us directly</p>
                <p className="text-lg font-semibold text-red-600">+91-9641271657</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

