import React, { useState } from "react";
import Section from "./Section";
import moment from "moment";
import { useForm } from "react-hook-form";
import { SCHEDULE_APPOINTMENT_M } from "@/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

type FormValue = {
  date: string;
  time: string;
  minute: string;
  note: string;
};

const AsideRight: React.FC = () => {
  const [maxDate] = useState(moment().add("month", 1).format("YYYY-MM-DD"));
  const [hours] = useState([9, 10, 11, 1, 2, 3, 4, 5]);
  const { register, handleSubmit } = useForm<FormValue>();
  const [scheduleAppointment] = useMutation(SCHEDULE_APPOINTMENT_M);
  const { query } = useRouter();

  async function onSubmit(values: FormValue) {
    try {
      await scheduleAppointment({
        variables: {
          idDoctor: query.id,
          appointment: {
            date: values.date,
            schedule: {
              time: values.time,
              note: values.note,
            },
          },
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <aside className="p-5 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section title="Agendar cita">
          <input
            className="w-full px-3 py-3 mt-5 mb-5 font-medium duration-150 border cursor-pointer focus:ring-4 focus:border-cyan-400 focus:ring-cyan-200"
            type="date"
            min={moment().format("YYYY-MM-DD")}
            max={maxDate}
            {...register("date", { required: true })}
          />
          <div className="flex items-center mb-5 space-x-3">
            <select
              id=""
              className="w-full px-3 py-3 font-medium duration-150 border cursor-pointer focus:ring-4 focus:border-cyan-400 focus:ring-cyan-200"
              {...register("time", { required: true })}
            >
              {hours.map(hour => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <b>:</b>
            <select
              id=""
              className="w-full px-3 py-3 font-medium duration-150 border cursor-pointer focus:ring-4 focus:border-cyan-400 focus:ring-cyan-200"
              {...register("minute", { required: true })}
            >
              <option value="1">00</option>
              <option value="1">30</option>
            </select>
          </div>
          <textarea
            className="w-full px-3 py-3 duration-150 border cursor-pointer h-28 focus:ring-4 focus:border-cyan-400 focus:ring-cyan-200"
            id=""
            cols={30}
            rows={10}
            {...register("note", { required: true })}
          ></textarea>
          <button className="w-full py-3 font-medium text-center text-white duration-150 bg-cyan-500 hover:bg-cyan-400">
            Agendar Cita
          </button>
        </Section>
      </form>
    </aside>
  );
};

export default AsideRight;
