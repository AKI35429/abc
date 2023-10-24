import '../styles/globals.css'
import {ProductsContextProvider} from "../components/ProductsContext";
// import HorizontalSlider from '../components/HorizontalSlider.css';
// import '../components/HorizontalSlider.css'; // Import Swiper's CSS globally

function MyApp({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <Component {...pageProps} />
      {/* <HorizontalSlider /> */}
    </ProductsContextProvider>
    
  );
}

export default MyApp
