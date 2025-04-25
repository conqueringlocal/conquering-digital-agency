
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/shared/Button";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

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

  const blogPosts = [
    {
      id: 1,
      title: "5 Website Must-Haves for Service Businesses in 2023",
      excerpt: "Learn the essential elements every service business website needs to convert visitors into customers.",
      category: "marketing-tips",
      date: "April 15, 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 2,
      title: "How Smith Electric Increased Bookings by 40%",
      excerpt: "A detailed case study on how we helped a local electrician transform their digital presence.",
      category: "success-story",
      date: "March 22, 2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 3,
      title: "The Power of AI in Local Marketing Automation",
      excerpt: "Discover how AI tools like FlowTrack and CloseGPT are changing the game for service businesses.",
      category: "automation-tools",
      date: "February 10, 2023",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 4,
      title: "Local SEO: The Ultimate Guide for Service Businesses",
      excerpt: "A complete walkthrough of optimizing your online presence for local search results.",
      category: "marketing-tips",
      date: "January 28, 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 5,
      title: "From Struggling to Thriving: Davis Painting's Digital Transformation",
      excerpt: "How a traditional painting company embraced digital marketing and saw 53% more leads.",
      category: "success-story",
      date: "December 12, 2022",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1500",
    },
    {
      id: 6,
      title: "CloseGPT Update: New Features for Service Businesses",
      excerpt: "Explore the latest features in CloseGPT that help service businesses close more deals.",
      category: "automation-tools",
      date: "November 5, 2022",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500",
    },
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "marketing-tips", name: "Marketing Tips" },
    { id: "success-story", name: "Success Stories" },
    { id: "automation-tools", name: "Automation Tools" },
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Blog</h1>
              <p className="text-xl mb-8 animate-on-scroll delay-1">
                Insights, tips, and success stories to help your local service business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Category Filter */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll delay-${index % 3 + 1}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="bg-gray-100 text-sm px-3 py-1 rounded-full capitalize">
                        {post.category.replace(/-/g, ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button href={`/blog/${post.id}`} variant="text" className="w-full text-center justify-center">
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-2">No posts found</h3>
                <p className="text-gray-600">
                  We don't have any posts in this category yet. Please check back later or explore other categories.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-gray-600 mb-8 animate-on-scroll delay-1">
                Get the latest marketing tips, case studies, and updates delivered directly to your inbox.
              </p>
              <form className="flex flex-col md:flex-row gap-2 max-w-lg mx-auto animate-on-scroll delay-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-sm text-gray-500 mt-4 animate-on-scroll delay-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
