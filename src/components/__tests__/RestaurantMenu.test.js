import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/mocResMenu.json";
import appStore from "../../utils/redux/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Restaurant Menu components", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionCategory = screen.getByText("NEW CHICKEN ROLLS (15)");

  fireEvent.click(accordionCategory);

  const accordionItems = screen.getAllByTestId("foodItems");
  expect(accordionItems.length).toBe(15);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByText("Cart - (1 items)");

  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  expect(
    screen.getByText("Cart is Empty. Add items to cart")
  ).toBeInTheDocument();
});
