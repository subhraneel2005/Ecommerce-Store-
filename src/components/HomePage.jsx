import React,{useState} from 'react';
import {productsData} from "@/components/products"
import ProductCard from './ProductCard';
import {clothings} from "@/components/clothes";
import ClothProductCard from "@/components/ClothProductCard"
import {arrivals} from "@/components/newArrivals"
import ArrivalCard from "@/components/ArrivalCard"
import { useRouter } from 'next/navigation';

const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // List of category names
  const categories = [
    "Electronics",
    "Home Decoration",
    "Beauty Products",
    "Fashion",
    "Equipments",
    "Women",
    "Kids",
    "Men"
  ];

  // Function to filter products based on category
  const filterProducts = (category) => {
    const formattedQuery = category.trim().toLowerCase(); // Convert query to lowercase
    const filtered = productsData.filter(product => {
      // Normalize category names for comparison
      const formattedCategory = product.category.toLowerCase();
      // Check if the formatted category includes the formatted query
      return formattedCategory.includes(formattedQuery);
    });
    setFilteredProducts(filtered);
  };

  // Handle input change in search box
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formattedQuery = searchQuery.trim().toLowerCase(); // Convert query to lowercase
    // Call filterProducts with the formatted query
    filterProducts(formattedQuery);
  };

  return (
    <>
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">E-store</a>
    </div>
    <div className="flex-none">
      <form className="flex gap-2" onSubmit={handleSearchSubmit}>
    <div className="form-control ml-6">
      <input  value={searchQuery}
          onChange={handleSearchInputChange} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Search</button>
    </form>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          <div className="card-body">
            <span className="text-lg font-bold">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
    </div>
    <div className="container mx-auto p-4 bg-gray-950">
      {/* Promotional Banner */}
      <div className="carousel carousel-center space-x-4 w-full mb-8">
          <div className="w-full h-60 bg-gray-200 overflow-hidden flex items-center justify-center">
            <img className=' bg-center' src='/banner.jpg'/>
          </div>
      </div>

      {/* Featured Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
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
          {/* Customer review cards */}
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;
