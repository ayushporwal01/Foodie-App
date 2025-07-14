import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import BottomHeader from "./components/BottomHeader";
import CartSync from "./utils/CartSync";

function AppLayout() {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <main>
          <Outlet />
        </main>
        <BottomHeader />
        <CartSync />
      </div>
    </Provider>
  );
}

export default AppLayout;
