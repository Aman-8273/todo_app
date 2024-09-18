import classes from "./Home.module.css";
import todoIMG from "../assets/img/main.png";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.main}>
        <h1 className={classes.heading}>To-Do List</h1>
        <p className={classes.paragraph}>
          with only the feature you need, To-Do application is customized for
          individuals seeking a stress-free way to stay focused on their goals,
          projects and tasks.
        </p>
        <NavLink to="/auth?mode=login">
          <button className={classes.getStartbtn}>Get Started &rarr;</button>
        </NavLink>
      </div>

      <div>
        <img className={classes.todoIMG} src={todoIMG} alt="To-Do image" />
      </div>
    </div>
  );
}
