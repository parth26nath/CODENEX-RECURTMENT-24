import React from "react";
import { Timeline } from "../components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Application Close",
      content: (
        <p className="text-white text-lg md:text-xl font-normal mb-4">
          The application period for the recruitment process has ended.
          <br />
          10 October 2024
        </p>
        
      ),
    },
    {
      title: "Task Assignment",
      content: (
        <p className="text-white text-lg md:text-xl font-normal mb-4">
          Candidates are assigned tasks to complete as part of the recruitment process.
          <br />
           12 October 2024

        </p>
      ),
    },
    {
      title: "Submission of Task",
      content: (
        <p className="text-white text-lg md:text-xl font-normal mb-4">
          The deadline for submitting the assigned tasks.
          <br />
          19 October 2024
        </p>
      ),
    },
    {
      title: "Interview",
      content: (
        <p className="text-white text-lg md:text-xl font-normal mb-4">
          Interviews are conducted with the shortlisted candidates.
          <br />
          22 October 2024
        </p>
      ),
    },
    {
      title: "Result Declaration",
      content: (
        <p className="text-white text-lg md:text-xl font-normal mb-4">
          The results of the recruitment process are announced.
          <br />
          28 October 2024
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <Timeline data={data} />
    </div>
  );
}
