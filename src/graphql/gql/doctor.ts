import { gql } from "@apollo/client";
import { IDoctor } from "../hooks";

export const FIND_DOCTORS_Q = gql`
  query FindDoctors($findDoctorsFilter: FindDoctorInput!) {
    findDoctors(filter: $findDoctorsFilter) {
      count
      doctors {
        id
        name
        lastname
        imageNumber
        specialties
        scoreAvg
        province
      }
    }
  }
`;

export const GET_DOCTOR_Q = gql`
  query GetDoctor($id: ID) {
    getDoctor(id: $id) {
      doctor {
        id
        name
        lastname
        imageNumber
        ubications
        specialties
        scoreAvg
        reviews {
          comment
          score
          username
        }
      }
    }
  }
`;

export interface IGetDoctorPayload {
  getDoctor: {
    doctor: IDoctor;
  };
}

export interface FindDoctorsPayload {
  findDoctors: {
    count: number;
    doctors: IDoctor[];
  };
}
