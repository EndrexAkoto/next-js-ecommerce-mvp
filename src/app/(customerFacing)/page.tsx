import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import db from "@/db/db";
import { cache } from "@/lib/cache";
// import Footer from "@/components/Footer"; // Ensure the path is correct or comment out if not needed
// import HeroBanner from "@/components/HeroBanner";
// import FeaturedProducts from "@/components/FeaturedProducts";

// Cache popular products
const getMostPopularProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { orders: { _count: "desc" } },
      take: 6,
    });
  },
  ["/", "getMostPopularProducts"],
  { revalidate: 60 * 60 * 24 }
);

// Cache newest products
const getNewestProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    });
  },
  ["/", "getNewestProducts"]
);

// Cache featured products
const getFeaturedProducts = cache(
  () => {
    return db.product.findMany({
      where: { 
        isAvailableForPurchase: true,
        isFeatured: true 
      },
      take: 3,
    });
  },
  ["/", "getFeaturedProducts"]
);

export default function HomePage() {
  return (
    <main className="space-y-12 pb-8">
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Featured Products */}
      <section className="container px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{Array(3).fill(0).map((_, i) => <div key={i} className="bg-gray-100 rounded-lg h-96 animate-pulse"></div>)}</div>}>
          <FeaturedProducts productsFetcher={getFeaturedProducts} />
        </Suspense>
      </section>
      
      {/* Popular Products Section */}
      <ProductGridSection
        title="Most Popular"
        description="Our customers' favorites this season"
        productsFetcher={getMostPopularProducts}
      />
      
      {/* Newest Products Section */}
      <ProductGridSection 
        title="Newest Arrivals" 
        description="Fresh products just added to our store"
        productsFetcher={getNewestProducts} 
      />
      
      {/* Newsletter Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Subscribe to get special offers, free giveaways, and updates on new arrivals.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

// Product Grid Section Component
type ProductGridSectionProps = {
  title: string;
  description?: string;
  productsFetcher: () => Promise<any[]>;
}

function ProductGridSection({
  productsFetcher,
  title,
  description,
}: ProductGridSectionProps) {
  return (
    <section className="container mx-auto px-4 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
        <Button variant="outline" asChild>
          <Link href="/products" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductGrid productsFetcher={productsFetcher} />
        </Suspense>
      </div>
    </section>
  );
}

// Async Product Grid Component
async function ProductGrid({
  productsFetcher,
}: {
  productsFetcher: () => Promise<any[]>;
}) {
  const products = await productsFetcher();
  return products.map(product => (
    <ProductCard key={product.id} {...product} />
  ));
}