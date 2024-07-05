import React, { useState } from 'react';

// Simulate a list of products
const products = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  name: `Product ${idx + 1}`,
  price: `${(idx + 1) * 10}.99`,
  img: `500x500`,
}));

const ProductListingPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get the products for the current page
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto p-4 overflow-hidden">
      <div className="flex justify-between mb-4">
        {/* Product Categories */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary">Categories</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow text-white bg-emerald-700 rounded-box w-52 z-10">
            <li><a>All</a></li>
            <li><a>Electronics</a></li>
            <li><a>Clothing</a></li>
            <li><a>Home & Garden</a></li>
            <li><a>Sports</a></li>
            <li><a>Toys</a></li>
          </ul>
        </div>
        {/* Sorting Options */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-secondary">Sort By</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-pink-600 text-white rounded-box w-52">
            <li><a>Price: Low to High</a></li>
            <li><a>Price: High to Low</a></li>
            <li><a>Popularity</a></li>
            <li><a>Newest</a></li>
          </ul>
        </div>
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure className="h-60 bg-blue-100 flex items-center justify-center">
              <span className="text-xl text-gray-700">{product.img}</span>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{`$${product.price}`}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            className={`btn ${currentPage === 1 ? 'btn-disabled' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`btn ${currentPage === idx + 1 ? 'btn-active' : ''}`}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            className={`btn ${currentPage === totalPages ? 'btn-disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductListingPage;
