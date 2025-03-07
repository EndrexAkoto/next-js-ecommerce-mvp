import React from "react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {currentYear} YourStore. All rights reserved.
        </p>
        <div className="mt-2">
          <Link href="/terms" className="text-gray-400 hover:text-white mx-2">
            Terms
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white mx-2">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}