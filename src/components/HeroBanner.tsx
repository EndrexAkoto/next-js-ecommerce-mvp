import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-96 bg-gray-100 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
      
      {/* Banner Image */}
      <Image 
        src="/hero-banner.jpg" 
        alt="Sale Banner" 
        fill 
        className="object-cover"
        priority
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Spring Collection 2025</h1>
          <p className="text-white/90 text-lg mb-6">Discover our latest arrivals with up to 40% off for a limited time.</p>
          <Button size="lg" className="w-fit">
            <Link href="/products?collection=spring">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}