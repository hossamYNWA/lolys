"use client";
import classes from "./meals/notfound.module.css";
export default function errorpage() {
  return (
    <>
      <h1 className={classes.headerText}>an arror has occured</h1>
      <main className={classes.mainText}>
        couldn't fetch data, plase try again after few minuets{" "}
      </main>
    </>
  );
}
