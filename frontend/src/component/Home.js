import Navbar from "./Navbar";
import Carsouel from "./Carsouel";
import Sevices from "./Services";
import Faq from "./Faq";
import Search from "./Search";

function Home() {
  return (
    <div>
      <Navbar />
      <Carsouel />
      <Search/>
      <Sevices />
      <Faq />
    </div>
  );
}
export default Home;
