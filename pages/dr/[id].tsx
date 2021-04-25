import React from "react";
import { NextPage } from "next";

import { DoctorPageProps } from "@/server";
export { drSsr as getServerSideProps } from "@/server";

import { useAction } from "@/store";

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
