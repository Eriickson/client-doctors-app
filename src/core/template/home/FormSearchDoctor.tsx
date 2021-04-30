import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { IFindDoctor } from "@/graphql";
import arraySort from "array-sort";

export interface ItemSearchDoctor {
  name: string;
  speciality: string;
  province: string;
}

interface FormSearchDoctorProps {
  onChange: (items: IFindDoctor) => void;
}

const FormSearchDoctor: React.FC<FormSearchDoctorProps> = ({ onChange }) => {
  const [fullname, setFullname] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [province, setProvince] = useState("");
  const [specialties] = useState(
    arraySort([
      "Alergología",
      "Anestesiología",
      "Angiología",
      "Cardiología",
      "Endocrinología",
      "Estomatología",
      "Gastroenterología",
      "Geriatría",
      "Hematología",
      "Hepatología",
      "Infectología",
      "Nefrología",
      "Neumología",
      "Neurología",
      "Nutriología",
      "Pediatría",
      "Psiquiatría",
      "Reumatología",
      "Toxicología",
      "Oncología médica",
      "Oncología radioterápica",
      "Medicina aeroespacial",
      "Medicina del deporte",
      "Medicina familiar y comunitaria",
      "Medicina física y rehabilitación",
      "Medicina forense",
      "Medicina intensiva",
      "Medicina interna",
      "Medicina preventiva y salud pública",
      "Medicina del trabajo",
    ]),
  );

  const [provinces] = useState(
    arraySort([
      "Distrito Nacional",
      "San Pedro de Macorís",
      "La Romana",
      "La Altagracia",
      "El Seibo",
      "Hato Mayor",
      "Duarte",
      "Samaná",
      "Maria Trinidad Sánchez",
      "Salcedo",
      "La Vega",
      "Monseñor Nouel",
      "Sánchez Ramirez",
      "Santiago",
      "Espaillat",
      "Puerto Plata",
      "Valverde",
      "Monte Cristi",
      "Dajabónn",
      "Santiago Rodríguez",
      "Azua",
      "San Juan de la Maguana",
      "Elías Piña",
      "Barahona",
      "Bahoruco",
      "Independencia",
      "Perdenales",
      "San Cristóbal",
      "Monte Plata",
      "San José de Ocoa",
      "Peravia",
    ]),
  );

  useEffect(() => {
    if (fullname || specialty || province) {
      onChange({ fullname, specialty, province });
    } else {
      onChange({ fullname: "xxx", specialty: "xxx", province: "xxx" });
    }
  }, [fullname, specialty, province]);

  return (
    <form className="flex flex-col p-3 space-y-3 border shadow-sm md:space-x-3 md:space-y-0 md:items-center md:flex-row">
      <div className="flex-1">
        <DebounceInput
          className="border focus:text-cyan-600 px-4 py-3.5 w-full focus:bg-cyan-100 focus:border-cyan-500 duration-150 no-close-results"
          minLength={3}
          debounceTimeout={500}
          placeholder="Nombre"
          onChange={e => setFullname(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <select
          id=""
          className="border focus:text-cyan-600 px-4 py-3.5 w-full focus:bg-cyan-100 focus:border-cyan-500 duration-150 no-close-results"
          name="speciality"
          onChange={e => setSpecialty(e.target.value)}
        >
          <option className="bg-white" value="">
            Especialidad
          </option>
          {specialties.map((specialty, i) => (
            <option className="bg-white" key={i} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <select
          id=""
          className="border focus:text-cyan-600 px-4 py-3.5 w-full focus:bg-cyan-100 focus:border-cyan-500 duration-150 no-close-results"
          name="province"
          onChange={e => setProvince(e.target.value)}
        >
          <option className="bg-white" value="">
            Provincia
          </option>
          {provinces.map((province, i) => (
            <option className="bg-white" key={i} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default FormSearchDoctor;
