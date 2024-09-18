import { useSearchParams, Form, Link } from "react-router-dom";
import classes from "./Authentication.module.css";

function Authentication() {
  //return the active query parameters in search
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "Submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1 className={classes.login}>{isLogin ? "Log in" : "Sign up"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link
            to={`?mode=${isLogin ? "signup" : "login"}`}
            className={classes.logSign}
          >
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting.." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default Authentication;
