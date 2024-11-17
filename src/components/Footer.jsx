function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold mb-4">
          © 2024 ShopEasy. All rights reserved.
        </p>
        <p className="text-sm mb-6">
          Discover amazing products in various categories. Enjoy shopping with
          us.
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
