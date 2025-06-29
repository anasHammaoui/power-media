"use client" 

import { useState } from "react"
import Image from "next/image"
import Button from "./components/button"
import { Users, FileText, Lightbulb, Phone, Facebook, Instagram, Menu, X } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir="rtl">
      {/* Header */}
      <header className="border-b md:px-6 border-gray-200 sticky top-0 bg-white z-40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/project/logo.png"
                alt="Power Media Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <span className="text-xl font-bold text-gray-900">Power Media</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">
                الصفحة الرئيسية
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                من نحن
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                تواصل معنا
              </a>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col items-center gap-4 bg-gray-50 p-6 rounded-lg shadow-md">
                <a href="#" className="text-gray-700 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                  الصفحة الرئيسية
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                  من نحن
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                  تواصل معنا
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

    {/* Hero Section */}
      <section id="home" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div data-aos="fade-left" className="order-2 lg:order-1">
              <Image
                src="/project/home.jpg"
                alt="Digital Marketing Illustration"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div data-aos="fade-right" className="order-1 lg:order-2 text-center lg:text-right">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                هل تريد تحسين وجودك
                <br />
                على الإنترنت؟
              </h1>
              <p className="text-lg text-gray-600 mb-4">وكالتنا للتسويق الرقمي هي خيارك الأفضل</p>
              <p className="text-lg text-gray-600 mb-8">لإدارة صفحات مشروعك باحترافية.</p>
              <p className="text-base text-gray-500">
                تصميم الجرافيك - منتاج الفيديوهات - إنشاء المحتوى
                <br />
                إنشاء مواقع - تسويق الرقمي
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section data-aos="fade-up" className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-white text-center mb-12">اطلع على ما نقوم به من</h2>
          <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">استهداف جمهورك</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">انشاء محتوى جذاب</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">حلول إبداعية</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div data-aos="fade-up" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">عن وكالتنا</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              في وكالة <span className="font-bold text-purple-600">Power Media</span> للتسويق الرقمي، نقدم مجموعة متنوعة
              من
            </p>
            <p className="text-lg text-gray-600 mb-6">الحلول لتعزيز تواجدك على الإنترنت ونمو عملك.</p>
            <p className="text-base text-gray-500 mb-4">
              نتطلع إلى إنشاء موقع الكتروني أو إدارة قنواتك التجارية لبداية
            </p>
            <p className="text-base text-gray-500 mb-4">
              أو إنشاء المحتوى؟ أو زيادة متهورك على وسائل التواصل الاجتماعي عبر
            </p>
            <p className="text-base text-gray-500">حملات إعلانية مموّلة ؟ لدينا كل ما تحتاجه.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Now with clickable images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Large featured image */}
            <div data-aos="fade-left" className="lg:col-span-1">
              <Image
                src="/project/portfolio/example 1.jpg"
                alt="Restaurant Menu Design"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/project/portfolio/example 1.jpg")}
              />
            </div>

            {/* Right side - 2x2 grid of smaller images */}
            <div data-aos="fade-right" className="grid grid-cols-2 gap-4">
              <Image
                src="/project/portfolio/example 3.jpg"
                alt="Pizza Promotion"
                width={200}
                height={150}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/project/portfolio/example 3.jpg")}
              />
              <Image
                src="/project/portfolio/example 4.jpg"
                alt="Food Advertisement"
                width={200}
                height={150}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/project/portfolio/example 4.jpg")}
              />
              <Image
                src="/project/portfolio/example 5.jpg"
                alt="Restaurant Branding"
                width={200}
                height={150}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/project/portfolio/example 5.jpg")}
              />
              <Image
                src="/project/portfolio/example 6.jpg"
                alt="Food Menu Design"
                width={200}
                height={150}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/project/portfolio/example 6.jpg")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" data-aos="fade-up" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">متشوقون للعمل معكم</h2>
          <p className="text-xl text-gray-600 mb-12">نود أن نسمع عن مشروعك ونعلم</p>
          <Button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <Phone className="w-6 h-6 ml-3" />
            اتصل بنا
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div data-aos="fade-right" className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/project/profile/ibrahim.png"
                  alt="Ibrahim Rachdi"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">IBRAHIM RACHDI</h3>
              <p className="text-gray-600">Digital Marketer</p>
            </div>
            <div data-aos="fade-up" className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/project/profile/anas.png"
                  alt="Anas Hammaoui"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">ANAS HAMMAOUI</h3>
              <p className="text-gray-600">Full stack web developer</p>
            </div>
            <div data-aos="fade-left" className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/project/profile/hamza.png"
                  alt="Hamza Tarmest"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">HAMZA TARMEST</h3>
              <p className="text-gray-600">Video editor | Graphic design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:px-6">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">إن مهمتنا وجودة عملنا هما أساسنا الأهم</p>
              <p className="text-gray-300">نأمل أن نتعاون في أقرب وقت.</p>
            </div>
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-xl font-bold">Power Media</span>
              <Image
                src="/project/logo.png"
                alt="Power Media Logo"
                width={50}
                height={50}
                className="rounded"
              />            </div>
        
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://wa.me/0653165179"
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/power.media.ag/"
              className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center border-t border-gray-800 pt-8">
            <p className="text-gray-400 mb-2">OUJDA - MAROC</p>
            <p className="text-gray-400">Power Media . All Rights Reserved. 2025</p>
          </div>
        </div>
      </footer>

      {/* Full-screen Image Lightbox/Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setSelectedImage(null)} // Close modal on overlay click
        >
          {/* Using stopPropagation to prevent the modal from closing when clicking on the image container */}
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full screen view"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              aria-label="Close full-screen image"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}