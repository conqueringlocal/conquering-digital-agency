
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/shared/Button";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animateOnScroll = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "Custom websites designed to convert visitors into customers.",
      benefits: [
        "Mobile-responsive designs that work on all devices",
        "Fast-loading pages optimized for SEO",
        "User-friendly navigation and clear calls-to-action",
        "Integration with booking and payment systems",
        "Built-in analytics to track performance"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation",
      description: "AI-powered tools that automate customer engagement, follow-up, and nurturing campaigns.",
      benefits: [
        "Automated follow-up sequences for leads",
        "Customer journey mapping and optimization",
        "Email marketing campaigns that convert",
        "AI-powered content creation and scheduling",
        "Integration with FlowTrack & CloseGPT"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: "seo",
      title: "SEO & Local Search Optimization",
      description: "Get found by local customers searching for your services.",
      benefits: [
        "Local SEO strategy tailored to your service area",
        "Google Business Profile optimization",
        "Citation building and management",
        "Review acquisition and management",
        "Local content strategy that drives traffic"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: "paid-ads",
      title: "Paid Advertising",
      description: "Targeted campaigns on Meta, Google, and other platforms to drive qualified leads.",
      benefits: [
        "Strategic campaign planning and execution",
        "Audience targeting and refinement",
        "Ad creative development and testing",
        "Performance tracking and optimization",
        "Regular reporting and insights"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: "reputation",
      title: "Reputation Management",
      description: "Build and maintain a stellar online reputation that drives trust and credibility.",
      benefits: [
        "Review monitoring across all platforms",
        "Automated review request system",
        "Response management for positive and negative reviews",
        "Reputation score tracking and improvement",
        "Crisis management planning"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: "crm",
      title: "CRM & Business Software Integration",
      description: "Streamline your operations with integrated business tools.",
      benefits: [
        "CRM implementation and customization",
        "Team training and adoption support",
        "Workflow automation and optimization",
        "Integration with existing tools and systems",
        "Ongoing support and maintenance"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1500",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Services</h1>
              <p className="text-xl mb-8 animate-on-scroll delay-1">
                Comprehensive digital solutions designed specifically for local service businesses.
                From websites to marketing automation, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {services.map((service, index) => (
              <div 
                id={service.id} 
                key={service.id} 
                className={`mb-24 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-10 items-center`}
              >
                <div className="lg:w-1/2 animate-on-scroll">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    style={{ maxHeight: "400px" }}
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 animate-on-scroll">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6 animate-on-scroll delay-1">{service.description}</p>
                  <h3 className="text-lg font-semibold mb-3 animate-on-scroll delay-2">Benefits:</h3>
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className={`flex items-start animate-on-scroll delay-${i + 3}`}>
                        <span className="text-primary mr-2">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="animate-on-scroll delay-5">
                    <Button href="/contact" size="lg">Book a Call</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Ready to Transform Your Service Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-on-scroll delay-1">
              Let's discuss how our services can help you attract more customers,
              streamline your operations, and grow your business.
            </p>
            <div className="animate-on-scroll delay-2">
              <Button href="/contact" size="lg">Get Started Today</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
