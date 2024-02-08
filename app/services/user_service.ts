import { User } from "../models/user_model";
import axios from "../utils/axios";

export default class UserService {
  static async getUsers() {
    const res = await axios.get(`${process.env.BASE_URL}/users`);

    if (res.status === 200) {
      return res.data as User[];
    } else {
      throw console.log("Error");
    }
  }

  static async getSingleUser(id: string) {
    const res = await axios.get(`${process.env.BASE_URL}/users/${id}`);

    if (res.status === 200) {
      return res.data as User;
    } else {
      throw console.log("Error");
    }
  }
}
