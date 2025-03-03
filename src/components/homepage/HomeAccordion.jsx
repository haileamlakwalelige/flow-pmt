"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, CheckSquare, Trello, BarChart2, Workflow, Clock, Users, Plug, Search } from "lucide-react"

const accordionItems = [
  { icon: CheckSquare, title: "Task Management", content: "Create, assign, and track tasks with ease. Set priorities, due dates, and dependencies.", color: "#4ade80" },
  { icon: Trello, title: "Kanban Boards", content: "Visualize your workflow with customizable boards. Drag and drop tasks between columns.", color: "#2563eb" },
  { icon: BarChart2, title: "Agile Reporting", content: "Generate burndown charts, velocity reports, and sprint reports for agile teams.", color: "#f472b6" },
  { icon: Workflow, title: "Customizable Workflows", content: "Design and implement workflows that match your team's unique processes.", color: "#fbbf24" },
  { icon: Clock, title: "Time Tracking", content: "Log time spent on tasks and projects. Generate timesheets and billing reports.", color: "#06b6d4" },
  { icon: Users, title: "Team Collaboration", content: "Comment on tasks, mention team members, and share files in real-time.", color: "#8b5cf6" },
  { icon: Plug, title: "Integration Ecosystem", content: "Connect with your favorite tools like Slack, GitHub, and Google Workspace.", color: "#ec4899" },
  { icon: Search, title: "Advanced Search", content: "Find anything quickly with powerful search capabilities and saved filters.", color: "#f97316" },
]

const HomeAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <div className="w-full max-w-5xl mx-auto text-white  pb-20">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10">Project Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accordionItems.map((item, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ backgroundColor: expandedIndex === index ? `${item.color}20` : "#1a1a2e" }}
            transition={{ duration: 0.3 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <motion.header
              initial={false}
              animate={{ color: expandedIndex === index ? item.color : "#ffffff" }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-opacity-20"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <motion.div animate={{ rotate: expandedIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-5 h-5" style={{ color: item.color }} />
              </motion.div>
            </motion.header>

            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <motion.div
                    variants={{ collapsed: { y: -10 }, open: { y: 0 } }}
                    transition={{ duration: 0.3 }}
                    className="p-4 text-gray-300"
                  >
                    {item.content}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HomeAccordion
