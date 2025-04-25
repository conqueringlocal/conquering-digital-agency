
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/shared/Button";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0);

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

  const portfolioItems = [
    {
      id: 1,
      title: "Smith Electric",
      category: "electrician",
      description: "Complete website redesign and lead generation system for a growing electrical company.",
      results: "40% increase in booking rate, 65% increase in organic traffic",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 2,
      title: "Johnson Plumbing",
      category: "plumber",
      description: "Implemented marketing automation and reputation management system for a 20-year-old plumbing business.",
      results: "35% increase in positive reviews, 28% reduction in no-show appointments",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 3,
      title: "Davis Painting",
      category: "painter",
      description: "Developed a comprehensive digital marketing strategy including website, SEO, and paid advertising.",
      results: "53% increase in quote requests, 42% decrease in cost per lead",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 4,
      title: "Metro HVAC",
      category: "hvac",
      description: "Built a custom booking system integrated with their CRM and implemented local SEO strategy.",
      results: "72% increase in booked appointments, 45% increase in average job value",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 5,
      title: "City Landscaping",
      category: "landscaper",
      description: "Redesigned website with visual portfolio and implemented seasonal marketing campaigns.",
      results: "58% increase in qualified leads, 30% growth in business during off-season months",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 6,
      title: "West Coast Roofing",
      category: "roofer",
      description: "Created a comprehensive lead generation system focusing on storm damage repair.",
      results: "63% increase in emergency repair calls, 47% increase in revenue",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1500",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "electrician", name: "Electricians" },
    { id: "plumber", name: "Plumbers" },
    { id: "painter", name: "Painters" },
    { id: "hvac", name: "HVAC" },
    { id: "landscaper", name: "Landscapers" },
    { id: "roofer", name: "Roofers" },
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Portfolio</h1>
              <p className="text-xl mb-8 animate-on-scroll delay-1">
                Explore our work with local service businesses across various industries.
                See how we've helped them grow with modern websites and marketing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Filter */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll delay-${index % 3 + 1}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="bg-gray-100 text-sm px-3 py-1 rounded-full capitalize">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-1">Results:</h4>
                      <p className="text-gray-700">{item.results}</p>
                    </div>
                    <Button href={`/portfolio/${item.id}`} variant="text" className="w-full text-center justify-center">
                      View Case Study
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-gray-600">
                  We don't have any projects in this category yet. Please check back later or explore other categories.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Want Results Like These?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 animate-on-scroll delay-1">
              Let's discuss how we can help your service business achieve similar or better results
              with our proven digital marketing strategies.
            </p>
            <div className="animate-on-scroll delay-2">
              <Button href="/contact" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Start Your Success Story
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
