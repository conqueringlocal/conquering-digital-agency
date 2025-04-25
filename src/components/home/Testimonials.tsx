
import React, { useEffect, useRef } from "react";
import TestimonialCard from "../shared/TestimonialCard";

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "Since working with Conquering Local, our booking rate has increased by 40%. Their website and automation tools have transformed how we do business.",
      author: "John Smith",
      company: "Smith Electric",
      industry: "Electrician",
    },
    {
      quote: "The team at Conquering Local understands the unique challenges we face as a local service business. They've helped us stand out in a competitive market.",
      author: "Sarah Johnson",
      company: "Johnson Plumbing",
      industry: "Plumber",
    },
    {
      quote: "Their marketing automation systems have saved us countless hours and helped us follow up with every lead. Our revenue is up 35% this year!",
      author: "Mike Davis",
      company: "Davis Painting",
      industry: "Painter",
    },
  ];

  const clientLogos = [
    "ABC Electrical",
    "Johnson Plumbing",
    "Davis Painting",
    "Metro HVAC",
    "Smith Roofing",
    "City Landscaping",
  ];

  return (
    <div ref={testimonialsRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Clients Love Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll delay-1">
            Don't just take our word for it. Here's what our clients have to say about working with Conquering Local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`animate-on-scroll delay-${index + 1}`}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                industry={testimonial.industry}
              />
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <h3 className="text-center text-xl text-gray-500 mb-8 animate-on-scroll">Trusted by Service Businesses</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div key={index} className={`animate-on-scroll delay-${index % 5 + 1}`}>
                <div className="bg-gray-100 px-6 py-4 rounded">
                  <div className="text-lg font-bold text-gray-700">{logo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
