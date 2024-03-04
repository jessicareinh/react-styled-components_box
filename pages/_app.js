import { GlobalStyle } from "../styles";
import "../components/BoxWithClassName/BoxWithStyledComponents";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
