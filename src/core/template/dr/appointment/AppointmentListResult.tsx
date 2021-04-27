import React from "react";

import { useSelector } from "@/store";
import moment from "moment";

const AppointmentListResult: React.FC = () => {
  const { appointment } = useSelector(store => store.doctor);

  return (
    <div className="grid grid-cols-12 gap-3">
      {appointment?.calendar ? (
        appointment?.calendar.map((item, i) => (
          <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div className="border">
              <div className="px-4 py-1 text-white bg-cyan-500">
                <strong>{item.schedule.patient}</strong>
                <br />
                <span className="font-mono text-gray-100 tex-sm"># Consulta: 001</span>
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
              <button className="w-full py-3 font-semibold text-white duration-150 bg-red-500 cursor-pointer hover:bg-red-400">
                Cancelar Cita
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-12 text-lg font-semibold text-center text-gray-200">No se han agregado citas</p>
      )}
    </div>
  );
};

export default AppointmentListResult;
