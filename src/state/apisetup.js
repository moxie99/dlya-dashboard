import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://dlyabackend.uc.r.appspot.com',
  baseURL: "https://dlya-backend-test.herokuapp.com/",
});

export default instance;
