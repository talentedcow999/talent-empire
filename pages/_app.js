import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="w-full ">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
