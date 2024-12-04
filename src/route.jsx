import { createBrowserRouter } from "react-router-dom";
import Accordion from "./components/BaseUI/Accordion/Accordion";
import Inputs from "./components/BaseUI/Inputs/Inputs";
import SelectMain from "./components/BaseUI/Select/SelectMain";
import BasicTables from "./components/BaseUI/Tables/BasicTable/BasicTables";
import DataTables from "./components/BaseUI/Tables/DataTable/DataTables";
import TextArea from "./components/BaseUI/TextArea/TextArea";
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
        path: "/text-area",
        element: <TextArea />,
      },
      {
        path: "/select",
        element: <SelectMain />,
      },
      {
        path: "/basic-table",
        element: <BasicTables />,
      },
      {
        path: "/data-table",
        element: <DataTables />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
