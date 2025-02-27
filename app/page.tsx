import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { DiscountPopup } from "@/components/discount-popup"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <ContactForm />
      <Footer />
      <DiscountPopup />
    </div>
  )
}

