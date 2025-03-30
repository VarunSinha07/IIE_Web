import React from "react";
const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto p-4 flex justify-center ">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <form className="mb-6">
            <p className="mb-4">
              For inquiries, collaborations, or feedback, reach out to us:
            </p>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-700 border border-black"
            >
              Submit
            </button>
          </form>
          <p>
            Follow us on our social media channels for updates, announcements,
            and success stories.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
