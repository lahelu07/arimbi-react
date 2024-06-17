import Navbar from "./components/Navbar";
import Video from "./components/Video";
import About from "./components/About";
import Jadwal from "./components/Jadwal";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Sgds from "./components/Sgds";
import Tabel from "./components/Tabel";
import Berita from "./components/Berita";

function App() {
  return (
    <div className="">
      <div className=" font-DM">
        <Navbar />
        <Video />
        <About />
        <Sgds />
        <Jadwal />
        <Tabel />
        <Berita />
        <Footer />
      </div>
    </div>
  );
}

export default App;
