import { GetServerSideProps } from "next-session";
import { withIronSession, Handler } from "next-iron-session";

/* eslint-disable */
export const withSession = (handler: Handler | GetServerSideProps) => {
  return withIronSession(handler, {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: "DSADS443WE5R2WR4EWR0EWRWERFSXsFC",
  });
};
