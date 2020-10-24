import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Workexperience from "./components/Workexperience/Workexperience";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <Workexperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
