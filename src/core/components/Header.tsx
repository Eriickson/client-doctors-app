import React from "react";

import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="py-5 bg-cyan-500">
      <div className="container">
        <div className="flex justify-between px-3 text-white md:px-0">
          <Link href="/">
            <a>
              <h1 className="text-2xl font-semibold leading-6 ">
                <span className="text-cyan-200">Busca a</span>
                <br />
                <b>tu doctor</b>
              </h1>
            </a>
          </Link>
          <div className="flex">
            <div className="mr-3.5">
              <strong>Juan Manuel Rosario</strong>
              <div className="flex items-center justify-end">
                <div className="w-3 h-3 mr-1 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">En linea</span>
              </div>
            </div>
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.squarespace-cdn.com/content/v1/5b14d6b9e17ba3952cac9f04/1529194285863-CJKZQYFQW19BZULFH1N4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/AlebertoCarmona-500x500.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};
