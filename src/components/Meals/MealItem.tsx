import { useContext } from "react";
import { currencyFormatter } from "../../util/formatting";
import { Button } from "../UI/Button/Button";
import { CartContext } from "../../store/CartContext";
import { API_URL } from "../../config";
import classes from "./MealItem.module.css";

type Meal = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type MealItemProps = {
  meal: Meal;
};

export const MealItem = ({ meal }: MealItemProps) => {
  const cartCtx = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className={classes.mealItem}>
      <article>
        <img src={`${API_URL}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className={classes.price}>
            {currencyFormatter.format(meal.price)}
          </p>
          <p className={classes.description}>{meal.description}</p>
        </div>
        <p className={classes.actions}>
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};
