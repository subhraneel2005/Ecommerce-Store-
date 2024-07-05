import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 1, img: '500x500' },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 2, img: '500x500' },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  const handleApplyCoupon = () => {
    // For simplicity, we'll apply a flat 10% discount if the coupon code is "DISCOUNT10"
    if (couponCode === 'DISCOUNT10') {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const discountedPrice = totalPrice - totalPrice * discount;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="mb-4">
        {products.map(product => (
          <div key={product.id} className="card bg-base-100 shadow-xl mb-4">
            <div className="flex items-center p-4">
              <figure className="w-24 h-24 bg-gray-100 flex items-center justify-center mr-4">
                <span className="text-xl text-gray-700">{product.img}</span>
              </figure>
              <div className="flex-grow">
                <h2 className="card-title">{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <div className="flex items-center space-x-5 mt-2">
                  <label className="mr-2">Quantity:</label>
                  <button
                    className="btn btn-square btn-outline"
                    onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                    disabled={product.quantity <= 1} // Disable if quantity is 1 or less
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    className="input input-bordered w-20 text-center"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                    min="1"
                  />
                  <button
                    className="btn btn-square btn-outline"
                    onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discount Code</span>
          </label>
          <div className="flex">
            <input
              type="text"
              className="input input-bordered"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className="btn btn-secondary ml-2" onClick={handleApplyCoupon}>
              Apply
            </button>
          </div>
        </div>
        <div className="text-lg font-bold">
          Total: ${discountedPrice.toFixed(2)}
        </div>
      </div>

      <button className="btn btn-primary w-full">Proceed to Checkout</button>
    </div>
  );
};

export default ShoppingCart;
