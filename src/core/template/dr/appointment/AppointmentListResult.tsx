import React from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import moment from "moment";

// GraphQL
import { useMutation } from "@apollo/client";
import { CANCEL_APPOINTMENT_Q } from "@/graphql";

// Redux
import { useAction, useSelector } from "@/store";

const AppointmentListResult: React.FC = () => {
  const [cancelAppointmentM] = useMutation(CANCEL_APPOINTMENT_Q);

  const { cancelAppointment } = useAction();
  const { appointment } = useSelector(store => store.doctor);

  const { query } = useRouter();

  async function handleCancelAppointment(id: string) {
    try {
      await cancelAppointmentM({
        variables: {
          idDoctor: query.id,
          idAppointment: id,
        },
      });

      cancelAppointment({ id });
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      {appointment?.calendar.length ? (
        appointment?.calendar.map((item, i) => (
          <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div className="border">
              <div className="px-4 py-2.5 text-white bg-cyan-500">
                <strong>{item.schedule.patient}</strong>
                <p className="text-sm font-medium">
                  {item.schedule.typeAppointment === "VIRTUAL" ? "Virtual" : "Presencial"}
                </p>
              </div>
              <div className="p-3 space-y-4">
                <div>
                  <p className="font-mono leading-3 text-gray-400 tex-sm">Fecha</p>
                  <strong>{moment(item.date).locale("es-do").format("ll").replace(/de/g, "")}</strong>
                </div>
                <div>
                  <p className="font-mono leading-3 text-gray-400 tex-sm">Inicio</p>
                  <strong>{item.schedule.time}</strong>
                </div>
                {/* <div>
                  <p className="font-mono leading-3 text-gray-400 tex-sm">Salida</p>
                  <strong>{moment(item.schedule.time, "HH:mm").add(30, "minutes")}</strong>
                </div> */}
                <div>
                  <p className="font-mono leading-3 text-gray-400 tex-sm">Mensaje</p>
                  <strong className="font-medium">{item.schedule.note}</strong>
                </div>
              </div>
              <button
                className="w-full py-3 font-semibold text-white duration-150 bg-red-500 cursor-pointer hover:bg-red-400"
                onClick={() => handleCancelAppointment(item.id)}
              >
                Cancelar Cita
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-12 text-lg font-semibold text-center text-gray-200 select-none">
          No se han agregado citas
        </p>
      )}
    </div>
  );
};

export default AppointmentListResult;
