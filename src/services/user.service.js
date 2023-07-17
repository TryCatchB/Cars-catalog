import axios from "axios";

export const UserService = {
  async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  },

  async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    );

    return response.data[0];
  },
};
