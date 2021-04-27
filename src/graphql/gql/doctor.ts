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

export const GET_DOCTOR_APPOINTMENT_Q = gql`
  query GetDoctor($id: ID) {
    getDoctor(id: $id) {
      doctor {
        name
        lastname
        imageNumber
        calendar {
          id
          date
          schedule {
            typeAppointment
            time
            patient
            note
          }
        }
      }
    }
  }
`;

export const CANCEL_APPOINTMENT_Q = gql`
  mutation CancelAppointment($idDoctor: ID!, $idAppointment: ID!) {
    cancelAppointment(idDoctor: $idDoctor, idAppointment: $idAppointment) {
      msg
    }
  }
`;

export const SCHEDULE_APPOINTMENT_M = gql`
  mutation ScheduleAppointment($idDoctor: ID!, $appointment: CalendarInput!) {
    scheduleAppointment(idDoctor: $idDoctor, appointment: $appointment) {
      msg
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

export interface IScheduleAppointmentPayload {
  scheduleAppointment: {
    msg: string;
  };
}

export interface IGetDoctorPayload {
  getDoctor: {
    doctor: IDoctor;
  };
}

export interface CancelAppointmentPayload {
  cancelAppointment: {
    msg: string;
  };
}
