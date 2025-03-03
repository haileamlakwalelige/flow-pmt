"use client";

import { motion } from "framer-motion";
import { CheckCircle, MoveRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const HomeCallToAction = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-[#0e0e18]/50 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          🚀 Supercharge Your Team’s Productivity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-200"
        >
          Streamline your workflow, track progress, and collaborate seamlessly
          with our powerful project management tool.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 my-6">
          {[
            "Task Management",
            "Team Collaboration",
            "Agile Workflows",
            "Advanced Reporting",
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-2 text-lg"
            >
              <CheckCircle className="text-green-400 w-6 h-6" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => router.push("/sign-in")}
          className="mt-6 px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 rounded text-lg font-semibold hover:rounded-lg shadow-md"
        >
          <div className="flex justify-center items-center">
            Get Started{" "}
            <MoveRightIcon size={15} className="ml-2 animate-bounce-x" />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default HomeCallToAction;
