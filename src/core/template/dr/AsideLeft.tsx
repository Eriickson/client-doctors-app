import { IconPhone, IconStar } from "@tabler/icons";
import React from "react";
import Section from "./Section";
import { useSelector } from "@/store";
import StickyBox from "react-sticky-box";
import { StarComponents } from "@/components";

const AsideLeft: React.FC = () => {
  const { profileDoctor } = useSelector(store => store.doctor);

  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <div className="border shadow-sm">
        <img src={`/images/doctor-${profileDoctor?.imageNumber}.jpg`} alt="" />
        <div className="p-2 space-y-2">
          <div>
            <h2 className="text-lg font-medium">
              {profileDoctor?.name} {profileDoctor?.lastname}
            </h2>
            <StarComponents score={profileDoctor?.scoreAvg || 0} />
          </div>
          <div className="flex flex-wrap">
            {profileDoctor?.specialties?.map((specialty, i) => (
              <span key={i} className="mr-1 mb-1 py-0.5 px-1 text-xs text-gray-500 bg-gray-200 rounded">
                {specialty}
              </span>
            ))}
          </div>
          <Section title="Breve Descripción">
            <p className="text-sm leading-5 text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa, quasi aspernatur aut possimus
              aperiam illum sed, provident fuga magni rerum mollitia id, at maiores.
            </p>
          </Section>
          <Section title="Contactos">
            <div className="space-y-1">
              <div className="flex items-center">
                <IconPhone className="w-5 h-5" />
                <p className="ml-0.5 mr-1 font-medium">Oficina: </p>
                <span className="font-medium">+1 (829) 816-0959</span>
              </div>
              <div className="flex items-center">
                <IconPhone className="w-5 h-5" />
                <p className="ml-0.5 mr-1 font-medium">Casa: </p>
                <span className="font-medium">+1 (829) 816-0959</span>
              </div>
              <div className="flex items-center">
                <IconPhone className="w-5 h-5" />
                <p className="ml-0.5 mr-1 font-medium">Teléfono: </p>
                <span className="font-medium">+1 (829) 816-0959</span>
              </div>
            </div>
          </Section>
          <Section title="Ubicaciones:">
            <p className="font-medium">{profileDoctor?.ubications?.join(", ")}</p>
          </Section>
        </div>
        <button className="w-full py-3 font-medium text-center text-white duration-150 bg-cyan-500 hover:bg-cyan-400">
          Agendar Cita
        </button>
      </div>
    </StickyBox>
  );
};

export default AsideLeft;
