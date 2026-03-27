import { currencyFormatter } from "../../util/formatting";
import classes from "./CartItem.module.css";

type CartItemProps = {
  name: string;
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const CartItem = ({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}: CartItemProps) => {
  return (
    <li className={classes.cartItem}>
      <p className={classes.text}>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className={classes.actions}>
        <button className={classes.button} onClick={onDecrease}>
          -
        </button>
        <span>{quantity}</span>
        <button className={classes.button} onClick={onIncrease}>
          +
        </button>
      </p>
    </li>
  );
};
