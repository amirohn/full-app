import "../styles/globals.css";
import Theme from "../styles/global/theme";
import {ProductContextProvider} from "../context/prodcutContext";
import CartContextProvider from "../context/cartContext";
import {Layout} from "../Layout/layout";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <ProductContextProvider>
        <CartContextProvider>
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        </CartContextProvider>
      </ProductContextProvider>
    </Theme>
  );
}

export default MyApp;
