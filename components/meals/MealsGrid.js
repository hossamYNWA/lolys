import classes from "./mealsGrid.module.css";
import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
  const content = meals.map((meal) => {
    return (
      <li key={meal.id}>
        <MealItem {...meal} />
      </li>
    );
  });
  return <ul className={classes.meals}>{content}</ul>;
}
