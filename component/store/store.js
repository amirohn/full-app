import {ProductContext} from "../../context/prodcutContext";
import {useContext} from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Container,
  CardActions,
  Button,
} from "@mui/material";
import {PlpWrapper} from "./store.styled";
import {GridItem} from "../GridItem/GridItem";

export const Store = () => {
  const product = useContext(ProductContext);
  return (
    <Container maxWidth="lg">
      {product.length > 0 ? (
        <PlpWrapper>
          {product.map((item) => (
            <GridItem key={item.id} gridData={item} />
          ))}
        </PlpWrapper>
      ) : (
        <h1>LOADING...</h1>
      )}
    </Container>
  );
};
