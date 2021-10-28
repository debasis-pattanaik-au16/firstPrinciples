import Section1 from "./components/Body/Section1/Section1";
import Section2 from "./components/Body/Section2/Section2";
import Section3 from "./components/Body/Section3/Section3";
import Section4 from "./components/Body/Section4/Section4";
import Section5 from "./components/Body/Section5/Section5";
import Section6 from "./components/Body/Section6/Section6";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
