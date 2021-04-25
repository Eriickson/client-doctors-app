import React, { useState } from "react";
import { MainLayout } from "@/layouts";
import { Footer, Header } from "@/components";
import FormSearchDoctor, { ItemSearchDoctor } from "./FormSearchDoctor";
import { IconStar } from "@tabler/icons";
import Link from "next/link";
import ResultsList from "./ResultsList";
import { useFindDoctors, IFindDoctor } from "@/graphql";

export const HomeTemplate = () => {
  const { findDoctors, doctors } = useFindDoctors();
  
  function onChangeFilter(items: IFindDoctor) {
    findDoctors(items);
  }
  console.log(doctors);
  

  return (
    // <MainLayout>
    <div className="relative h-screen">
      <div
        className="h-screen bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: "url(/images/cover.jpeg)", filter: "blur(4px)" }}
      ></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between">
        <div>
        <Header />
        <div className="container mt-5">
          <div className="max-w-screen-xl p-5 mx-auto mb-24 bg-white bg-blue">
            <h2 className="mb-5 text-4xl font-bold text-center text-blueGray-700">Busca al doctor que necesitas</h2>
            <FormSearchDoctor onChange={onChangeFilter} />
            <ResultsList results={doctors} />
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </div>
    // </MainLayout>
  );
};
