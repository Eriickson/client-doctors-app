import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-500">
      <div className="container px-3 py-6 mb-3 md:px-0">
        <div className="flex justify-between text-white">
          <h1 className="text-2xl font-semibold leading-6 ">
            <span className="text-cyan-200">Busca a</span>
            <br />
            <b>tu doctor</b>
          </h1>
        </div>
      </div>
      <div className="px-3 py-3 pb-3 text-white bg-cyan-400">
        <div className="container">
          <p>
            <strong>Todos los derechos reservados &copy; {new Date().getFullYear()}</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
