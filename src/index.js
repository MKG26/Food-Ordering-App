import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const basename = "/Food-Ordering-App";

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "${basename}/",
        element: <Body />,
      },
      {
        path: "${basename}/about",
        element: <About />,
      },
      {
        path: "${basename}/contact",
        element: <Contact />,
      },
      {
        path: "${basename}/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "${basename}/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router basename={basename}>
    <RouterProvider router={appRouter} />
  </Router>
);
