"use client";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Total calculate karna
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Rs. {item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">Total:</h2>
            <span className="text-xl font-bold">Rs. {total}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
