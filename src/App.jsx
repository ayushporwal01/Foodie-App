import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import BottomHeader from "./components/BottomHeader";
import CartSync from "./utils/CartSync";

function AppLayout() {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          <Header />
          <main>
            <Outlet />
          </main>
          <BottomHeader />
          <CartSync />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default AppLayout;
