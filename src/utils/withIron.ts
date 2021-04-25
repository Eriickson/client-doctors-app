import { GetServerSideProps } from "next-session";
import { withIronSession, Handler } from "next-iron-session";

export const withSession = (handler: Handler | GetServerSideProps) => {
  console.log("Llega aqui");
  return withIronSession(handler, {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: "DSADS443WE5R2WR4EWR0EWRWERFSXsFC",
  });
};
