"use client";

import {
  FolderPlus,
  UserPlus,
  GitBranch,
  ClipboardList,
  BarChart,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const workflowSteps = [
  {
    icon: FolderPlus,
    title: "Create Project",
    description: "Set up your project and define its scope",
    color: "#4ade80",
  },
  {
    icon: UserPlus,
    title: "Add Team Members",
    description: "Invite and assign roles to your team",
    color: "#2563eb",
  },
  {
    icon: GitBranch,
    title: "Set Up Workflow",
    description: "Customize stages to fit your process",
    color: "#f472b6",
  },
  {
    icon: ClipboardList,
    title: "Assign Tasks",
    description: "Create and delegate tasks to team members",
    color: "#4ade80",
  },
  {
    icon: BarChart,
    title: "Track Progress",
    description: "Monitor task completion and project milestones",
    color: "#2563eb",
  },
  {
    icon: TrendingUp,
    title: "Analyze & Improve",
    description: "Review performance and optimize workflows",
    color: "#f472b6",
  },
];

export default function HomeHow() {
  const [hoveredIndex, setHoveredIndex] = useState();

  return (
    <section className=" py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#f1f1f1] relative z-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Vertical timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4ade80] via-[#2563eb] to-[#f472b6] transform -translate-x-1/2" />

          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:row-start-2"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-[#242442] rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? `0 10px 25px -5px ${step.color}40`
                      : "none",
                }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4`}
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon
                      className={`w-6 h-6`}
                      style={{ color: step.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f1f1f1]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#94a3b8]">{step.description}</p>
              </div>
              {/* Timeline dot */}
              <div
                className={`hidden md:block absolute top-1/2 ${
                  index % 2 === 0
                    ? "right-0 translate-x-1/2"
                    : "left-0 -translate-x-1/2"
                } w-4 h-4 rounded-full bg-[#242442] border-2 transform -translate-y-1/2 transition-all duration-300`}
                style={{
                  borderColor: step.color,
                  boxShadow:
                    hoveredIndex === index ? `0 0 15px ${step.color}` : "none",
                }}
              />
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
              style={{ stopColor: "#4ade80", stopOpacity: 0.1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#2563eb", stopOpacity: 0.1 }}
            />
          </linearGradient>
        </defs>
        <circle cx="5%" cy="5%" r="50" fill="url(#grad1)" />
        <circle cx="95%" cy="95%" r="100" fill="url(#grad1)" />
      </svg>
    </section>
  );
}
