import "../styles/globals.css";
import Theme from "../styles/global/theme";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <Component {...pageProps} />;
    </Theme>
  );
}

export default MyApp;
