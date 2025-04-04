"use server";
import { saveMealtoDb } from "./mealsdb";
import { redirect } from "next/navigation";
export async function saveMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
  };
  saveMealtoDb(meal);
  redirect("/meals");
}
