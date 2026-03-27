import { MealItem } from "./MealItem";
import { useHttp } from "../../hooks/useHttp";
import { Error } from "../UI/Error/Error";
import { API_URL } from "../../config";
import classes from "./Meals.module.css";

type Meal = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const requestConfig = {};

export const Meals = () => {
  const { data, isLoading, error } = useHttp<Meal[]>(
    `${API_URL}/meals`,
    requestConfig,
    [],
  );

  if (isLoading) return <p className="center">Fetching meals...</p>;
  if (error) return <Error title="Failed to fetch meals" message={error} />;

  return (
    <ul className={`${classes.meals}`}>
      {data?.map((meal: Meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
