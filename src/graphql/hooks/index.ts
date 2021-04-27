import { client } from "../apollo";
import { useState } from "react";
import { FindDoctorsPayload, FIND_DOCTORS_Q } from "../gql";

export interface IDoctor {
  id: string;
  name: string;
  lastname: string;
  province: string;
  yearsExperiences: number;
  reviews: {
    username: string;
    comment: string;
    score: number;
  }[];
  specialties: string[];
  ubications: string[];
  imageNumber: number;
  calendar: {
    date: string;
    schedule: {
      time: string;
      patient: string;
      note: string;
    };
  }[];
  scoreAvg: number;
}

export interface IFindDoctor {
  fullname?: string | null;
  specialty?: string | null;
  province?: string | null;
}

interface UseFindDoctorsReturn {
  doctors: IDoctor[];
  findDoctors: (variables: IFindDoctor) => void;
}

export const useFindDoctors = (): UseFindDoctorsReturn => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);

  async function findDoctors(findDoctorsFilter: IFindDoctor) {
    const { data } = await client.query<FindDoctorsPayload, { findDoctorsFilter: IFindDoctor }>({
      query: FIND_DOCTORS_Q,
      variables: { findDoctorsFilter },
      fetchPolicy: "no-cache",
    });

    setDoctors(data.findDoctors.doctors);
  }

  return { doctors, findDoctors };
};
