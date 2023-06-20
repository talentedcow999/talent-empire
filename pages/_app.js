import "../styles/globals.css";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="w-full scroll-smooth">
        {/* Header Bar */}
        <div className="w-full">
          <Header />
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
