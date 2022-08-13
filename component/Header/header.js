import {
  Link,
  Button,
  Box,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import logoImage from "../../asset/logo.png";

export const Header = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Button>
          <Link href="/">
            <Image src={logoImage} alt="logo" />
          </Link>
        </Button>
        <List
          sx={{
            width: "60%",
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "row",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem>
            <Button href="/">
              <ListItemText primary="Home" />
            </Button>
          </ListItem>
          <ListItem>
            <Button href="/products">
              <ListItemText primary="Shop" />
            </Button>
          </ListItem>
          <ListItem>
            <Button href="/login">
              <ListItemText primary="Login" />
            </Button>
          </ListItem>
          <ListItem>
            <Button href="/about">
              <ListItemText primary="About" />
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <ListItemText primary="Login" />
            </Button>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};
