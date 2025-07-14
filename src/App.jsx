import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import BottomHeader from "./components/BottomHeader";

function AppLayout() {
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          <Header />
          <main>
            <Outlet />
          </main>
          <BottomHeader />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default AppLayout;
