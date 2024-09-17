import { Dispatch, FC, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { IUser, IUserData } from "../../../../types/user.interface";
import styles from "./CreateUser.module.css";

interface ICreateUserProps {
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}

const CreateUser: FC<ICreateUserProps> = ({ setUsers }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    mode: "onChange",
  });

  const createUser: SubmitHandler<IUserData> = (data) => {
    setUsers((prev: IUser[]) => [...prev, { id: prev.length + 1, ...data }]);

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createUser)}>
      <TextField
        {...register("name", { required: "Name is required" })}
        label="Name"
        variant="outlined"
        fullWidth
        error={!!errors.name}
      />
      <TextField
        {...register("email", { required: "Email is required" })}
        label="Email"
        variant="outlined"
        fullWidth
        error={!!errors.email}
      />
      <TextField
        {...register("phone", { required: "Phone is required" })}
        label="Phone"
        variant="outlined"
        fullWidth
        error={!!errors.phone}
      />
      <Button type="submit" variant="contained" color="primary" className="btn">
        Create
      </Button>
    </form>
  );
};

export default CreateUser;
