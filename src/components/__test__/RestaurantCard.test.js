import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { MOCK_DATA } from "../mocks/RestaurantMock";

it("should render Restaurant Cards with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});

it("should render Restaurant Cards with promoted label", () => {
  const PromotedRestaurant = withPromotedLabel(RestaurantCard);

  render(<PromotedRestaurant resData={MOCK_DATA} />);

  const label = screen.getByText("Promoted");
  expect(label).toBeInTheDocument();
});
