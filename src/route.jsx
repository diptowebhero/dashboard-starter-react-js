import { createBrowserRouter } from "react-router-dom";
import Accordion from "./components/BaseUI/Accordion/Accordion";
import AlertMain from "./components/BaseUI/Alert/AlertMain";
import ButtonMain from "./components/BaseUI/Buttons/ButtonMain";
import DropdownMain from "./components/BaseUI/Dropdown/DropdownMain";
import Inputs from "./components/BaseUI/Inputs/Inputs";
import RadioMain from "./components/BaseUI/Radio/RadioMain";
import SelectMain from "./components/BaseUI/Select/SelectMain";
import BasicTablesMain from "./components/BaseUI/Tables/BasicTable/BasicTablesMain";
import DataTableMain from "./components/BaseUI/Tables/DataTable/DataTableMain";
import TextArea from "./components/BaseUI/TextArea/TextArea";
import Home from "./components/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ServerError from "./pages/ServerError";

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
        path: "/radio",
        element: <RadioMain />,
      },
      {
        path: "/basic-table",
        element: <BasicTablesMain />,
      },
      {
        path: "/data-table",
        element: <DataTableMain />,
      },
      {
        path: "/dropdown",
        element: <DropdownMain />,
      },
      {
        path: "/alert",
        element: <AlertMain />,
      },
      {
        path: "/buttons",
        element: <ButtonMain />,
      },
      {
        path: "/error-page/404-error",
        element: <NotFoundPage />,
      },
      {
        path: "/error-page/505-error",
        element: <ServerError />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
