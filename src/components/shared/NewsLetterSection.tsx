import banner from "@/assets/banner/banner1.jpg";

const NewsletterSection = () => {
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover    text-black"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="bg-black  bg-opacity-30 p-8   text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Stay updated with our latest news and offers.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-md text-black"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
