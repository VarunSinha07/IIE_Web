import {
  CheckCircle,
  Users,
  Lightbulb,
  Building,
  Award,
} from "lucide-react";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { Card, CardContent } from "../components/ui/card";

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  imageUrl?: string;
}

function TeamMember({ name, position, description }: TeamMemberProps) {
    return (
      <div style={{
        background: "#fff",
        padding: "4rem",
        borderRadius: "0.75rem",
        textAlign: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Circle Initial */}
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "linear-gradient(to right, #60a5fa, #3b82f6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#fff",
          marginBottom: "1rem"
        }}>
          {name[0]}
        </div>
  
        {/* Name */}
        <h4 style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "#1e3a8a",
          marginBottom: "0.25rem"
        }}>{name}</h4>
  
        {/* Position */}
        <p style={{
          color: "#2563eb",
          fontWeight: "bold",
          borderBottom: "3px solid #3b82f6",
          paddingBottom: "0.25rem",
          marginBottom: "0.75rem"
        }}>{position}</p>
  
        {/* Description */}
        <p style={{ color: "#374151" }}>{description}</p>
      </div>
    );
  }
  


const AboutUs = () => {
  const leadership = [
    {
      name: "Eeshwar S",
      position: "Lead",
      description:
        "Leads the IIE Cell, fostering innovation and entrepreneurial growth.",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Swapna M",
      position: "President",
      description:
        "Leads the IIE Cell, fostering innovation and entrepreneurial growth.",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Pushkal Pratap Singh",
      position: "Vice President",
      description:
        "Drives strategic initiatives and ensures operational excellence.",
      imageUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const coreTeam = [
    {
      name: "Shreyansh Jain",
      position: "Head - Technical & Special Initiatives",
      description: "Leads technical projects and special initiatives.",
    },
    {
      name: "Adrika Shukla",
      position: "Head - Finance",
      description: "Manages financial planning and funding strategies.",
    },
    {
      name: "Sounak Dutta",
      position: "Head - Admin",
      description: "Ensures smooth administrative operations.",
    },
    {
      name: "Sanjana J",
      position: "Head - Operations",
      description: "Manages event execution and day-to-day activities.",
    },
    {
      name: "Rohith",
      position: "Head - Creatives",
      description:
        "Oversees design and content to deliver impactful branding strategies.",
    },
    {
      name: "G Devanand Singan",
      position: "Head - Sponsorship",
      description: "Builds partnerships and secures sponsorships.",
    },
  ];

  return (
    <div className=" flex flex-col min-h-screen">
        <PageHeader
            title="About Us"
            subtitle="Learn about the Innovation, Incubation, and Entrepreneurship Cell at SRMIST Ramapuram"
            className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50"
        />

      <main className="flex-grow pt-24">
        {/* Hero Section with Image */}
        <section className="relative py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md:w-1/2 z-10">
                <h2
                  style={{ color: "#1E3A8A" }}
                  className="text-3xl font-bold mb-6 text-blue-900"
                >
                  Who We Are
                </h2>
                <p className="text-gray-700 mb-4 text-lg">
                  At the Innovation, Incubation, and Entrepreneurship (IIE)
                  Cell, we are a passionate, student-driven initiative committed
                  to nurturing innovative minds and entrepreneurial spirits. Our
                  mission is to transform ideas into impactful ventures through
                  mentorship, structured programs, and access to vital
                  resources.
                </p>
                <p className="text-gray-700 mb-8">
                  Rooted in the inspiration drawn from global innovation hubs,
                  we aim to bridge the academic and industrial worlds, fostering
                  an environment where creativity thrives, ideas flourish, and
                  startups grow into sustainable enterprises.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div
                    style={{ backgroundColor: "#EFF6FF" }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full"
                  >
                    <CheckCircle
                      style={{ color: "#3E76EE" }}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span
                      style={{ color: "#3E76EE" }}
                      className="text-blue-800 font-medium"
                    >
                      Innovation
                    </span>
                  </div>
                  <div
                    style={{ backgroundColor: "#FAF5FF" }}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full"
                  >
                    <CheckCircle
                      style={{ color: "#7E32A8" }}
                      className="h-5 w-5 text-purple-600"
                    />
                    <span
                      style={{ color: "#7E32A8" }}
                      className="text-purple-800 font-medium"
                    >
                      Collaboration
                    </span>
                  </div>
                  <div
                    style={{ backgroundColor: "#F0FDF4" }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full"
                  >
                    <CheckCircle
                      style={{ color: "#16A34A" }}
                      className="h-5 w-5 text-green-600"
                    />
                    <span
                      style={{ color: "#166534" }}
                      className="text-green-800 font-medium"
                    >
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div style={{backgroundColor: "#C2D3F6"}}className="absolute -right-4 -bottom-4 w-full h-full bg-gradient-to-tr from-blue-200 to-purple-200 rounded-xl"></div>
                
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Innovation Team Collaboration"
                  className="relative z-10 rounded-xl w-full h-auto object-cover shadow-lg"
                  width={1170}
                  height={780}
                />
                </div>
          </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2
              style={{ color: "#1E3A8A" }}
              className="text-3xl font-bold mb-4 text-center text-blue-900"
            >
              Our Core Values
            </h2>
            <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto">
              The principles that guide our work and shape our community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div
          style={{
            padding: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #BFDBFE",
            background:
              "linear-gradient(to bottom right, #EFF6FF, #FFFFFF)",
          }}
              >
          <div
            style={{
              backgroundColor: "#BFDBFE",
              padding: "1.5rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              width: "5rem",
              height: "5rem",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lightbulb
              style={{ height: "2.5rem", width: "2.5rem", color: "#3B82F6" }}
            />
          </div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#1E3A8A",
              textAlign: "center",
            }}
          >
            Innovation
          </h3>
          <p style={{ color: "#374151", textAlign: "center" }}>
            Exploring new ideas and pushing boundaries to create impactful
            solutions.
          </p>
              </div>

              <div
          style={{
            padding: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #E9D5FF",
            background:
              "linear-gradient(to bottom right, #FAF5FF, #FFFFFF)",
          }}
              >
          <div
            style={{
              backgroundColor: "#E9D5FF",
              padding: "1.5rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              width: "5rem",
              height: "5rem",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Users
              style={{ height: "2.5rem", width: "2.5rem", color: "#7C3AED" }}
            />
          </div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#6B21A8",
              textAlign: "center",
            }}
          >
            Collaboration
          </h3>
          <p style={{ color: "#374151", textAlign: "center" }}>
            Working together to achieve shared goals and foster a
            supportive community.
          </p>
              </div>

              <div
          style={{
            padding: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #D1FAE5",
            background:
              "linear-gradient(to bottom right, #F0FDF4, #FFFFFF)",
          }}
              >
          <div
            style={{
              backgroundColor: "#D1FAE5",
              padding: "1.5rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              width: "5rem",
              height: "5rem",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Award
              style={{ height: "2.5rem", width: "2.5rem", color: "#10B981" }}
            />
          </div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#065F46",
              textAlign: "center",
            }}
          >
            Excellence
          </h3>
          <p style={{ color: "#374151", textAlign: "center" }}>
            Striving for the highest quality in everything we do, from
            ideas to execution.
          </p>
              </div>
            </div>
          </div>
        </section>

        {/* IIE Ecosystem Section */}
        <section className="py-16 px-4 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 -ml-40 -mb-40"></div>
          </div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <h2
              style={{ color: "#1E3A8A" }}
              className="text-3xl font-bold mb-2 text-center text-blue-900"
            >
              IIE Ecosystem
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              We are an integral part of an ecosystem that connects academia,
              industry, and government
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4">
              {/* Academia Card */}
              <Card
              style={{
                background:
                "linear-gradient(to bottom right, #f0fdf4, #d1fae5)",
                border: "none",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
                padding: "1.5rem",
              }}
              >
              <CardContent
                style={{
                paddingTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                }}
              >
                <div
                style={{
                  background: "white",
                  padding: "1rem",
                  borderRadius: "9999px",
                  marginBottom: "1rem",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                }}
                >
                <Building
                  style={{
                  height: "2rem",
                  width: "2rem",
                  color: "#059669",
                  }}
                />
                </div>
                <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                  color: "#065f46",
                }}
                >
                Academia
                </h3>
                <p style={{ color: "#374151" }}>
                Connecting with educational resources and research expertise
                to foster innovative learning and development.
                </p>
              </CardContent>
              </Card>

              {/* Industry Card */}
              <Card
              style={{
                background:
                "linear-gradient(to bottom right, #fff7ed, #fef3c7)",
                border: "none",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
                padding: "1.5rem",
              }}
              >
              <CardContent
                style={{
                paddingTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                }}
              >
                <div
                style={{
                  background: "white",
                  padding: "1rem",
                  borderRadius: "9999px",
                  marginBottom: "1rem",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                }}
                >
                <Lightbulb
                  style={{
                  height: "2rem",
                  width: "2rem",
                  color: "#ea580c",
                  }}
                />
                </div>
                <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                  color: "#9a3412",
                }}
                >
                Industry
                </h3>
                <p style={{ color: "#374151" }}>
                Partnering with businesses to provide real-world insights,
                challenges, and opportunities for practical innovation.
                </p>
              </CardContent>
              </Card>

              {/* Government Card */}
              <Card
              style={{
                background:
                "linear-gradient(to bottom right, #eff6ff, #ccfbf1)",
                border: "none",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
                padding: "1.5rem",
              }}
              >
              <CardContent
                style={{
                paddingTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                }}
              >
                <div
                style={{
                  background: "white",
                  padding: "1rem",
                  borderRadius: "9999px",
                  marginBottom: "1rem",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                }}
                >
                <Users
                  style={{
                  height: "2rem",
                  width: "2rem",
                  color: "#2563eb",
                  }}
                />
                </div>
                <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                  color: "#1e40af",
                }}
                >
                Government
                </h3>
                <p style={{ color: "#374151" }}>
                Collaborating with government bodies to align with policy
                initiatives and access support for innovation projects.
                </p>
              </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Team Collaboration"
                className="w-full h-40 object-cover rounded-lg mb-6"
                width={1170}
                height={160}
              />
              <p className="text-gray-700 text-center">
                At our core, we embrace curiosity, inclusivity, and
                collaboration. By fostering a culture of shared learning and
                creativity, we empower individuals to challenge the status quo
                and explore uncharted possibilities, shaping the leaders and
                innovators of tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* Team Leadership Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-5xl">
            <h2
              style={{ color: "#1E3A8A" }}
              className="text-3xl font-bold mb-2 text-center text-blue-900"
            >
              Team Leadership
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Our leadership team comprises visionaries and experienced
              professionals dedicated to nurturing talent and fostering
              innovation. Meet the team that drives IIE's mission forward.
            </p>
            {/* Leadership Grid */}

            <div style={{ marginBottom: "3rem" }}>
              {/* Heading */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#1e40af", // text-blue-800
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    height: "4px",
                    flexGrow: 1,
                    background:
                      "linear-gradient(to right, #3b82f6, transparent)",
                    marginRight: "1rem",
                  }}
                ></div>
                Leadership
                <div
                  style={{
                    height: "4px",
                    flexGrow: 1,
                    background:
                      "linear-gradient(to left, #3b82f6, transparent)",
                    marginLeft: "1rem",
                  }}
                ></div>
              </h3>

              {/* Grid Layout */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                
                {leadership.map((member, index) => (
                  <div
                    key={index}
                    style={{
                      background: "white",
                      padding: "2rem",
                      borderRadius: "1rem",
                      textAlign: "center",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {/* Image */}
                    {/* <img
                      src={member.imageUrl}
                      alt={member.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        margin: "0 auto 1rem",
                        border: "3px solid #e0e7ff",
                      }}
                    /> */}

                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={100}
                      height={100}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        margin: "0 auto 1rem",
                        border: "3px solid #e0e7ff",
                      }}
                    />

                    
                    {/* Name */}
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        marginBottom: "0.25rem",
                        color: "#1e3a8a",
                      }}
                    >
                      {member.name}
                    </h4>

                    {/* Underline role */}
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#2563eb",
                        borderBottom: "3px solid #3b82f6",
                        display: "inline-block",
                        paddingBottom: "0.25rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {member.position}
                    </p>

                    {/* Description */}
                    <p style={{ color: "#374151" }}>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "3rem" }}>
              {/* Heading */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#1e40af",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    height: "4px",
                    flexGrow: 1,
                    background:
                      "linear-gradient(to right, #3b82f6, transparent)",
                    marginRight: "1rem",
                  }}
                ></div>
                Core Team
                <div
                  style={{
                    height: "4px",
                    flexGrow: 1,
                    background:
                      "linear-gradient(to left, #3b82f6, transparent)",
                    marginLeft: "1rem",
                  }}
                ></div>
              </h3>

              {/* Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {coreTeam.map((member, index) => (
                  <TeamMember
                    key={index}
                    name={member.name}
                    position={member.position}
                    description={member.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
