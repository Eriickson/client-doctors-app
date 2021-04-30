import { createUploadLink } from "apollo-upload-client";
import fetch from "isomorphic-unfetch";

export default createUploadLink({
  uri: process.env.NEXT_PUBLIC_URI_SERVER,
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
  fetch,
});
