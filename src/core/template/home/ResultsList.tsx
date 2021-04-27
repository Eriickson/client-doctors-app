import { StarComponents } from "@/components";
import { IDoctor } from "@/graphql";
import { IconMapPin } from "@tabler/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ResultsListProps {
  results: IDoctor[];
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    results.length ? setIsOpen(true) : setIsOpen(false);
  }, [results]);

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute left-0 right-0 px-1 pt-2 bg-white border border-t-0 top-1">
          <ul className="pb-2 overflow-auto divide-y divide-cyan-600 divide-opacity-25" style={{ maxHeight: 400 }}>
            {results.map(doctor => (
              <li key={doctor.id}>
                <Link href={`/dr/${doctor.id}`}>
                  <a className="flex px-3 py-2 duration-150 cursor-pointer hover:bg-cyan-100">
                    <img
                      className="w-20 h-20 border border-cyan-200 mr-3.5"
                      src={`/images/doctor-${doctor.imageNumber}.jpg`}
                      alt=""
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-semibold">
                          Dr. {doctor.name} {doctor.lastname}
                        </h4>
                        <span className="flex text-sm font-semibold text-gray-400">
                          {doctor.province}
                          <IconMapPin className="w-5 h-5 ml-0.5" />
                        </span>
                      </div>
                      <div className="flex space-x-0.5">
                        <b className="py-0.5 px-1 text-xs text-gray-500 bg-gray-200 rounded">
                          {Math.round(doctor.scoreAvg)} Review
                        </b>
                        <StarComponents score={doctor.scoreAvg} />
                      </div>
                      <div className="space-x-1">
                        {doctor.specialties.map((specialty, i) => (
                          <span key={i} className="py-0.5 px-1 text-xs text-gray-500 bg-gray-200 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultsList;
