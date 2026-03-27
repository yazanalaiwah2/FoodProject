import { useContext } from "react";
import { Modal } from "../UI/Modal/Modal";
import { CartContext } from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import { Button } from "../UI/Button/Button";
import { UserProgressContext } from "../../store/UserProgressContext";
import { CartItem } from "./CartItem";
import classes from "./Cart.module.css";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const handleClose = () => {
    userProgressCtx.hideCart();
  };

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  };

  const cartTotal = cartCtx.items.reduce(
    (acc: number, cur) => acc + cur.quantity * cur.price,
    0,
  );

  return (
    <Modal
      className={classes.cart}
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleClose : undefined}
    >
      <h2>Your Cart</h2>

      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>

      <p className={classes.total}>{currencyFormatter.format(cartTotal)}</p>

      <p className={classes.actions}>
        <Button textOnly onClick={handleClose}>
          Close
        </Button>

        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};
