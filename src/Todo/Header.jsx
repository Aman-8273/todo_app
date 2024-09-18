import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import todoimg from "../assets/img/logo.png";

function Header() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  useEffect(() => {
    setIsAuthenticatedUser(isAuthenticated);
  }, [isAuthenticated]);

  function handleLogout() {
    localStorage.setItem("isAuthenticated", JSON.stringify(false));

    setIsAuthenticatedUser(false);

    navigate("/");
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={classes.NavLink}>
              <div className={classes.navContainer}>
                <img className={classes.logo} src={todoimg} alt="logo" />
                <p className={classes.p}>TODO</p>
              </div>
            </NavLink>
          </li>
          <li>
            {isAuthenticatedUser && (
              <button onClick={handleLogout} className={classes.btnLogin}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
