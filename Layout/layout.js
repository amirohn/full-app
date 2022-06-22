import {Header} from "../component/Header/header";
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
