"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    "https://image.wedmegood.com/resized/1000X/uploads/member/2897930/1703061636_DSC_5250.jpg",
    "https://image.wedmegood.com/resized/1000X/uploads/member/2897930/1659331132_DSC_8104.jpg",
    "https://image.wedmegood.com/resized/1000X/uploads/member/2897930/1703061648_DSC_5326.jpg",
    "https://image.wedmegood.com/resized/1000X/uploads/member/2897930/1703061629_DSC_5177.jpg",
    "https://image.wedmegood.com/resized/1000X/uploads/member/2897930/1647495870_275743695_519756359672098_6221822314462299576_n.jpg",
    "https://image.wedmegood.com/resized/1000X/uploads/member/2897930/1703061641_DSC_5055.jpg",
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            My Recent Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            Browse through our portfolio of beautiful wedding photography and special events.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-medium">Wedding Photography</h3>
                  <p className="text-sm text-white/80">Siliguri, West Bengal</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

