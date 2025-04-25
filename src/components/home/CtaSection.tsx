
import React, { useEffect, useRef } from "react";
import Button from "../shared/Button";

const CtaSection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animated");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div ref={ctaRef} className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-20 top-0 w-64 h-64 rounded-full bg-white opacity-10"></div>
      <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-white opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Ready to Grow Your Local Service Business?
            </h2>
            <p className="text-xl mb-8 animate-on-scroll delay-1">
              Get a free website audit and discover opportunities to increase your online visibility,
              attract more customers, and streamline your operations.
            </p>
            <div className="animate-on-scroll delay-2">
              <Button href="/contact" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get a Free Website Audit
              </Button>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-primary text-xl font-bold mb-4">Request Your Free Audit</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Website URL (if any)"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit
                </Button>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  We'll never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
