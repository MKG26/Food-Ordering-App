import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Restaurant List for input burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeSearchResList = screen.getAllByTestId("resCard");
  expect(beforeSearchResList.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const inputText = screen.getByRole("textbox");

  fireEvent.change(inputText, { target: { value: "Burger" } });

  fireEvent.click(searchButton);

  const afterSearchResList = screen.getAllByTestId("resCard");

  expect(afterSearchResList.length).toBe(1);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeFilterResList = screen.getAllByTestId("resCard");
  expect(beforeFilterResList.length).toBe(20);

  const filterButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(filterButton);

  const afterFilterResList = screen.getAllByTestId("resCard");

  expect(afterFilterResList.length).toBe(15);
});
