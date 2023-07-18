import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserService } from "../../../services/user.service";
import User from "../home/user/User";
import withAuth from "../../../HOC/withAuth";
import { IUser } from "../../../types/user.interface";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await UserService.getById(id);
      setUser(data);
    };

    fetchData();
  }, [id]);

  if (!user.name) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <User user={user} />
    </div>
  );
};

export default withAuth(UserDetail);
