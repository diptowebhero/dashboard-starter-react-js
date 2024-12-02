import { createBrowserRouter } from "react-router-dom";
import Accordion from "./components/BaseUI/Accordion/Accordion";
import Inputs from "./components/BaseUI/Inputs/Inputs";
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
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/inputs",
        element: <Inputs />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
