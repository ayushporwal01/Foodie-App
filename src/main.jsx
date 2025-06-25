import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./App.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery.jsx";
import "./style.css";


//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On-Demand Loading
//Dynamic Import



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
