import {Header} from "../component/Header/header";
import {Box} from "@mui/material";
export const Layout = ({children}) => {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};
