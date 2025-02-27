import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">About Subha Lagna</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Suro Sarkar - Professional Photographer"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Suro Sarkar</h2>
            <p className="text-lg text-gray-600">
              With over a decade of experience capturing life's most precious moments, I founded Subha Lagna with a
              simple mission: to preserve your memories in their most authentic and beautiful form.
            </p>
            <p className="text-lg text-gray-600">
              My journey as a photographer began with a passion for storytelling through images. Every wedding,
              pre-wedding shoot, and celebration has its own unique narrative, and I take pride in capturing those
              stories with creativity and care.
            </p>
            <p className="text-lg text-gray-600">
              At Subha Lagna, we believe that great photography is about more than just technical skill—it's about
              connecting with our clients and understanding what makes their special moments truly meaningful.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Our Location</h2>
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

        <div className="bg-gradient-to-r from-red-50 to-amber-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Authenticity</h3>
              <p className="text-gray-600">We capture genuine emotions and real moments that tell your unique story.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Creativity</h3>
              <p className="text-gray-600">
                Each shoot is approached with fresh eyes and innovative ideas to create one-of-a-kind imagery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality photography and customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

