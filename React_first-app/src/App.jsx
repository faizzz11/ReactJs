import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carddd from "./components/Carddd";

function App() {
  return (
    <>
    <Navbar />
    <div className="Multi-cards">
    <Carddd title="card1" desc="desc1"/>
    <Carddd title="card2" desc="desc2"/>
    <Carddd title="card3" desc="desc3"/>
    <Carddd title="card4" desc="desc4"/>

    </div>
    <Footer />
    </>
  )
}

export default App
