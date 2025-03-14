import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions/ local host url
  // baseURL: "http://127.0.0.1:5001/clone-9b0bc/us-central1/api",

  // deployed version of firebase function/backend
  baseURL: "https://us-central1-clone-9b0bc.cloudfunctions.net/api",
  //   deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-h08d.onrender.com/",
});
export { axiosInstance }