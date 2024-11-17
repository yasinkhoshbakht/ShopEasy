import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="h-96 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-400">ShopEasy</span>
        </h1>
        <p className="text-xl mb-8">
          Discover amazing products in various categories. Find what you love
          and enjoy shopping with us.
        </p>
        <Link
          to="/products"
          className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-full text-2xl font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Browse Products
        </Link>
      </div>
      <div className="h-1/3 bg-white text-gray-800 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Shop by Categories
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="w-1/4 bg-blue-100 rounded-lg p-4 shadow-md text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Electronics
            </h3>
            <p className="mb-6">Smartphones, laptops, gadgets and more.</p>
            <Link
              to="/products/electronics"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
          <div className="w-1/4 bg-green-100 rounded-lg p-4 shadow-md text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Clothes
            </h3>
            <p className="mb-6">Fashionable clothing for all seasons.</p>
            <Link
              to="/products/clothes"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
          <div className="w-1/4 bg-red-100 rounded-lg p-4 shadow-md text-center">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Cars</h3>
            <p className="mb-6">Explore a wide range of cars and vehicles.</p>
            <Link
              to="/products/cars"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="py-16 px-6 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="text-lg text-center">
          ShopEasy is dedicated to providing high-quality products at affordable
          prices. We carefully select items to bring you the best shopping
          experience.
        </p>
      </div>
      <div className="py-16 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Exclusive Offers
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-yellow-400 text-gray-800 rounded-lg p-8 w-1/4 text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Free Shipping</h3>
            <p className="mb-6">Get free shipping on all orders over $50!</p>
            <Link
              to="/products"
              className="bg-gray-800 text-yellow-400 px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-green-400 text-gray-800 rounded-lg p-8 w-1/4 text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">50% Off</h3>
            <p className="mb-6">Enjoy up to 50% off on select products.</p>
            <Link
              to="/products"
              className="bg-gray-800 text-green-400 px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
