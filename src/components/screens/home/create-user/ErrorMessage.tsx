import { FC } from "react";

const ErrorMessage: FC<{ error?: string }> = ({ error }) => {
  if (!error) return null;

  return (
    <div>
      <p style={{ color: "red" }}>Name is required </p>
    </div>
  );
};

export default ErrorMessage;
