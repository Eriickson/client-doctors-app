import React from "react";

import { NextPage } from "next";

import { HomeTemplate } from "@/templates";
import { SEO } from "@/components";

const HomePage: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_URI_SERVER);

  return (
    <>
      <SEO title="Inicio" />
      <HomeTemplate />
    </>
  );
};

export default HomePage;
