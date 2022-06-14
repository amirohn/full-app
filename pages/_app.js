import "../styles/globals.css";
import Theme from "../styles/global/theme";
import {ProductContextProvider} from "../context//prodcutContext";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <ProductContextProvider>
        <Component {...pageProps} />;
      </ProductContextProvider>
    </Theme>
  );
}

export default MyApp;
