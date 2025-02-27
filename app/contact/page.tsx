import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91-9641271657</p>
                  <a href="tel:+919641271657" className="inline-block mt-1 text-red-600 hover:text-red-700 font-medium">
                    Call Now
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@subhalagna.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Office Address</h3>
                  <p className="text-gray-600">
                    Ward No. 39, Shreema Sarani,
                    <br />
                    Haidar Para, Siliguri,
                    <br />
                    West Bengal 734006
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 10:00 AM - 7:00 PM
                    <br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <label htmlFor="event" className="text-sm font-medium text-gray-700">
                  Event Type
                </label>
                <select
                  id="event"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  Your Message
                </label>
                <Textarea id="message" placeholder="Tell us about your event" rows={4} />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0598972651!2d88.42!3d26.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44194d9aa2c65%3A0x42c9d2c93f1717ac!2sWard%20No.%2039%2C%20Shreema%20Sarani%2C%20Ward%2039%2C%20Haidar%20Para%2C%20Siliguri%2C%20West%20Bengal%20734006!5e0!3m2!1sen!2sin!4v1645520641290!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

