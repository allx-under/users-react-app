import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

const getUsers = async () => {
  const users = await instance.get("/users");
  return users;
};

getUsers();

export default getUsers;
