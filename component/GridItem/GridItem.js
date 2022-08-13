import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Container,
  CardActions,
  Button,
} from "@mui/material";

export const GridItem = ({gridData}) => {
  return (
    <Card>
      <CardActionArea href={`posts/${gridData.id}`}>
        <CardMedia
          component="img"
          width="200px"
          height="250px"
          image={gridData.images[0]}
          alt={gridData.title}
        ></CardMedia>
        <Box>{gridData.title}</Box>
      </CardActionArea>
      <CardActions className="nonClickableArea">
        {" "}
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
