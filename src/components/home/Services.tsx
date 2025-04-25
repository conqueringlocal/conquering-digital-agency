
import React, { useEffect, useRef } from "react";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Custom Websites",
      description: "Beautiful, responsive websites built to convert visitors into customers and grow your local business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
      href: "/services#web-design"
    },
    {
      title: "Marketing Automation",
      description: "AI-powered tools that automate your customer engagement, follow-up, and nurturing campaigns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
          <path d="M2 12.5c1-4.5 5-8 9.5-8a9.5 9.5 0 0 1 9.5 9.5 9.41 9.41 0 0 1-4 7.7"></path>
          <path d="M14 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
          <path d="M16 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
          <path d="M21 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
          <path d="M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        </svg>
      ),
      href: "/services#marketing-automation"
    },
    {
      title: "Lead Generation",
      description: "Targeted campaigns that drive qualified leads to your business using SEO, paid ads, and local strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      href: "/services#lead-generation"
    },
    {
      title: "Business Tools",
      description: "Streamlined CRM systems, booking tools, and management software to run your service business efficiently.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      href: "/services#business-tools"
    }
  ];

  return (
    <div ref={servicesRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">How We Help</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll delay-1">
            We provide end-to-end solutions to help local service businesses attract more customers, 
            streamline operations, and grow their revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className={`animate-on-scroll delay-${index + 1}`}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
