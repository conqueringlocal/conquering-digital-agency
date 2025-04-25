
import React, { useEffect, useRef } from "react";
import Button from "../shared/Button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative bg-gradient-to-br from-gray-100 to-gray-200 min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              Helping Local Service Businesses 
              <span className="text-primary block mt-2">Grow Smarter</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 animate-on-scroll delay-1">
              Websites. Marketing. Automation.
              <span className="block">All in one place.</span>
            </p>
            <div className="flex flex-wrap gap-4 animate-on-scroll delay-2">
              <Button href="/contact" size="lg">
                Let's Talk
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="relative animate-on-scroll delay-3">
            {/* Hero image or illustration */}
            <div className="relative bg-white p-6 rounded-lg shadow-xl border border-gray-200 transform rotate-3">
              <div className="bg-primary/10 p-4 rounded mb-4">
                <div className="h-6 w-32 bg-primary/20 rounded mb-2"></div>
                <div className="h-4 w-48 bg-primary/20 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <div className="ml-4">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform -rotate-2 z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="h-5 w-24 bg-primary/20 rounded"></div>
                <div className="h-5 w-12 bg-green-200 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
