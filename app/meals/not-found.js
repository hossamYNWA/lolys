import classes from "./notfound.module.css";
export default function notFound() {
  return (
    <>
      <h1 className={classes.headerText}>Meal is not found</h1>
      <main className={classes.mainText}>
        probably you entered wrong url or trying to find meal that doesn't exist
      </main>
    </>
  );
}
