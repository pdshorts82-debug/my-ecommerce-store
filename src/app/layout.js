import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { ProductProvider } from "../context/ProductContext";

export const metadata = {
  title: "ATS - Trending Products",
  description: "Professional E-commerce Website like Daraz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Wrap entire app with Context Providers */}
        <ProductProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
