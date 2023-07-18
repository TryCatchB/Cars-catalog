import { FC } from "react";
import User from "../screens/home/user/User";
import { IUser } from "../../types/user.interface";

interface ICatalog {
  users?: IUser[];
}

const Catalog: FC<ICatalog> = ({ users = [] }) => {
  return (
    <div>
      {users.length ? (
        users.map((user) => <User key={user.id} user={user} />)
      ) : (
        <p>There is no users</p>
      )}
    </div>
  );
};

export default Catalog;
