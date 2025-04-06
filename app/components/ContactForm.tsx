"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
    <div style={{ marginBottom: "1rem" }}>
      <Label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Full Name</Label>
      <Input
        id="name"
        name="name"
        placeholder="Your full name"
        required
        value={formData.name}
        onChange={handleChange}
        style={{
        width: "100%",
        padding: "0.75rem",
        border: "1px solid #d1d5db",
        borderRadius: "0.375rem",
        fontSize: "1rem",
        }}
      />
    </div>
    
    <div style={{ marginBottom: "1rem" }}>
      <Label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Email Address</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="your.email@example.com"
        required
        value={formData.email}
        onChange={handleChange}
        style={{
        width: "100%",
        padding: "0.75rem",
        border: "1px solid #d1d5db",
        borderRadius: "0.375rem",
        fontSize: "1rem",
        }}
      />
    </div>
    
    <div style={{ marginBottom: "1rem" }}>
      <Label htmlFor="subject" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Subject</Label>
      <Input
        id="subject"
        name="subject"
        placeholder="How can we help you?"
        required
        value={formData.subject}
        onChange={handleChange}
        style={{
        width: "100%",
        padding: "0.75rem",
        border: "1px solid #d1d5db",
        borderRadius: "0.375rem",
        fontSize: "1rem",
        }}
      />
    </div>
    
    <div style={{ marginBottom: "1rem" }}>
      <Label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Message</Label>
      <Textarea
        id="message"
        name="message"
        placeholder="Type your message here..."
        required
        rows={5}
        value={formData.message}
        onChange={handleChange}
        style={{
        width: "100%",
        padding: "0.75rem",
        border: "1px solid #d1d5db",
        borderRadius: "0.375rem",
        fontSize: "1rem",
        }}
      />
    </div>
      
    <Button 
      type="submit" 
      style={{
        width: "100%",
        backgroundColor: isSubmitting ? "#4b5563" : "#2563eb",
        color: "white",
        padding: "1.5rem",
        height: "auto",
        fontSize: "1rem",
        cursor: isSubmitting ? "not-allowed" : "pointer",
        border: "none",
        borderRadius: "0.375rem",
        transition: "background-color 0.3s",
      }}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </Button>
    </form>
  );
};

export default ContactForm;