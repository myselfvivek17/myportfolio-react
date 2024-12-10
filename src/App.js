import './App.css'
import Footer from './Footer';
import Header from "./Header"
import Page1 from "./Page1"
import Page2 from "./Page2"

import { motion, useScroll, useSpring } from "framer-motion";
import Projects from './Projects';
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return(
    <div>
      <Header/>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Page1/>
      <Page2/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App