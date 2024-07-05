import React from 'react';
import {productsData} from "@/components/products"
import ProductCard from './ProductCard';
import {clothings} from "@/components/clothes";
import ClothProductCard from "@/components/ClothProductCard"
import {arrivals} from "@/components/newArrivals"
import ArrivalCard from "@/components/ArrivalCard"
import { useRouter } from 'next/navigation';

const HomePage = () => {


  return (
    <div className="container mx-auto p-4 bg-gray-950">
      {/* Promotional Banner */}
      <div className="carousel carousel-center space-x-4 w-full mb-8">
        <div className="carousel-item relative w-full">
          <div className="w-full h-60 bg-gray-200 overflow-hidden flex items-center justify-center">
            <img className=' bg-center' src='/banner.jpg'/>
          </div>
        </div>
        <div className="carousel-item relative w-full">
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
            <span className="text-xl text-gray-700">1920x602</span>
          </div>
        </div>
        <div className="carousel-item relative w-full">
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
            <span className="text-xl text-gray-700">1920x603</span>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {productsData.map((product) => (
          
          <ProductCard key={product._id} product={product} />
          
        ))}
        </div>
      </div>

      {/* Bestsellers and New Arrivals */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Clothings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {clothings.map((product) => (
          <ClothProductCard key={product._id} product={product} />
        ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">New Arrivals with Affordable Prices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {arrivals.map((product) => (
          <ArrivalCard key={product._id} product={product} />
        ))}
        </div>
      </div>

      {/* Customer Reviews and Testimonials */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{`Customer ${idx + 1}`}</h2>
                <p>{`"Review content for customer ${idx + 1}."`}</p>
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <input key={starIdx} type="radio" name={`rating-${idx}`} className="mask mask-star-2 bg-orange-400" defaultChecked={starIdx === 0} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
