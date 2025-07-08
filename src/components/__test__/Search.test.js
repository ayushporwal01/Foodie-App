import { render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { MOCK_DATA } from "../mocks/mockRestaurantList";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body component with Search", async () => {
  await act(async () => render(<Body />));
});
