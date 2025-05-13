
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-white pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 mb-6">
              Handcrafted Custom Doors for Your Unique Space
            </h1>
            <p className="text-lg text-gray-600 mb-10 font-light">
              Bringing together traditional craftsmanship and modern design to create doors that make an impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-soft-blue text-gray-800 hover:bg-blue-100 rounded-none px-8">
                Explore
              </Button>
              <Button variant="outline" className="rounded-none border-gray-300 px-8">
                Contact
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80"
                alt="Custom wooden door"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
