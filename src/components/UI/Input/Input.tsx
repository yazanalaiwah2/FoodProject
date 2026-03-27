import classes from "./Input.module.css";

type InputProps = {
  label: string;
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <p className={classes.control}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <input id={id} name={id} required className={classes.input} {...props} />
    </p>
  );
};
