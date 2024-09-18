import Header from "../Todo/Header.jsx";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
