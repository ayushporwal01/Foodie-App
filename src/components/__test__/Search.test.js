import { render, screen } from "@testing-library/react";
import Body from "../Body";
import { MOCK_DATA } from "../mocks/mockRestaurantList";
import { act } from "react";

//Mocking Fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body component with Search", async () => {
  await act(async () => render(<Body />));

  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  // const searchBtn = screen.getByRole("button", { name: "Search" });
  // const searchInput = screen.getByTestId("searchInput");

  // expect(searchBtn).toBeInTheDocument();
});
