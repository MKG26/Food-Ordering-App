import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard {...MOCK_DATA.info} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted {...MOCK_DATA.info} />);

  const promotedLabel = screen.getByText("Top Rated");
  expect(promotedLabel).toBeInTheDocument();
});
