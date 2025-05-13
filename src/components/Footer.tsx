
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the email to a server
    console.log({ email });
    
    // Show success message
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter soon.",
    });
    
    // Clear form
    setEmail("");
  };

  return (
    <footer className="bg-soft-gray text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-light mb-6">Artisan Doors</h3>
            <p className="text-gray-600 mb-6 font-light">
              Premium custom doors handcrafted with precision and care.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-light mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 font-light">About</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-gray-900 font-light">Products</a></li>
              <li><a href="#process" className="text-gray-600 hover:text-gray-900 font-light">Process</a></li>
              <li><a href="#gallery" className="text-gray-600 hover:text-gray-900 font-light">Gallery</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 font-light">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-light mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-6 font-light">
              Stay updated with our latest designs.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="bg-white border-gray-200 rounded-none"
              />
              <Button type="submit" className="bg-soft-blue text-gray-800 hover:bg-blue-100 rounded-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Artisan Doors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
