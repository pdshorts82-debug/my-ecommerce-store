"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { cart, addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Comfort Chair", price: 500, image: "/p1.jpg" },
    { id: 2, name: "Modern Sofa", price: 2000, image: "/p2.jpg" },
    { id: 3, name: "Wall Clock", price: 500, image: "/p3.jpg" },
    { id: 4, name: "Decor Pillow", price: 500, image: "/p4.jpg" },
    { id: 5, name: "Dining Table", price: 2200, image: "/p5.jpg" },
    { id: 6, name: "Lamp Shade", price: 499, image: "/p6.jpg" },
  ];

  const dailyDeal = {
    name: "Special Glass",
    price: 799,
    image: "/deal.jpg",
    discount: "40%",
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm p-2 text-center">
        Welcome to{" "}
        <span className="font-bold">Authentic Trending Products Store</span> — Free Gift on
        orders above PKR 3000  🎉
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-red-600">
            Authentic Trading Products Store
          </h1>

          <nav className="flex items-center gap-6">
            <div className="relative">
              <Link href="/cart">
                <span className="material-icons text-gray-700 cursor-pointer">
                  shopping_cart
                </span>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded">
                  {cart.length}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Affordable and Cheapest Products & Collection
            </h2>
            {/* Description line removed */}
            <button className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700">
              Shop Now
            </button>
          </div>
          <Image
            src="/sofa.png"
            alt="Sofa Banner"
            width={450}
            height={280}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 text-right">
          {/* Categories */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="text-lg font-bold mb-3">Categories</h3>
            <ul className="space-y-2 text-gray-900 font-bold">
              <li className="hover:text-red-600 cursor-pointer">Trending Mugs</li>
              <li className="hover:text-red-600 cursor-pointer">Men's Collection</li>
              <li className="hover:text-red-600 cursor-pointer">Women's Collection</li>
              <li className="hover:text-red-600 cursor-pointer">Watches</li>
              <li className="hover:text-red-600 cursor-pointer">Skin Care</li>
              <li className="hover:text-red-600 cursor-pointer">Shoes</li>
            </ul>
          </div>

          {/* Daily Deal */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="text-lg font-bold mb-3 text-red-600">Daily Deal</h3>
            <Image
              src={dailyDeal.image}
              alt={dailyDeal.name}
              width={250}
              height={200}
              className="rounded mb-3"
            />
            <p className="font-semibold">{dailyDeal.name}</p>
            <p className="text-red-600 font-bold">
              PKR {dailyDeal.price}{" "}
              <span className="line-through text-gray-500 ml-2">PKR 1200</span>
            </p>
            <span className="bg-red-600 text-white px-2 py-1 text-xs rounded">
              Save {dailyDeal.discount}
            </span>
          </div>

          {/* Latest Products */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-3">Latest Products</h3>
            {products.slice(0, 3).map((p) => (
              <div key={p.id} className="flex items-center mb-3">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold">{p.name}</p>
                  <p className="text-red-600 text-sm">PKR {p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center bg-white"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <p className="text-red-600 font-bold mt-2">
                  PKR {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-4 py-2 mt-3 rounded hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Discount Banner */}
          <div className="bg-blue-100 mt-12 p-8 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                75% OFF Clearance Sale
              </h3>
              <p className="text-gray-600">Limited time offer — Shop now!</p>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
              Grab Deal
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2025 Authentic Trading Products Store. All rights reserved.</p>
      </footer>
    </main>
  );
}


