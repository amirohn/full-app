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
            <Box sx={{padding: "1rem"}}>
              <CardMedia
                component="img"
                image={PDPdata.image}
                alt={PDPdata.title}
              />
            </Box>
            <Box className="whiteBox">
              <Stack spacing={3} direction="column">
                <Typography
                  sx={{mb: 1.5}}
                  color="text.secondary"
                  variant="subtitle1"
                >
                  {PDPdata.category}
                </Typography>
                <Typography variant="body2">{PDPdata.description}</Typography>
                {
                  <Typography variant="body1" color="initial">
                    {PDPdata.price}
                  </Typography>
                }
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
