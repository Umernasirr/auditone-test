import React from "react";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import { Box } from "@mui/material";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MockLogin from "./components/MockLogin/MockLogin.tsx";
import { IdProvider } from "./Context/IdContext.tsx";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MockLogin />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    // full container
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        height: "100vh",
      }}
    >
      <Toaster />
      <CookiesProvider>
        <IdProvider>
          {/* <Toaster /> */}
          <RouterProvider router={router} />
        </IdProvider>
      </CookiesProvider>
    </Box>
  );
}

export default App;
