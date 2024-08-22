import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import '@/app/style/style.css'
import Contact from "./components/Contact";
import Showcase from "./components/Showcase";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Aboutus/>
      <Showcase/>
      <Contact/>
      <Footer/>
    </>
  );
}
