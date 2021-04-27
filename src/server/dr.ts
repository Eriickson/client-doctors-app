import { GetServerSideProps } from "next";

import { client, GET_DOCTOR_Q, IDoctor, IGetDoctorPayload } from "@/graphql";

export interface DoctorPageProps {
  doctor: IDoctor;
}

export const drSsr: GetServerSideProps = async ctx => {
  const { data } = await client.query<IGetDoctorPayload>({ query: GET_DOCTOR_Q, variables: { id: ctx.params?.id } });

  const props: DoctorPageProps = {
    doctor: data.getDoctor.doctor,
  };

  return { props };
};
