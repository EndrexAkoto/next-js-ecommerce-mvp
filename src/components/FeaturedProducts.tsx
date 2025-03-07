import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number | null;
  imageUrl?: string | null;
  stock: number;
  slug?: string;
  averageRating?: number;
  reviewCount?: number;
  description?: string;
};

export default async function FeaturedProducts({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>;
}) {
  const products = await productsFetcher();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
          <div className="relative h-64">
            <Image 
              src={product.imageUrl || "/placeholder-product.jpg"} 
              alt={product.name} 
              fill 
              className="object-cover"
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded">Featured</div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">
              <Link href={`/products/${product.slug || product.id}`} className="hover:text-blue-600">
                {product.name}
              </Link>
            </h3>
            
            <div className="flex items-center mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= (product.averageRating || 0)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">({product.reviewCount || 0})</span>
            </div>
            
            {product.description && (
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            )}
            
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <span className="ml-2 text-sm text-gray-500 line-through">${product.compareAtPrice.toFixed(2)}</span>
                )}
              </div>
              <Button 
                size="sm" 
                disabled={product.stock === 0}
                className="gap-1"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Shop Now</span>
              </Button>
            </div>
            
            {product.stock < 10 && product.stock > 0 && (
              <p className="text-amber-600 text-xs mt-2 font-medium">Only {product.stock} items left</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}