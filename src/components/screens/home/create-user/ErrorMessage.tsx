import { FC } from "react";

const ErrorMessage: FC<{ error: string | undefined }> = ({ error }) => {
  if (!error) return null;

  return (
    <>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
};

export default ErrorMessage;
