interface Step {
  title: string;
  description: string;
}

interface ApplicationProcessProps {
  title: string;
  steps: Step[];
  className?: string;
  accentColor?: string;
}

const ApplicationProcess = ({
  title,
  steps,
  className = "",
  accentColor = "bg-blue-600",
}: ApplicationProcessProps) => {
  return (
    <div className={`py-8 ${className}`}>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div
                className={`rounded-full flex items-center justify-center w-8 h-8 ${accentColor} text-white`}
                style={{ backgroundColor: accentColor }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  style={{ color: "white" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              {index < steps.length - 1 && (
                <div style={{ backgroundColor:"#E5E7EB"}}className="h-full w-0.5 bg-gray-200 my-1"></div>
              )}
            </div>  
            <div className="pt-1 pb-8">
              <h4 className="text-lg font-medium mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProcess;
