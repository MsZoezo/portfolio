import '../styles/globals.css'
import Background from '../components/background/background';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Background />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
