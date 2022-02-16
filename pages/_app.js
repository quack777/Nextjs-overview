import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />;
      <style jsx global>{`
        .active {
          color: black !important;
        }
      `}</style>
    </div>
  );
}
