"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ApplicationProcess from "../components/ApplicationProcess";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Link from "next/link";
import { Button } from "../components/ui/button";
const ApplyNow = () => {
  const [activeTab, setActiveTab] = useState("incubation");

  const incubationSteps = [
    {
      title: "Preliminary Application",
      description:
        "Fill out the online form with basic details about the idea or startup. Include information such as the problem being addressed, the proposed solution, and the target audience.",
    },
    {
      title: "Screening Process",
      description:
        "The IIE team will evaluate your application based on innovation, feasibility, and market potential. Shortlisted applicants will be invited for a pitch presentation.",
    },
    {
      title: "Pitch Presentation",
      description:
        "Present your idea to a panel of experts, including mentors, investors, and domain specialists. Focus on the unique value proposition and scalability of your idea.",
    },
    {
      title: "Onboarding",
      description:
        "Selected startups will be inducted into the incubation program, gaining access to mentorship, resources, and facilities.",
    },
  ];

  const innovatorSteps = [
    {
      title: "Submit Your Profile",
      description:
        "Share your academic background, areas of expertise, and achievements. Highlight your passion for solving real-world challenges through innovation.",
    },
    {
      title: "Proposal Submission",
      description:
        "Submit a brief proposal outlining your idea, concept, or research project. Detail how your innovation addresses a specific problem.",
    },
    {
      title: "Evaluation and Feedback",
      description:
        "The IIE panel will review your proposal, offering suggestions for improvement.",
    },
    {
      title: "Collaboration and Development",
      description:
        "If selected, work collaboratively with the IIE team, mentors, and peers to refine and scale your innovation.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Apply Now"
        subtitle="Join the IIE ecosystem and transform your innovative ideas into reality"
      />

      <section className="py-16 px-4" id="application-process">
        <div className="container mx-auto max-w-6xl">
          
          <Tabs
            defaultValue="incubation"
            className="max-w-4xl mx-auto"
            value={activeTab}
            onValueChange={setActiveTab}
            
          >
            <div className="flex justify-center mb-8">
                <TabsList
                style={{
                  backgroundColor: "#F3F4F6",
                  display: "grid",
                  width: "100%",
                  maxWidth: "50rem",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  borderRadius: "0.5rem",
                }}
                >
                <TabsTrigger
                  value="incubation"
                  style={{
                  backgroundColor: activeTab === "incubation" ? "#16A34A" : "#FFFFFF",
                  borderRadius: "0.5rem 0 0 0.5rem",
                  }}
                >
                  Incubation
                </TabsTrigger>
                <TabsTrigger
                  value="innovator"
                  style={{
                  backgroundColor: activeTab === "innovator" ? "#3B82F6" : "#FFFFFF",
                  borderRadius: "0 0.5rem 0.5rem 0",
                  }}
                >
                  Innovator
                </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="incubation" id="incubation">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 style={{ color: "#16A34A" }}className="text-2xl font-bold text-blue-600">
                      Apply for Incubation
                    </h3>
                    <p className="text-gray-600 mt-2 ">
                      Kickstart your entrepreneurial journey with IIE Centre.
                      Gain access to expert mentorship, cutting-edge resources,
                      and a structured ecosystem designed to transform your
                      innovative ideas into thriving startups.
                    </p>
                  </div>
                 
                </div>
                <ApplicationProcess
                  title="Steps to Apply for Incubation"
                  steps={incubationSteps}
                  accentColor="#16A34A"
                />
              
              <Button
                    style={{ backgroundColor: "#16A34A" }}className="bg-blue-600 hover:bg-blue-700 mt-4 md:mt-0 px-6 py-5 h-auto text-white"
                    asChild
                  >
                    <Link href="#apply-incubation">Apply as Incubater</Link>
                  </Button>
                  </div>
            </TabsContent>

            <TabsContent value="innovator" id="innovator">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3  style={{ color: "#3B82F6" }}className="text-2xl font-bold text-purple-600">
                      Apply for Innovator
                    </h3>
                    <p className="text-gray-600 mt-2 ">
                      Join a community of thinkers and creators. Leverage our
                      platform to showcase your ideas, collaborate with
                      like-minded individuals, and contribute to groundbreaking
                      projects.
                    </p>
                  </div>
                  
                </div>
                <ApplicationProcess
                  title="Steps to Apply for Innovator"
                  steps={innovatorSteps}
                  accentColor="#3B82F6"
                />
                <Button
                     style={{ backgroundColor: "#3B82F6" }}className="bg-purple-600 hover:bg-purple-700 mt-4 md:mt-0 px-6 py-5 h-auto text-white"
                    asChild
                  >
                    <Link href="#apply-innovator">Apply as Innovator</Link>
                  </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ApplyNow;
// import React from "react";

// const ApplyNowPage = () => {
//   return (
//     <div className="apply-now-page">
//       {/* <h1 className="page-title">Apply Now</h1> */}
//       <div className="cards-container">
//         {/* Apply for Incubation Card */}
//         <div className="card incubation-card">
//           <h2 style={{ textAlign: "center" }}>Apply for Incubation</h2>
//           <div>
//             Kickstart your entrepreneurial journey with IIE Centre. Gain access
//             to expert mentorship, cutting-edge resources, and a structured
//             ecosystem designed to transform your innovative ideas into thriving
//             startups.
//           </div>
//           <h3><strong>Steps to Apply for Incubation:</strong></h3>
//           <ol>
//             <li>
//               <strong>Preliminary Application:</strong> Fill out the online form
//               with basic details about the idea or startup. Include information
//               such as the problem being addressed, the proposed solution, and
//               the target audience.
//             </li>
//             <li>
//               <strong>Screening Process:</strong> The IIE team will evaluate
//               your application based on innovation, feasibility, and market
//               potential. Shortlisted applicants will be invited for a pitch
//               presentation.
//             </li>
//             <li>
//               <strong>Pitch Presentation:</strong> Present your idea to a panel
//               of experts, including mentors, investors, and domain specialists.
//               Focus on the unique value proposition and scalability of your
//               idea.
//             </li>
//             <li>
//               <strong>Onboarding:</strong> Selected startups will be inducted
//               into the incubation program, gaining access to mentorship,
//               resources, and facilities.
//             </li>
//           </ol>
//           <div className="card-buttons">
//             <button className="apply-Ibutton">Apply Now</button>
//             {/* <button className="learn-more-button">Learn More</button> */}
//           </div>
//         </div>

//         {/* Apply for Innovator Card */}
//         <div className="card innovator-card">
//           <h2 style={{ textAlign: "center" }}>Apply for Innovator</h2>
//           <div >
//             Join a community of thinkers and creators. Leverage our platform to
//             showcase your ideas, collaborate with like-minded individuals, and
//             contribute to groundbreaking projects.
//           </div>
//           <h3><strong>Steps to Apply for Innovator:</strong></h3>
//           <ol>
//             <li>
//               <strong>Submit Your Profile:</strong> Share your academic
//               background, areas of expertise, and achievements. Highlight your
//               passion for solving real-world challenges through innovation.
//             </li>
//             <li>
//               <strong>Proposal Submission:</strong> Submit a brief proposal
//               outlining your idea, concept, or research project. Detail how your
//               innovation addresses a specific problem.
//             </li>
//             <li>
//               <strong>Evaluation and Feedback:</strong> The IIE panel will
//               review your proposal, offering suggestions for improvement.
//             </li>
//             <li>
//               <strong>Collaboration and Development:</strong> If selected, work
//               collaboratively with the IIE team, mentors, and peers to refine
//               and scale your innovation.
//             </li>
//           </ol>
//           <div className="card-buttons">
//             <button className="apply-button">Apply Now</button>
//             {/* <button className="learn-more-button">Learn More</button> */}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ApplyNowPage;
