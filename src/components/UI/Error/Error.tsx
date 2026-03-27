import classes from "./Error.module.css";

type ErrorProps = {
  title: string;
  message: string;
};

export const Error = ({ title, message }: ErrorProps) => {
  return (
    <div className={`${classes.error}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};
