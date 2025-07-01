import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";

function AppLayout() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const data = {
      name: "Ayush Porwal",
    };
    setUsername(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="app">
        <Header />
        <main className="mt-24">
          <Outlet />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default AppLayout;
