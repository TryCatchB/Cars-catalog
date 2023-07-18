import { useEffect } from "react";
import { UserService } from "../services/user.service";

export const useGetAll = (setFunction: any) =>
  useEffect(() => {
    const fetchData = async () => {
      const data = await UserService.getAll();

      setFunction(data);
    };

    fetchData();
  }, []);
