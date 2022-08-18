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
import {shorten} from "../sharedFunctions/functions";

export const GridItem = ({gridData}) => {
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
        <Box sx={{padding: "0 0.8rem ", display: "flex"}}>
          <Typography variant="subtitle1" color="initial">
            {shorten(gridData.title)}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {gridData.price}
          </Typography>
        </Box>
      </CardActionArea>
      <CardActions className="nonClickableArea">
        {" "}
        <Button size="small" color="primary" variant="contained">
          ADD TO BAG
        </Button>
      </CardActions>
    </Card>
  );
};
