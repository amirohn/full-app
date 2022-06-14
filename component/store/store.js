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

export const Store = () => {
  const product = useContext(ProductContext);
  return (
    <Container maxWidth="lg">
      <h1>this is Store</h1>
      {product.length > 0 ? (
        <PlpWrapper>
          {product.map((item) => (
            <Card key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250px"
                  image={item.image}
                  alt={item.title}
                ></CardMedia>
                <Box>{item.title}</Box>
              </CardActionArea>
              <CardActions className="nonClickableArea">
                {" "}
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          ))}
        </PlpWrapper>
      ) : (
        <h1>LOADING...</h1>
      )}
    </Container>
  );
};
