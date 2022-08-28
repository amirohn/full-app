import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Container,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import {shorten, isInCart, quantityCount} from "../sharedFunctions/functions";
import {useContext} from "react";
import {CartContext} from "../../context/cartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const GridItem = ({gridData}) => {
  const {state, dispatch} = useContext(CartContext);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between!important",
        width: "216px",
      }}
    >
      <CardActionArea href={`posts/${gridData.id}`}>
        <Box sx={{minHeight: "200px"}}>
          <CardMedia
            component="img"
            image={gridData.image}
            alt={gridData.title}
            sx={{padding: "0.8rem"}}
          />
        </Box>
        <Box
          sx={{padding: "0 0.8rem ", display: "flex", flexDirection: "column"}}
        >
          <Typography as="p" variant="subtitle1" color="initial">
            {shorten(gridData.title)}
          </Typography>
          <Typography as="p" variant="subtitle1" color="initial">
            {gridData.price}
          </Typography>
        </Box>
      </CardActionArea>
      <CardActions className="nonClickableArea">
        {" "}
        {isInCart(state, gridData.id) ? (
          <>
            {quantityCount(state, gridData.id) === 1 ? (
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => dispatch({type: "DECREASE", payload: gridData})}
              >
                <DeleteOutlineIcon />
              </Button>
            ) : (
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() =>
                  dispatch({type: "REMOVE_ITEM", payload: gridData})
                }
              >
                <RemoveIcon />
              </Button>
            )}
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => dispatch({type: "INCREASE", payload: gridData})}
            >
              <AddIcon />
            </Button>
          </>
        ) : (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => dispatch({type: "ADD_ITEM", payload: gridData})}
          >
            ADD TO BAG
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
