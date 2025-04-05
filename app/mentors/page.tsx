import React from "react";
import { Card, CardContent } from "../components/ui/card";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from "next/image";

// Placeholder data for mentor cards
const mentorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "AI Innovation Lead",
    company: "TechFutures Inc.",
    description: "Expert in machine learning with 15+ years of experience driving AI integration in enterprise solutions.",
    imagePath: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Startup Strategist",
    company: "Venture Growth Partners",
    description: "Serial entrepreneur who has launched 3 successful startups and mentored over 50 early-stage companies.",
    imagePath: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Maya Patel",
    role: "UX Design Director",
    company: "Interface Innovations",
    description: "Award-winning designer specialized in creating intuitive user experiences for emerging technologies.",
    imagePath: "/placeholder.svg",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Blockchain Architect",
    company: "Distributed Systems Co.",
    description: "Pioneer in blockchain applications with focus on sustainable and scalable distributed ledger technologies.",
    imagePath: "/placeholder.svg",
  },
];

const Mentors = () => {
  return (
    <div className="min-h-screen bg-white">
   
      {/* Hero Section */}
      <div style={{ backgroundColor: "#F3F4F6" }}className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Mentors</h1>
          <p className="text-gray-700 max-w-4xl mx-auto text-center">
            Our mentors are seasoned professionals from diverse industries, offering invaluable guidance to help startups navigate challenges and succeed.
          </p>
        </div>
      </div>
      
      {/* Mentors Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorsData.map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all rounded-xl">
                <div className="relative h-64 bg-gray-200">
                  <Image 
                    src={mentor.imagePath} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
                <CardContent className="p-6">
                  <h3  className="font-bold text-xl mb-1">{mentor.name}</h3>
                  <p className="text-[#2563EB] font-medium font-bold">{mentor.role}</p>
                  <p className="text-gray-600 mb-4">{mentor.company}</p>
                  <p className="text-gray-700">{mentor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Learn From Our Mentors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div style={{ backgroundColor: "#DBEAFE" }}className="bg-blue-100 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#2563EB" }}className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Industry Experience</h3>
                <p className="text-gray-700">
                  Gain insights from professionals with decades of real-world experience across multiple sectors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div style={{ backgroundColor: "#DBEAFE" }}className="bg-blue-100 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg"style={{ color: "#2563EB" }} className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Guidance</h3>
                <p className="text-gray-700">
                  Receive tailored advice to overcome specific challenges in your entrepreneurial journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div style={{ backgroundColor: "#DBEAFE" }}className="bg-blue-100 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#2563EB" }}className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Network Access</h3>
                <p className="text-gray-700">
                  Connect with valuable industry contacts and open doors to partnerships and funding opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/apply">
              <Button style={{ backgroundColor: "#2563EB" }} className="hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg">
                Connect With Mentors
              </Button> 
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-6">Mentor Impact</h2>
            <div style={{ backgroundColor: "#2563EB" }} className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <blockquote className="bg-white p-8 rounded-xl shadow-md text-center">
              &quot;The mentorship program at IIE Centre has been transformative for our students. 
              The guidance from industry experts has helped turn promising ideas into viable ventures, 
              creating a lasting impact on our innovation ecosystem.&quot;
            creating a lasting impact on our innovation ecosystem.&quot;
            <footer className="mb-6">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 mx-auto">
                  <Image src="/placeholder.svg" alt="Director" className="w-full h-full object-cover" width={64} height={64} />
                 
                </div>
              </div>
              <cite className="not-italic">
                <span className="font-bold block">Akarshak Bose</span>
                <span className="text-gray-600">Manager, IIE Centre</span>
              </cite>
            </footer>
          </blockquote>
             
            </div>
          </div>
      </div>

     
    
  );
};

export default Mentors;