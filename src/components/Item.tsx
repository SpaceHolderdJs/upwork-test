import { FC } from "react";
import { Button, FlexColumn, FlexRow, Img } from "react-ui-expert";
import { ItemType } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  item: ItemType;
}

export const Item: FC<Props> = ({ item }) => {
  const { title, brand, description, images, price, id } = item;

  const navigate = useNavigate();

  return (
    <FlexRow
      width="100%"
      minHeight="300px"
      padding="20px"
      gap="10px"
      boxShadow="0px 5px 20px -9px rgba(20,19,19,0.75)">
      <FlexColumn width="50%">
        <h1>{title}</h1>
        <p>{brand}</p>
        <p>{description}</p>
        <h3>{price}$</h3>
        <Button
          alignSelf="center"
          maxWidth="200px"
          cursor="pointer"
          background="black"
          borderRadius="20px"
          border="none"
          color="white"
          padding="10px 20px"
          onClick={() => navigate(`/products/${id}`)}>
          See more info
        </Button>
      </FlexColumn>
      <FlexColumn width="50%">
        <Img
          width="100%"
          height="100%"
          objectFit="cover"
          src={images[0]}
          alt=""
        />
      </FlexColumn>
    </FlexRow>
  );
};
