// menuData.ts
import {
  CommandIcon,
  Component,
  Landmark,
  LayoutDashboardIcon,
  LayoutTemplate,
  ListOrdered,
  Table,
} from "lucide-react";

export const menuItems = [
  {
    category: "Overviews",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboardIcon,
        submenu: [
          { name: "Admin Dashboard", route: "/" },
          { name: "Sales Dashboard", route: "/sales" },
          { name: "User Dashboard", route: "/user" },
        ],
      },
    ],
  },
  {
    category: "Inventory",
    items: [
      {
        name: "Products",
        icon: LayoutDashboardIcon,
        submenu: [
          { name: "Products", route: "/products" },
          { name: "Create-Product", route: "/create-product" },
          { name: "Expire Products", route: "/expire-products" },
          { name: "Low Stocks", route: "/expire-products" },
          { name: "Category", route: "/category" },
          { name: "Sub-Category", route: "/sub-category" },
          { name: "Brands", route: "/brands" },
          { name: "units", route: "/units" },
          { name: "Variants Attributes", route: "/variants-attributes" },
          { name: "Warranties", route: "/warranties" },
          { name: "Stock Transfer", route: "/stock-transfer" },
        ],
      },
      {
        name: "Order Management",
        icon: ListOrdered,
        submenu: [
          { name: "Order List", route: "/order-list" },
          { name: "Invoices", route: "/invoices" },
          { name: "Return & Refund", route: "/return-refund" },
          { name: "POS", route: "/pos" },
        ],
      },
    ],
  },
  {
    category: "Applications",
    items: [
      {
        name: "Phone",
        icon: CommandIcon,
        route: "/phone",
      },
      {
        name: "Chat",
        icon: Component,
        route: "/chat",
      },
      {
        name: "Calendar",
        icon: LayoutTemplate,
        route: "/calendar",
      },
      // More applications here...
    ],
  },
  {
    category: "Pages",
    items: [
      {
        name: "Authentication",
        icon: CommandIcon,
        submenu: [
          { name: "Sign In", route: "/signIn" },
          { name: "Signup", route: "/signup" },
        ],
      },
      {
        name: "Error Pages",
        icon: CommandIcon,
        submenu: [
          { name: "404 error", route: "/404-error" },
          { name: "505 error", route: "/505-error" },
        ],
      },
    ],
  },
  {
    category: "UI",
    items: [
      {
        name: "Base UI",
        icon: Landmark,
        submenu: [
          { name: "Accordion", route: "/accordion" },
          { name: "Inputs", route: "/inputs" },
          { name: "TextArea", route: "/text-area" },
          { name: "Select", route: "/select" },
          { name: "Radio", route: "/radio" },
          { name: "Dropdown", route: "/dropdown" },
          { name: "Badge", route: "/badge" },
          { name: "Input Group", route: "/input-group" },
          { name: "Checkbox", route: "/checkbox" },
          { name: "Breadcrumb", route: "/breadcrumb" },
          { name: "Alert", route: "/alert" },
          { name: "Buttons", route: "/buttons" },
          { name: "Cards", route: "/cards" },
          { name: "Modal", route: "/modal" },
          { name: "Range Slider", route: "/range-slider" },
          { name: "Layout", route: "/layout" },
          { name: "Validation", route: "/validation" },
        ],
      },
      {
        name: "Tables",
        icon: Table,
        submenu: [
          { name: "Basic Table", route: "/basic-table" },
          { name: "Data Table", route: "/data-table" },
        ],
      },
    ],
  },
];
