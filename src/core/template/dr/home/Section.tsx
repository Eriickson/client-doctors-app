import React from "react";

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div>
      <h5 className="font-semibold text-cyan-600">{title}</h5>
      <div className="ml-1">{children}</div>
    </div>
  );
};

export default Section;
