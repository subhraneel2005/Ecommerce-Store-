import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

const CheckoutPage: React.FC = () => {
  const [billingAddress, setBillingAddress] = useState<Address>({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const [shippingAddress, setShippingAddress] = useState<Address>({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const handleBillingAddressChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Address) => {
    setBillingAddress({ ...billingAddress, [field]: e.target.value });
  };

  const handleShippingAddressChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Address) => {
    setShippingAddress({ ...shippingAddress, [field]: e.target.value });
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Handle placing the order logic here (e.g., submit to backend, integrate with payment gateway)
    alert('Order placed successfully!');
  };

  // Example products for order summary (can be fetched from cart or props)
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ];

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Billing Address Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Billing Address</h3>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              className="input input-bordered"
              placeholder="Street Address"
              value={billingAddress.street}
              onChange={(e) => handleBillingAddressChange(e, 'street')}
            />
            <input
              type="text"
              className="input input-bordered"
              placeholder="City"
              value={billingAddress.city}
              onChange={(e) => handleBillingAddressChange(e, 'city')}
            />
            <input
              type="text"
              className="input input-bordered"
              placeholder="State"
              value={billingAddress.state}
              onChange={(e) => handleBillingAddressChange(e, 'state')}
            />
            <input
              type="text"
              className="input input-bordered"
              placeholder="ZIP Code"
              value={billingAddress.zip}
              onChange={(e) => handleBillingAddressChange(e, 'zip')}
            />
          </div>
        </form>
      </div>

      {/* Shipping Address Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              className="input input-bordered"
              placeholder="Street Address"
              value={shippingAddress.street}
              onChange={(e) => handleShippingAddressChange(e, 'street')}
            />
            <input
              type="text"
              className="input input-bordered"
              placeholder="City"
              value={shippingAddress.city}
              onChange={(e) => handleShippingAddressChange(e, 'city')}
            />
            <input
              type="text"
              className="input input-bordered"
              placeholder="State"
              value={shippingAddress.state}
              onChange={(e) => handleShippingAddressChange(e, 'state')}
            />
            <input
              type="text"
              className="input input-bordered"
              placeholder="ZIP Code"
              value={shippingAddress.zip}
              onChange={(e) => handleShippingAddressChange(e, 'zip')}
            />
          </div>
        </form>
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                className="radio radio-primary"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onChange={handlePaymentMethodChange}
              />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                className="radio radio-primary"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentMethodChange}
              />
              <span>PayPal</span>
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <div className="border rounded-lg p-4">
          {products.map(product => (
            <div key={product.id} className="flex justify-between mb-2">
              <span>{product.name} x {product.quantity}</span>
              <span>${(product.price * product.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="font-semibold">Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="btn btn-primary w-full" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
