import React from 'react'

function ArrivalCard({product}) {
  return (
    <div className="bg-gray-200 border border-gray-400 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative">
         
            <span className="absolute top-2 z-10 left-2 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Affordable
            </span>
          
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.title}</h3>
          <div className="flex justify-between items-center mb-4">
            {product.oldPrice && (
              <span className="text-red-500 line-through text-lg">${product.oldPrice}</span>
            )}
            <span className="text-green-600 font-bold text-lg">${product.price}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500 mr-2">Rating:</span>
            <span className="text-yellow-500">{Array(product.rating).fill('⭐')}</span>
          </div>
          <div className="text-sm text-gray-500 mb-2">Category: {product.category}</div>
          <div className="text-sm text-gray-500">Quantity: {product.quantity}</div>
        </div>
      </div>
  )
}

export default ArrivalCard