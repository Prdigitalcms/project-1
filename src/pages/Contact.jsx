import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs/emailjs";

import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
   const form = useRef();
  const [isSent, setIsSent] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID, 
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          // toast.success("Message sent successfully! ✅", {
          //   position: "top-right",
          //   autoClose: 3000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
        },
        (error) => {
          console.error("Error sending message:", error);
          // toast.error("Failed to send message. Please try again.", {
          //   position: "top-right",
          //   autoClose: 3000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   theme: "dark",
          // });
        }
      );
  };
  console.log(form.current);
  

  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Can't find what you're looking for? Send your question to our
            Support team
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-700 dark:text-gray-400">
              prdigitalcms@gmail.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl text-center"
          >
            <Phone className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Call Us: 7366042410</h3>
            <p className="text-gray-700 dark:text-gray-400">
              Monday-Friday: 10am-6pm (ET)
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              Saturday-Sunday: 12pm-7pm (ET)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl text-center"
          >
            <MessageSquare className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-700 dark:text-gray-400">
              Available during business hours
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
