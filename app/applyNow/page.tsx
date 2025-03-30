'use client'; 
import React from "react";

const ApplyNowPage = () => {
  return (
    <div className="apply-now-page">
      {/* <h1 className="page-title">Apply Now</h1> */}
      <div className="cards-container">
        {/* Apply for Incubation Card */}
        <div className="card incubation-card">
          <h2 style={{ textAlign: "center" }}>Apply for Incubation</h2>
          <div>
            Kickstart your entrepreneurial journey with IIE Centre. Gain access
            to expert mentorship, cutting-edge resources, and a structured
            ecosystem designed to transform your innovative ideas into thriving
            startups.
          </div>
          <h3><strong>Steps to Apply for Incubation:</strong></h3>
          <ol>
            <li>
              <strong>Preliminary Application:</strong> Fill out the online form
              with basic details about the idea or startup. Include information
              such as the problem being addressed, the proposed solution, and
              the target audience.
            </li>
            <li>
              <strong>Screening Process:</strong> The IIE team will evaluate
              your application based on innovation, feasibility, and market
              potential. Shortlisted applicants will be invited for a pitch
              presentation.
            </li>
            <li>
              <strong>Pitch Presentation:</strong> Present your idea to a panel
              of experts, including mentors, investors, and domain specialists.
              Focus on the unique value proposition and scalability of your
              idea.
            </li>
            <li>
              <strong>Onboarding:</strong> Selected startups will be inducted
              into the incubation program, gaining access to mentorship,
              resources, and facilities.
            </li>
          </ol>
          <div className="card-buttons">
            <button className="apply-Ibutton">Apply Now</button>
            {/* <button className="learn-more-button">Learn More</button> */}
          </div>
        </div>

        {/* Apply for Innovator Card */}
        <div className="card innovator-card">
          <h2 style={{ textAlign: "center" }}>Apply for Innovator</h2>
          <div >
            Join a community of thinkers and creators. Leverage our platform to
            showcase your ideas, collaborate with like-minded individuals, and
            contribute to groundbreaking projects.
          </div>
          <h3><strong>Steps to Apply for Innovator:</strong></h3>
          <ol>
            <li>
              <strong>Submit Your Profile:</strong> Share your academic
              background, areas of expertise, and achievements. Highlight your
              passion for solving real-world challenges through innovation.
            </li>
            <li>
              <strong>Proposal Submission:</strong> Submit a brief proposal
              outlining your idea, concept, or research project. Detail how your
              innovation addresses a specific problem.
            </li>
            <li>
              <strong>Evaluation and Feedback:</strong> The IIE panel will
              review your proposal, offering suggestions for improvement.
            </li>
            <li>
              <strong>Collaboration and Development:</strong> If selected, work
              collaboratively with the IIE team, mentors, and peers to refine
              and scale your innovation.
            </li>
          </ol>
          <div className="card-buttons">
            <button className="apply-button">Apply Now</button>
            {/* <button className="learn-more-button">Learn More</button> */}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default ApplyNowPage;
