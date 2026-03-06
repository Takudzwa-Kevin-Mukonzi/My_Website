import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}