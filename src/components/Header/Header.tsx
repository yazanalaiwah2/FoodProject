import { useContext } from "react";
import logoImg from "../../assets/logo.jpg";
import { Button } from "../UI/Button/Button";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import classes from "./Header.module.css";

export const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce(
    (acc, cur) => acc + cur.quantity,
    0,
  );

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <img src={logoImg} alt="React Food Logo" className={classes.logo} />
        <h1>React Food</h1>
      </div>

      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};
