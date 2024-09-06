import React from "react";
import { Timeline } from "../components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Application Close",
      content: (
        <p className="text-white text-xs md:text-sm font-normal mb-4">
          The application period for the recruitment process has ended.
        </p>
      ),
    },
    {
      title: "Task Assignment",
      content: (
        <p className="text-white text-xs md:text-sm font-normal mb-4">
          Candidates are assigned tasks to complete as part of the recruitment process.
        </p>
      ),
    },
    {
      title: "Submission of Task",
      content: (
        <p className="text-white text-xs md:text-sm font-normal mb-4">
          The deadline for submitting the assigned tasks.
        </p>
      ),
    },
    {
      title: "Interview",
      content: (
        <p className="text-white text-xs md:text-sm font-normal mb-4">
          Interviews are conducted with the shortlisted candidates.
        </p>
      ),
    },
    {
      title: "Result Declaration",
      content: (
        <p className="text-white text-xs md:text-sm font-normal mb-4">
          The results of the recruitment process are announced.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-dark-blue text-white">
      <Timeline data={data} />
    </div>
  );
}
