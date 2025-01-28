import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/mealsdb";
import { Suspense } from "react";
import Loadingmeals from "./loading-page";
//making separate meals components
async function LoadedMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

//our main page
export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicous meals, created{" "}
          <span className={classes.highlight}>by you!</span>
        </h1>
        <p>
          choose your favourite meal and cook it yourself, It is easy and fun !
        </p>
        <p className={classes.cta}>
          <Link href="meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loadingmeals />}>
          <LoadedMeals />
        </Suspense>
      </main>
    </>
  );
}
