'use client'

import { useState } from "react";
import {
  CheckSquare,
  Trello,
  BarChart2,
  Workflow,
  Clock,
  Users,
  Plug,
  Search,
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Task Management",
    description:
      "Create, assign, and track tasks with ease. Set priorities, due dates, and dependencies.",
    color: "#4ade80",
  },
  {
    icon: Trello,
    title: "Kanban Boards",
    description:
      "Visualize your workflow with customizable boards. Drag and drop tasks between columns.",
    color: "#2563eb",
  },
  {
    icon: BarChart2,
    title: "Agile Reporting",
    description:
      "Generate burndown charts, velocity reports, and sprint reports for agile teams.",
    color: "#f472b6",
  },
  {
    icon: Workflow,
    title: "Customizable Workflows",
    description:
      "Design and implement workflows that match your team's unique processes.",
    color: "#4ade80",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Log time spent on tasks and projects. Generate timesheets and billing reports.",
    color: "#2563eb",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Comment on tasks, mention team members, and share files in real-time.",
    color: "#f472b6",
  },
  {
    icon: Plug,
    title: "Integration Ecosystem",
    description:
      "Connect with your favorite tools like Slack, GitHub, and Google Workspace.",
    color: "#4ade80",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Find anything quickly with powerful search capabilities and saved filters.",
    color: "#2563eb",
  },
];

export default function ModernFeatureSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className=" py-4 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#f1f1f1] relative z-10">
          Powerful Features for Seamless Project Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-[#242442] rounded-lg p-6 transition-all duration-300 transform group-hover:-translate-y-2 relative z-10 ${
                  hoveredIndex === index ? "shadow-lg" : ""
                }`}
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? `0 10px 25px -5px ${feature.color}40`
                      : "none",
                }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110`}
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon
                      className={`w-6 h-6 transition-all duration-300`}
                      style={{ color: feature.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f1f1f1] transition-all duration-300 group-hover:text-[#f1f1f1]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#94a3b8] transition-all duration-300 group-hover:text-[#f1f1f1]">
                  {feature.description}
                </p>
              </div>
              {/* Background shape */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg -z-10 transform scale-95 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* Background SVG elements */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#4ade80", stopOpacity: 0.05 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#2563eb", stopOpacity: 0.05 }}
            />
          </linearGradient>
        </defs>
        <circle cx="10%" cy="10%" r="200" fill="url(#grad1)" />
        <circle cx="90%" cy="90%" r="150" fill="url(#grad1)" />
      </svg>
    </section>
  );
}
