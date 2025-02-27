document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // Hero slider
  const slides = document.querySelectorAll(".hero-slide")
  const dots = document.querySelectorAll(".dot")
  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    slides[index].classList.add("active")
    dots[index].classList.add("active")
    currentSlide = index
  }

  // Initialize slider
  showSlide(0)

  // Auto slide
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }, 5000)

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index)
    })
  })

  // Location dropdown
  const locationDropdown = document.getElementById("location-dropdown")
  const locationMessage = document.getElementById("location-message")
  const selectedLocation = document.getElementById("selected-location")

  if (locationDropdown && locationMessage && selectedLocation) {
    locationDropdown.addEventListener("change", function () {
      if (this.value) {
        selectedLocation.textContent = this.value
        locationMessage.style.display = "block"
      } else {
        locationMessage.style.display = "none"
      }
    })
  }

  // Gallery lightbox
  const galleryItems = document.querySelectorAll(".gallery-item")
  const lightbox = document.getElementById("gallery-lightbox")
  const lightboxImg = lightbox ? lightbox.querySelector("img") : null
  const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null

  if (galleryItems.length && lightbox && lightboxImg && lightboxClose) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        const imgSrc = this.getAttribute("data-src")
        lightboxImg.src = imgSrc
        lightbox.classList.add("active")
      })
    })

    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active")
    })

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active")
      }
    })
  }

  // Contact form submission
  const callbackForm = document.getElementById("callback-form")
  const formSuccess = document.getElementById("form-success")

  if (callbackForm && formSuccess) {
    callbackForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // In a real application, you would send the form data to your server
      callbackForm.style.display = "none"
      formSuccess.style.display = "block"

      // Reset form after 3 seconds
      setTimeout(() => {
        callbackForm.reset()
        callbackForm.style.display = "block"
        formSuccess.style.display = "none"
      }, 3000)
    })
  }

  // Booking form submission
  const bookingForm = document.getElementById("booking-form")
  const bookingSuccess = document.getElementById("booking-success")

  if (bookingForm && bookingSuccess) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // In a real application, you would send the form data to your server here
      bookingForm.style.display = "none"
      bookingSuccess.style.display = "block"

      // Scroll to the success message
      bookingSuccess.scrollIntoView({ behavior: "smooth" })

      // Reset form after 5 seconds
      setTimeout(() => {
        bookingForm.reset()
        bookingForm.style.display = "block"
        bookingSuccess.style.display = "none"
      }, 5000)
    })
  }

  // Discount popup
  const discountPopup = document.getElementById("discount-popup")
  const popupClose = discountPopup ? discountPopup.querySelector(".popup-close") : null
  const popupLater = document.getElementById("popup-later")

  function showPopup() {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("hasSeenPopup")
    if (!hasSeenPopup && discountPopup) {
      setTimeout(() => {
        discountPopup.classList.add("active")
      }, 3000)
    }
  }

  function closePopup() {
    if (discountPopup) {
      discountPopup.classList.remove("active")
      // Set flag in localStorage to prevent showing again in this session
      localStorage.setItem("hasSeenPopup", "true")
    }
  }

  // Show popup
  showPopup()

  // Close popup events
  if (popupClose) {
    popupClose.addEventListener("click", closePopup)
  }

  if (popupLater) {
    popupLater.addEventListener("click", closePopup)
  }

  if (discountPopup) {
    discountPopup.addEventListener("click", (e) => {
      if (e.target === discountPopup) {
        closePopup()
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()
        const targetElement = document.querySelector(href)

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })

          // Close mobile menu if open
          if (mobileMenu && mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active")
          }
        }
      }
    })
  })
})

