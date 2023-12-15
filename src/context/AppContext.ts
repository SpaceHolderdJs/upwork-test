import { createContext } from "react";
import { ItemType } from "../types";

export const AppContext = createContext<{ data: { items: ItemType[] } }>({
  data: { items: [] },
});
