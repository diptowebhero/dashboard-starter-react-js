import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import DashboardLayout from "./layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
