import { useParams } from "react-router-dom";

function Category() {
  const { category } = useParams();

  const products = {
    electronics: [
      {
        name: "iPhone 15",
        description: "Latest model with amazing features.",
        price: "$999.99",
        image:
          "https://th.bing.com/th/id/OIP.knwQLcZ0N7rhk46IRJfmfQHaHa?rs=1&pid=ImgDetMain",
      },
      {
        name: "Samsung Galaxy S23",
        description: "Flagship Android phone.",
        price: "$799.99",
        image:
          "https://th.bing.com/th/id/OIP.5QMkXIlusvZfEUm50okfbAHaHa?rs=1&pid=ImgDetMain",
      },
      {
        name: "Sony WH-1000XM5",
        description: "Noise cancelling headphones.",
        price: "$349.99",
        image:
          "https://www.lbtechreviews.com/wp-content/uploads/2023/08/Sony-WH-1000XM5-1920x1078-1.jpg",
      },
    ],
    clothes: [
      {
        name: "Levi's 501 Original Fit Jeans",
        description: "Classic fit denim jeans.",
        price: "$59.99",
        image:
          "https://www.80scasualclassics.co.uk/images/levis-501-original-fit-jeans-one-wash-p16350-89368_image.jpg",
      },
      {
        name: "Nike Air Force 1 Sneakers",
        description: "Iconic sneakers with comfortable fit.",
        price: "$89.99",
        image:
          "https://th.bing.com/th/id/R.615c9bbba46931722b8ef5e115f5f9fa?rik=w3MRulfIkaatjg&pid=ImgRaw&r=0",
      },
    ],
    cars: [
      {
        name: "Tesla Model 3",
        description: "Electric sedan with modern design.",
        price: "$35,000",
        image:
          "https://th.bing.com/th/id/R.56b7e2239e826caf8356a68b3fd88332?rik=gPJ31KNOyUXlHg&riu=http%3a%2f%2fst.automobilemag.com%2fuploads%2fsites%2f5%2f2017%2f11%2f2017-Tesla-Model-3-rear-three-quarter.jpg&ehk=1kDGvqrgIYYl2t3kMcOJb%2fTK32AFGFLJT6%2fHn2zRpco%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        name: "BMW X5",
        description: "Luxury SUV with powerful engine.",
        price: "$60,000",
        image:
          "https://th.bing.com/th/id/OIP.2ef8XtcbMJDi9yGp_hrbhgHaEo?rs=1&pid=ImgDetMain",
      },
    ],
  };
  const categoryProducts = products[category] || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categoryProducts.map((product, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-800 mb-4">
            {product.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Category;
