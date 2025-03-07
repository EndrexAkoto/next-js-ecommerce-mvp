import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number | null;
  imageUrl?: string | null;
  stock: number;
  slug?: string;
  averageRating?: number;
  reviewCount?: number;
};

export function ProductCard({
  id,
  name,
  price,
  compareAtPrice,
  imageUrl,
  stock,
  slug,
  averageRating = 0,
  reviewCount = 0,
}: ProductCardProps) {
  const productUrl = `/products/${slug || id}`;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow transition-all hover:shadow-md">
      <div className="relative aspect-square">
        <Link href={productUrl}>
          <Image 
            src={imageUrl || "/placeholder-product.jpg"} 
            alt={name} 
            fill 
            className="object-cover" 
          />
        </Link>
        
        {stock < 10 && stock > 0 && (
          <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
            Only {stock} left
          </div>
        )}
        
        {stock === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
        
        <button 
          className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        {/* Ratings */}
        <div className="flex items-center mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= averageRating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-1">({reviewCount})</span>
        </div>
        
        {/* Product Name */}
        <Link href={productUrl}>
          <h3 className="font-medium mb-1 line-clamp-1 hover:text-blue-600">{name}</h3>
        </Link>
        
        {/* Pricing and Add to Cart */}
        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <span className="font-bold">${price.toFixed(2)}</span>
            {compareAtPrice && compareAtPrice > price && (
              <span className="ml-2 text-sm text-gray-500 line-through">${compareAtPrice.toFixed(2)}</span>
            )}
          </div>
          <Button 
            size="sm" 
            disabled={stock === 0}
            aria-label={stock === 0 ? "Out of stock" : "Add to cart"}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Skeleton loader for product cards
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
      <div className="aspect-square bg-gray-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="flex justify-between">
          <div className="h-5 bg-gray-200 rounded w-1/4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}