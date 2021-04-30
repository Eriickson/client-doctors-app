import { MainLayout } from "@/layouts";
import React from "react";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import MainContent from "./MainContent";

import { useSelector } from "@/store";

export const DrTemplate: React.FC = () => {
  const { calendar } = useSelector(state => state.doctor.profileDoctor);

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <AsideLeft />
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-5 2xl:col-span-6">
          <MainContent />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-12 xl:col-span-4 2xl:col-span-3">
          <AsideRight />
        </div>
      </div>
    </MainLayout>
  );
};
