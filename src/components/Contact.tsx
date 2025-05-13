import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Netlify will handle the form submission automatically
    // We just need to show the success message and clear the form
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Clear form
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-soft-gray">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Have questions or ready to start your custom door project? Reach out to our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-light mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8 font-light">
              <p className="text-gray-600">
                <span className="font-normal">Address:</span> 123 Craftsman Way, Woodville, CA 90210
              </p>
              <p className="text-gray-600">
                <span className="font-normal">Phone:</span> (555) 123-4567
              </p>
              <p className="text-gray-600">
                <span className="font-normal">Email:</span> askordoors@gmail.com
              </p>
              <p className="text-gray-600">
                <span className="font-normal">Hours:</span> Monday-Friday: 9am-5pm
              </p>
            </div>
            
            <h3 className="text-xl font-light mb-4">Showroom</h3>
            <p className="text-gray-600 font-light">
              Visit our showroom to see and feel the quality of our doors in person.
              Appointments are recommended but not required.
            </p>
          </div>
          
          <div>
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="bg-white border-0 border-b border-gray-200 rounded-none px-0 h-12 font-light"
                />
              </div>
              
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-white border-0 border-b border-gray-200 rounded-none px-0 h-12 font-light"
                />
              </div>
              
              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows={4}
                  required
                  className="bg-white border-0 border-b border-gray-200 rounded-none px-0 resize-none font-light"
                />
              </div>
              
              <Button type="submit" className="bg-soft-blue text-gray-800 hover:bg-blue-100 rounded-none px-8 mt-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
