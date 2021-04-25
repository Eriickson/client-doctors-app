import { createUploadLink } from "apollo-upload-client";
import fetch from "isomorphic-unfetch";

export default createUploadLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
  fetch,
});
