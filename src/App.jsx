import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
