import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

test("should load button inside header component", () => {
  render(
    <Provider store={appStore}>
      <Header />
    </Provider>
  );
});
