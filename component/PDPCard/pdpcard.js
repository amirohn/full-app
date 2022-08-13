import {
  Box,
  CardMedia,
  Container,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {PdpWapper} from "./pdpcard.styled";

export const PdpCard = ({PDPdata}) => {
  return (
    <>
      <Container maxWidth="lg">
        <CardContent>
          <h1>{PDPdata.title}</h1>
          <PdpWapper>
            <Box>
              <CardMedia
                component="img"
                image={PDPdata.images[2]}
                alt={PDPdata.title}
              />
            </Box>
            <Box className="whiteBox">
              <Stack spacing={3} direction="column">
                <Typography
                  sx={{fontSize: 14}}
                  color="text.secondary"
                  gutterBottom
                >
                  {PDPdata.brand}
                </Typography>
                <Typography variant="h5" component="div">
                  {PDPdata.category}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">{PDPdata.description}</Typography>
                <Box className="addToBagButton">
                  <Button variant="contained">Add To Bag</Button>
                  <Box>1</Box>
                </Box>
              </Stack>
            </Box>
          </PdpWapper>
        </CardContent>
      </Container>
    </>
  );
};
