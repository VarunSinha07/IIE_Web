import React from 'react';

const ContactUs = () => {
    return (
        // <div className="container mx-auto p-4">
        //     <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        //     <form className="mb-6">
        //         <p className="mb-4">
        //             For inquiries, collaborations, or feedback, reach out to us:
        //         </p>
        //         <ul className="mb-6">
        //             <li>
        //                 <strong>Email:</strong> contact@yourdomain.com
        //             </li>
        //             <li>
        //                 <strong>Phone:</strong> +1 234 567 890
        //             </li>
        //             <li>
        //                 <strong>Address:</strong> SRM Institute of Science and Technology, Ramapuram
        //             </li>
        //         </ul>
        //         <h2 className="text-xl font-semibold mb-2">Tune In</h2>
        //         <p>
        //             Follow us on our social media channels for updates, announcements, and success stories.
        //         </p>
        //         <div className="mb-4">
        //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        //                 Email
        //             </label>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 name="email"
        //                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                 placeholder="Your Email"
        //             />
        //         </div>
        //         <div className="mb-4">
        //             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        //                 Message
        //             </label>
        //             <textarea
        //                 id="message"
        //                 name="message"
        //                 rows={4}
        //                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                 placeholder="Your Message"
        //             ></textarea>
        //         </div>
        //         <button
        //             type="submit"
        //             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        //         >
        //             Submit
        //         </button>
        //     </form>
        //     <div>
        //         <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        //         <p className="mb-1">
        //             <strong>Phone:</strong> +1 234 567 890
        //         </p>
        //         <p>
        //             <strong>Email:</strong> contact@yourdomain.com
        //         </p>
        //     </div>
        // </div>
        <div className="container mx-auto p-8 mb-64 text-center">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
            For inquiries, collaborations, or feedback, reach out to us:
            </p>
            <p className="mb-6">
            Follow us on our social media channels for updates, announcements, and success stories.
            </p>
            <ul className="mb-6">
            <li className="mb-2">
                <strong>Email:</strong> contact@yourdomain.com
            </li>
            <li className="mb-2">
                <strong>Phone:</strong> +1 234 567 890
            </li>
            <li className="mb-2">
                <strong>Address:</strong> SRM Institute of Science and Technology, Ramapuram
            </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Tune In</h2>
            <p>
            Follow us on our social media channels for updates, announcements, and success stories.
            </p>
        </div>
    );
};

export default ContactUs;