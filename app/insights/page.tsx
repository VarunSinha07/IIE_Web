"use client";
import PageHeader from "../components/PageHeader";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const Insights = () => {
  const handleReadMore = () => {
    window.open("/public/lovable-uploads/newsletter.pdf", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Insights"
        subtitle="Stay updated with the latest trends, case studies, and success stories from the world of entrepreneurship and innovation."
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">IIE Newsletter</h2>
              <Separator className="my-4" />
              <p className="text-gray-700 mb-6">
                Our quarterly newsletter brings you the latest innovations,
                success stories, and upcoming events from the IIE Centre at
                SRMIST Ramapuram. Discover how our incubated startups are
                transforming industries, learn from expert insights, and stay
                informed about entrepreneurial opportunities.
              </p>
              <div className="flex justify-end">
                <Button
                    style={{ backgroundColor: "#0F172A", color: "white" }}
                  onClick={handleReadMore}
                  className="flex items-center gap-2"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">
                  Latest Startup Success
                </h3>
                <p className="text-gray-700">
                  Read about how our incubated startup EcoTech Solutions secured
                  ₹2.5 crore funding to scale their water conservation
                  technology across South India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">
                  Innovation Trends 2025
                </h3>
                <p className="text-gray-700">
                  Explore our analysis of emerging technology trends that will
                  shape the entrepreneurial landscape in the coming year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Mentor Spotlight</h3>
                <p className="text-gray-700">
                  Learn from industry veteran Dr. Priya Sharma as she shares her
                  journey from researcher to successful entrepreneur in
                  healthcare innovation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">
                  Student Innovation Challenge
                </h3>
                <p className="text-gray-700">
                  Check out the winning projects from this year&apos;s student
                  innovation challenge and how they&apos;re being developed further
                  at IIE.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insights;
