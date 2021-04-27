import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useAction } from "@/store";

// Elements
import { DoctorPageProps } from "@/server";
export { drSsr as getServerSideProps } from "@/server";

// Components
import { DrTemplate } from "@/templates";
import { SEO } from "@/components";

const DoctorPage: NextPage<DoctorPageProps> = ({ doctor }) => {
  const { setProfileDoctor } = useAction();

  setProfileDoctor(doctor);

  return (
    <>
      <SEO title={`${doctor.name} ${doctor.lastname}`} />
      <DrTemplate />
    </>
  );
};

export default DoctorPage;
