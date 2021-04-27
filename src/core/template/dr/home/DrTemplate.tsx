import { MainLayout } from "@/layouts";
import React from "react";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import MainContent from "./MainContent";

export const DrTemplate: React.FC = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-3">
          <AsideLeft />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <MainContent />
        </div>
        <div className="col-span-3">
           <AsideRight  />
        </div>
      </div>
    </MainLayout>
  );
};
