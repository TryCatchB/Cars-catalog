import axios from "axios";
import { IUser } from "../types/user.interface";

export const UserService = {
  async getAll() {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  },

  async getById(id: string) {
    const response = await axios.get<IUser[]>(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    );

    return response.data[0];
  },
};
