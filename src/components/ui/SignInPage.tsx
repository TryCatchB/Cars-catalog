import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { FC } from "react";

interface IUserData {
  name: string;
  password: number;
}

const SignInPage: FC = () => {
  const { setCustomer } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>();

  const onSubmit = async (data: IUserData) => {
    const user = { name: data.name, password: data.password };
    setCustomer(user);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignInPage;
