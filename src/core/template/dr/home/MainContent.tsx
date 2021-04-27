import React from "react";

import { useSelector } from "@/store";

import { StarComponents } from "@/components";
import Section from "./Section";

const MainContent: React.FC = () => {
  const { profileDoctor } = useSelector(store => store.doctor);

  return (
    <div className="p-5 border">
      <Section title="Puntuaciones">
        <div className="divide-y">
          {profileDoctor?.reviews.map((doctor, i) => (
            <div key={i} className="py-3">
              <h3 className="font-medium">{doctor.username}</h3>
              <StarComponents score={doctor.score} />
              <p className="ml-2.5 leading-5 text-justify">{doctor.comment}.</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default MainContent;
