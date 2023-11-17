
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/Bar';
import Welcome from "./components/Welcome";
import Offerings from "./components/Offerings"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
function App() {
  return (
    <div>

      <Bar/>
      <Welcome/>
      <Offerings/>
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
