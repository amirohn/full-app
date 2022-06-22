import {Link, Button, Box} from "@mui/material";

export const Header = () => {
  return (
    <>
      <Box>
        <Link href="/sign-up-form">sign up for free</Link>
      </Box>
      <Button variant="contained" mx={{color: "#ffffff"}}>
        <Link href="/products">start shopping</Link>
      </Button>
    </>
  );
};
