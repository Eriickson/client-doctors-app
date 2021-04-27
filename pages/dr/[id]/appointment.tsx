import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useAction } from "@/store";

// Elements
import { AppointmentPageProps } from "@/server";
export { appointmentSsr as getServerSideProps } from "@/server";

// My Components
import { AppointmentTemplate } from "@/templates";
import { SEO } from "@/components";

const AppointmentPage: NextPage<AppointmentPageProps> = ({ doctor }) => {
  const { setAppointment } = useAction();

  setAppointment(doctor);

  return (
    <>
      <SEO title={`Citas de ${doctor.name} ${doctor.lastname}`} />
      <AppointmentTemplate />
    </>
  );
};

export default AppointmentPage;
