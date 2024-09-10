import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const button = screen.getByText("Login");
  const button = screen.getByRole("button", { name: "Login" });

  expect(button).toBeInTheDocument();
});

it("Should render header component with a Cart 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const button = screen.getByText("Login");
  const cart = screen.getByText("Cart - (0 items)");

  expect(cart).toBeInTheDocument();
});

it("Should render header component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const button = screen.getByText("Login");
  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

it("Should render header component and change Login button to Logout button onClick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
