import { MainLayout } from "@/layouts";
import React from "react";
import AppointmentListResult from "./AppointmentListResult";

export const AppointmentTemplate: React.FC = () => {
  return (
    <MainLayout>
      <h2 className="mb-8 text-4xl font-semibold text-center text-blueGray-700">Citas agendadas</h2>
      <AppointmentListResult />
    </MainLayout>
  );
};
