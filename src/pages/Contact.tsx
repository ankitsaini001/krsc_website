import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>();
  const [text] = useTypewriter({
    words: ["Let's Talk", "Say Hello!", "Connect With Us"],
    loop: 0,
    delaySpeed: 2000,
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        reset();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      toast.error("❌ Failed to send. Try again.");
      console.error("Contact form error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-16 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl transition-all duration-300">
        
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-blue-700">{text}</h2>
          <p className="text-gray-700 text-lg">
            Whether you have a question or just want to say hi, our inbox is always open.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <div className="flex items-center">
              <Phone className="text-blue-500 mr-3" />
              <a href="tel:+919654945454" className="hover:underline font-semibold">+91-9654945454</a>
            </div>
            <div className="flex items-center">
              <Mail className="text-blue-500 mr-3" />
              <a href="mailto:sales@krcs.in" className="hover:underline font-semibold">sales@krcs.in</a>
            </div>
              <div className="flex items-center">
                <Linkedin className="text-blue-500 mr-3" />
                <a href="https://www.linkedin.com/company/krcs-in/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B29xKKgYWRHqxIHwoRHpG7Q%3D%3D" className="hover:underline font-semibold">linkedin/krcs</a>
              </div>
            <div className="flex items-start">
              <MapPin className="text-blue-500 mr-3 mt-1" />
              <span className="font-semibold">Sco-13, First Floor, Sector 15 Part-2, Gurgaon</span>
            </div>
          </div>
        </motion.div>

        {/* Form Panel */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg space-y-6"
        >
          {['name', 'email', 'message'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {field !== 'message' ? (
                <input
                  {...register(field as keyof FormValues, {
                    required: `${field[0].toUpperCase() + field.slice(1)} is required`,
                    ...(field === 'email' && {
                      pattern: {
                        value: /^\S+@\S+$/,
                        message: "Invalid email address"
                      }
                    })
                  })}
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
              <label
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm 
                  peer-focus:text-blue-600 bg-white px-1"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {errors[field as keyof FormValues] && (
                <p className="text-sm text-red-600 mt-1">
                  {(errors[field as keyof FormValues] as any)?.message}
                </p>
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold flex justify-center items-center transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <AiOutlineCheckCircle className="mr-2 text-xl" /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};
