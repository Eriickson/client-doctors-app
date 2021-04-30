import React from "react";
import { Footer, Header } from "@/components";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex-1 py-2.5">
        <div className="container">
          <div className="px-3">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
