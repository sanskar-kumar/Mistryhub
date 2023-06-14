import Navbar from "./Navbar";
import Banner from "./Banner";
// import Carsouel from "./Carsouel";
import Sevices from "./Services";
import Faq from "./Faq";
import Search from "./Search";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner/>
      {/* <Carsouel /> */}
      <Search/>
      <Sevices />
      <About/>
      <Faq />
      <Footer/>
    </div>
  );
}
export default Home;
