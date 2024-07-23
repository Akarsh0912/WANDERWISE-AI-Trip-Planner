import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import CreateTrip from "./Component/Create-trip/CreateTrip.jsx";
import Layout from "./Layout.jsx";
import Home from "./Component/Home/Home.jsx";

// Routing is defined here
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/create-trip" element={<CreateTrip />} />
    </Route>
  )
);

// this functionality is for browser
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
