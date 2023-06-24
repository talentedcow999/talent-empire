import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <script async src="https://player.vimeo.com/api/player.js"></script>
      <div className="w-full ">
        {/* Header Bar */}
        <div className="w-full">
          <Header />
        </div>
        <div className=" ">
          <Component {...pageProps} />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
