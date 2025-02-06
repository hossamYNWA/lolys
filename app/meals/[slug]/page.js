import classes from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getOneMeal } from "@/lib/mealsdb";
export default function meal({ params }) {
  const mealSlug = params.slug;
  const meal = getOneMeal(mealSlug);
  if (!meal) {
    notFound();
  }
  const instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1 className={classes.title}>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${meal.creator_email}`}></a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
      </main>
    </>
  );
}
