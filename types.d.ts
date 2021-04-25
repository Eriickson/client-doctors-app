declare module "*.css";

declare module "TypesApp" {
  interface User {
    name: string;
    lastname: string;
    brithday: string;
  }
}

declare module "next-session" {
  import { Redirect, NextApiRequest, GetServerSidePropsContext } from "next";
  import { Session } from "next-iron-session";

  interface CustomRequest extends NextApiRequest {
    session: Session;
  }

  interface CustomGetServer extends GetServerSidePropsContext {
    req: CustomRequest;
  }

  type GetServerSideReturn = {
    props: { [key: string]: string | boolean | number };
    redirect?: Redirect | undefined;
  };

  export type GetServerSideProps = (ctx: CustomGetServer) => Promise<GetServerSideReturn>;
}
