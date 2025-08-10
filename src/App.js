import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Internship from "./components/Internship/Internship";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"; 

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Internship />
            <Achievements />
            <Contact />
            <Footer /> {/* ✅ Now it will work */}
        </div>
    );
}

export default App;
