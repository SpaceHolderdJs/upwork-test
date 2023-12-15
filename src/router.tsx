import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { DetailedItem } from "./components/DetailedItem";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products/:id", element: <DetailedItem /> },
]);
