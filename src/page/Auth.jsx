import Authentication from "../Todo/Authentication.jsx";
import { redirect } from "react-router-dom";

function Auth() {
  return <Authentication />;
}

export default Auth;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    alert("Unsupported mode, Please try again.");
    return null;
  }

  // Get form data
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  try {
    const storedAuthData = localStorage.getItem("authdata");
    let users = storedAuthData ? JSON.parse(storedAuthData) : [];

    let userExists = users.some((user) => user.email === authData.email);

    if (mode === "signup") {
      if (userExists) {
        alert("User already exists. Please login instead.");
        return redirect("/auth");
      } else {
        users.push(authData);
        localStorage.setItem("authdata", JSON.stringify(users));

        localStorage.setItem("isAuthenticated", JSON.stringify(true));

        localStorage.setItem(authData.email, JSON.stringify([]));
        localStorage.setItem("loggedInUser", authData.email);

        return redirect("/todo");
      }
    }

    if (mode === "login") {
      if (userExists) {
        const user = users.find((user) => user.email === authData.email);
        if (user && user.password === authData.password) {
          localStorage.setItem("isAuthenticated", JSON.stringify(true));

          localStorage.setItem("loggedInUser", authData.email);

          return redirect("/todo");
        }
      }
      alert("Invalid email or password. Please create a new account.");
      return redirect(`/auth?mode=${mode}`);
    }
  } catch (error) {
    console.error("An error occurred during authentication:", error);
    alert("Authentication failed. Please try again later.");
    return null;
  }
}
