import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import AOSProvider from "@/utils/Aos"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Power Media - وكالة التسويق الرقمي",
  description: "وكالة Power Media للتسويق الرقمي - نقدم حلول متكاملة لتحسين وجودك على الإنترنت",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className} suppressHydrationWarning>
        <AOSProvider> {children}</AOSProvider>
      </body>
    </html>
  )
}
