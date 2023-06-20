import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="w-full scroll-smooth">
        {/* Header Bar */}
        <div className="w-full">
          <Header />
        </div>
        <Component {...pageProps} />
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
