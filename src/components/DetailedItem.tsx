import { useContext, useMemo } from "react";
import { Button, FlexColumn, FlexRow, Img } from "react-ui-expert";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

export const DetailedItem = () => {
  const { data } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentItem = useMemo(
    () => data.items.find((item) => +item.id === +id!),
    [data.items, id]
  );

  if (!currentItem) return null;

  const { title, description, images, price } = currentItem;

  return (
    <FlexColumn width="100%" alignItems="center">
      <FlexColumn width="70%" alignItems="center">
        <Img width="100%" maxHeight="300px" objectFit="cover" src={images[0]} />
        <FlexRow
          width="100%"
          alignItems="center"
          justifyContent="space-between">
          <h1>{title}</h1>
          <h2>{price}$</h2>
        </FlexRow>
        <p>{description}</p>
        <Button
          alignSelf="center"
          maxWidth="200px"
          cursor="pointer"
          background="black"
          borderRadius="20px"
          border="none"
          color="white"
          padding="10px 20px"
          onClick={() => navigate(-1)}>
          Back
        </Button>
      </FlexColumn>
    </FlexColumn>
  );
};
