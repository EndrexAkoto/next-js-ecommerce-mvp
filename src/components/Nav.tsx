import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="Store Logo" 
                width={40} 
                height={40}
                className="h-10 w-auto" 
              />
              <span className="text-xl font-bold">YourStore</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-medium hover:text-blue-600">Home</Link>
            <Link href="/products" className="font-medium hover:text-blue-600">Products</Link>
            <Link href="/categories" className="font-medium hover:text-blue-600">Categories</Link>
            <Link href="/about" className="font-medium hover:text-blue-600">About</Link>
            <Link href="/contact" className="font-medium hover:text-blue-600">Contact</Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/wishlist" className="p-2 hover:bg-gray-100 rounded-full" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}