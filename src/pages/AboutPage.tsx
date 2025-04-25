
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/shared/Button";

const AboutPage = () => {
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

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex has over 15 years of experience in digital marketing for service businesses.",
    },
    {
      name: "Sarah Williams",
      role: "Head of Operations",
      bio: "Sarah ensures all client projects are delivered on time and to the highest standard.",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Michael builds custom websites and integrations that drive results for our clients.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      bio: "Emily creates data-driven marketing strategies that generate leads for our clients.",
    },
  ];

  const values = [
    {
      title: "Results-Focused",
      description: "We measure our success by the results we generate for our clients.",
    },
    {
      title: "Transparency",
      description: "We believe in complete transparency in our processes, pricing, and reporting.",
    },
    {
      title: "Innovation",
      description: "We continually adopt new technologies and strategies to give our clients an edge.",
    },
    {
      title: "Partnership",
      description: "We see ourselves as partners in our clients' success, not just service providers.",
    },
  ];

  const partners = [
    { name: "FlowTrack", logo: "FT" },
    { name: "CloseGPT", logo: "CG" },
    { name: "Zapier", logo: "ZA" },
    { name: "Google", logo: "GO" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">About Conquering Local</h1>
              <p className="text-xl mb-8 animate-on-scroll delay-1">
                We're on a mission to help local service businesses thrive in the digital age
                through modern marketing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 animate-on-scroll delay-1">
                At Conquering Local, our mission is to level the playing field for local service businesses
                by providing them with enterprise-level marketing tools and strategies at an affordable price.
                We believe that every service business, regardless of size, deserves access to the best
                digital marketing resources.
              </p>
              <div className="animate-on-scroll delay-2">
                <Button href="/contact">Get to Know Us</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center animate-on-scroll">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={member.name} className={`bg-white p-6 rounded-lg shadow-md animate-on-scroll delay-${index + 1}`}>
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center animate-on-scroll">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className={`bg-gray-50 p-6 rounded-lg border-l-4 border-primary animate-on-scroll delay-${index + 1}`}>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Platforms */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center animate-on-scroll">Partner Platforms</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <div key={partner.name} className={`bg-white p-6 rounded-lg shadow-md min-w-[150px] text-center animate-on-scroll delay-${index + 1}`}>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{partner.logo}</span>
                  </div>
                  <h3 className="font-bold">{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Ready to Work With Us?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 animate-on-scroll delay-1">
              Let's discuss how our team can help your service business grow with modern
              websites, marketing automation, and local lead generation strategies.
            </p>
            <div className="animate-on-scroll delay-2">
              <Button href="/contact" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Schedule a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
