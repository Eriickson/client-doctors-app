import React from "react";


import { NextPage } from "next";

import { HomeTemplate } from "@/templates";
import { SEO } from "@/components";

const HomePage: NextPage = () => {
  return (
    <>
      <SEO title="Inicio" />
      <HomeTemplate />
    </>
  );
};

export default HomePage;
