
const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="text-xl font-light text-gray-400 mb-2">{number.toString().padStart(2, '0')}</div>
      <h3 className="text-xl font-light mb-3">{title}</h3>
      <p className="text-gray-600 font-light">{description}</p>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Consultation",
      description: "We discuss your needs, preferences, and the specifics of your project."
    },
    {
      title: "Design",
      description: "Our designers create detailed drawings and specifications for your approval."
    },
    {
      title: "Crafting",
      description: "Skilled artisans handcraft your door using premium materials and techniques."
    },
    {
      title: "Installation",
      description: "Professional installation ensures perfect fit and functionality."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            From initial concept to final installation, we ensure a seamless experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              number={index + 1} 
              title={step.title} 
              description={step.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
