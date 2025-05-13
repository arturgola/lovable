
const ProductCard = ({ title, image, description }: { title: string, image: string, description: string }) => {
  return (
    <div className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      <div className="pt-4">
        <h3 className="text-xl font-light mb-2">{title}</h3>
        <p className="text-gray-600 font-light">{description}</p>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Contemporary Doors",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80",
      description: "Clean lines and minimalist design for modern spaces."
    },
    {
      title: "Traditional Doors",
      image: "https://images.unsplash.com/photo-1517490629755-95051d0a01af?auto=format&fit=crop&q=80",
      description: "Classic styles with timeless details and craftsmanship."
    },
    {
      title: "Custom Entry Doors",
      image: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&q=80",
      description: "Statement pieces designed to make an impression."
    },
    {
      title: "Interior French Doors",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
      description: "Elegant solutions to connect living spaces while allowing light."
    }
  ];

  return (
    <section id="products" className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Our Collections</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Browse through our signature collections or contact us for completely custom designs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              title={product.title} 
              image={product.image} 
              description={product.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
