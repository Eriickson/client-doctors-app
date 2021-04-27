import { GetServerSideProps } from "next";

import { client, IDoctor, GET_DOCTOR_APPOINTMENT_Q, IGetDoctorPayload } from "@/graphql";

export interface AppointmentPageProps {
  doctor: IDoctor;
}

export const appointmentSsr: GetServerSideProps = async ctx => {
  const { data } = await client.query<IGetDoctorPayload>({
    query: GET_DOCTOR_APPOINTMENT_Q,
    variables: {
      id: ctx.query.id,
    },
  });

  const props: AppointmentPageProps = {
    doctor: data.getDoctor.doctor,
  };

  return { props };
};
