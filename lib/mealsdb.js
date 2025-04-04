import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getOneMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMealtoDb(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  //saving the uploaded image
  const ext = meal.image.name.split(".").pop();
  const imageName = `${meal.slug}.${ext}`;
  const imageSrc = `/images/${imageName}`;
  //using file system to make stream that put iage into public/assets folder
  const stream = fs.createWriteStream(imageSrc);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(
    Buffer.from(bufferedImage, (e) => {
      if (e) {
        throw new Error("saving image failed..");
      }
    })
  );
  meal.image = imageSrc;
  db.prepare(
    `INSERT INTO meals(slug,
    title,
    image,
    summary,
    instructions,
    creator,
    creator_email) VALUES(@slug,
    @title,
    @image,
    @summary,
    @instructions,
    @creator,
    @creator_email)`
  ).run(meal);
}
