import {
  Link,
  Button,
  Box,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Badge,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import logoImage from "../../asset/logo.png";

export const Header = () => {
  function notificationsLabel(count) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }
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
            <Button href="/about">
              <ListItemText primary="About" />
            </Button>
          </ListItem>
          <ListItem>
            <Button href="/login">
              <ListItemText primary="Login" />
            </Button>
          </ListItem>
          <ListItem>
            <Box>
              <IconButton aria-label={notificationsLabel(100)}>
                <Badge color="error" badgeContent={2}>
                  <Link href="#">
                    <ShoppingCartIcon fontSize="large" />
                  </Link>
                </Badge>
              </IconButton>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};
