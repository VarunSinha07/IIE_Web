import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: "SRM Institute of Science and Technology, Ramapuram Campus, Chennai, Tamil Nadu 600089"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: "+91 44 4392 3000"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: "iie@srmist.edu.in"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM"
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {contactDetails.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{
              height: "3rem",
              width: "3rem",
              borderRadius: "50%",
              backgroundColor: "#bfdbfe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563eb",
              marginRight: "1rem"
            }}
          >
            {item.icon}
          </div>
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600" }}>{item.title}</h3>
            <p style={{ color: "#4b5563" }}>{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;