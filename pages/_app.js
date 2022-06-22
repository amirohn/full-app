import "../styles/globals.css";
import Theme from "../styles/global/theme";
import {ProductContextProvider} from "../context//prodcutContext";
import {Layout} from "../Layout/layout";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <ProductContextProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ProductContextProvider>
    </Theme>
  );
}

export default MyApp;
