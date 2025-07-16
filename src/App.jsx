import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import BottomHeader from "./components/BottomHeader";
import CartSync from "./utils/CartSync";
import ScrollToTop from "./utils/ScrollToTop";

function AppLayout() {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <ScrollToTop />
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
