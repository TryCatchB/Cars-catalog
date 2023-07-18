import { useEffect } from "react";
import { UserService } from "../../../services/user.service";

export const useGetUser = (setFunction: any, id: string) =>
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await UserService.getById(id);
      setFunction(data);
    };

    fetchData();
  }, [id]);
