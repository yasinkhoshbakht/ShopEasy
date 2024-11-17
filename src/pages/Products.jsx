import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-12">Our Products</h2>
      <div className="flex justify-center space-x-8 mb-12">
        <Link
          to="electronics"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Electronics
        </Link>
        <Link
          to="clothes"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
        >
          Clothes
        </Link>
        <Link
          to="cars"
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
        >
          Cars
        </Link>
      </div>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
