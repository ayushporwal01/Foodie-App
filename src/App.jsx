import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <main className="mt-24">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
