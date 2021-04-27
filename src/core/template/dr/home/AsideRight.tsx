import React, { useState } from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

// GraphQL
import { useMutation } from "@apollo/client";
import { SCHEDULE_APPOINTMENT_M } from "@/graphql";

// My Components
import Section from "./Section";

type FormValue = {
  date: string;
  hour: string;
  minute: string;
  note: string;
  typeAppointment: "FACE-TO-FACE" | "VIRTUAL";
};

const AsideRight: React.FC = () => {
  const [scheduleAppointment] = useMutation(SCHEDULE_APPOINTMENT_M);
  const { query } = useRouter();

  const [maxDate] = useState(moment().add("month", 1).format("YYYY-MM-DD"));
  const [hours] = useState([9, 10, 11, 1, 2, 3, 4, 5]);
  const { register, handleSubmit, reset } = useForm<FormValue>();
  async function onSubmit(values: FormValue) {
    const time = `${values.hour}:${values.minute} ${values.hour >= "12" ? "p. m." : "a. m."}`;
    console.log(values);

    try {
      await scheduleAppointment({
        variables: {
          idDoctor: query.id,
          appointment: {
            date: values.date,
            schedule: {
              time,
              note: values.note,
              typeAppointment: values.typeAppointment,
            },
          },
        },
      });
      toast.success("Cita agendada");
      reset({});
    } catch (err) {
      toast.error(err["message"].replace(/Error: /, ""));
    }
  }

  return (
    <aside className="p-5 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section title="Agendar cita">
          <div className="mt-5">
            <label className="mb-3 cursor-pointer" htmlFor="face-to-face">
              <input
                id="face-to-face"
                className="mr-1"
                type="radio"
                {...register("typeAppointment")}
                value="FACE-TO-FACE"
                defaultChecked
              />
              <strong>Presencial</strong>
            </label>{" "}
            <br />
            <label className="cursor-pointer " htmlFor="virutal">
              <input id="virutal" className="mr-1" type="radio" {...register("typeAppointment")} value="VIRTUAL" />
              <strong>Virtual</strong>
            </label>
          </div>
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
              {...register("hour", { required: true })}
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
              <option value="00">00</option>
              <option value="30">30</option>
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
      <Toaster />
    </aside>
  );
};

export default AsideRight;
