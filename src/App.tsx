import { useCallback, useContext, useEffect, useState } from "react";
import { FlexColumn, FlexRow } from "react-ui-expert";
import { useInterval } from "@uidotdev/usehooks";
import { Item } from "./components/Item";
import { AppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const { data } = useContext(AppContext);
  const [lastUpdate, setLastUpdate] = useState(0);

  const getItems = useCallback(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => (data.items = json.products));

    setLastUpdate(0);
  }, [data]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  useInterval(() => {
    getItems();
  }, 1000 * 60);

  useInterval(() => {
    setLastUpdate((item) => item + 1);
  }, 1000);

  return (
    <FlexColumn width="100%" alignItems="center">
      <FlexRow width="90%" alignItems="center" justifyContent="space-between">
        <h2>Products</h2>
        <div>
          <h4>
            Last update 00:{lastUpdate.toString().length === 1 ? 0 : ""}
            {lastUpdate}
          </h4>
        </div>
      </FlexRow>
      <FlexColumn width="70%" maxWidth="700px" gap="10px">
        {data.items?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </FlexColumn>
    </FlexColumn>
  );
}

export default App;
