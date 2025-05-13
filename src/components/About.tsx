
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">About Our Craft</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            With over 25 years of experience, we blend traditional woodworking methods with innovative techniques to create doors that stand the test of time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-left">
            <h3 className="text-xl font-light mb-4">Premium Materials</h3>
            <p className="text-gray-600 font-light">
              We source only the highest quality sustainable hardwoods and materials for every door we create.
            </p>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-light mb-4">Master Craftsmanship</h3>
            <p className="text-gray-600 font-light">
              Our team of skilled artisans bring decades of experience to create doors with precision and attention to detail.
            </p>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-light mb-4">Custom Design</h3>
            <p className="text-gray-600 font-light">
              Every door is uniquely designed to match your specific requirements and architectural style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
