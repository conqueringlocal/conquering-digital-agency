
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const WhyUs = () => {
  const whyUsRef = useRef<HTMLDivElement>(null);

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

    if (whyUsRef.current) {
      observer.observe(whyUsRef.current);
    }

    return () => {
      if (whyUsRef.current) {
        observer.unobserve(whyUsRef.current);
      }
    };
  }, []);

  const reasons = [
    {
      title: "Local Expertise",
      description: "We understand the unique challenges and opportunities of local service businesses in your area.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      title: "Modern Tech Stack",
      description: "Our solutions leverage the latest technologies to give your business a competitive advantage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.2 8.4-0.7 1.2-2.8-1.8 0.7-1.2c0.4-0.7 0.9-0.8 1.3-0.6l0.6 0.4c0.4 0.2 0.6 0.8 0.3 1.5-0.1 0.2-0.2 0.3-0.3 0.5Z"></path>
          <path d="m14.1 8.5-7.6 12.7c-0.2 0.3-0.6 0.5-1 0.4l-2.8-0.4c-0.5-0.1-0.8-0.5-0.8-1l0.2-2.9c0-0.4 0.2-0.7 0.5-0.9l7.6-12.8 3.9 4.8Z"></path>
          <path d="m18 2 1 1"></path>
          <path d="m16 4 1 1"></path>
          <path d="m20 0 1 1"></path>
        </svg>
      ),
    },
    {
      title: "Done-For-You Systems",
      description: "We build and manage the complete system so you can focus on serving your customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
  ];

  return (
    <div ref={whyUsRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Why Conquering Local?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll delay-1">
            We're not just another marketing agency. We specialize in helping local service
            businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={cn(
                "bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll",
                `delay-${index + 1}`
              )}
            >
              <div className="text-primary mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
          <div className="animate-on-scroll delay-1">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
            <p className="text-gray-600">Local Businesses Served</p>
          </div>
          <div className="animate-on-scroll delay-2">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">92%</div>
            <p className="text-gray-600">Customer Retention Rate</p>
          </div>
          <div className="animate-on-scroll delay-3">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3.5x</div>
            <p className="text-gray-600">Average ROI for Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
