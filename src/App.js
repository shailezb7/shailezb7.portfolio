import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";

import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/Banner/about";
import Github from "./components/Skills/Github";

function App() {
  return (
    <Container >
      <Banner>
        <Header />     
        <ProfComponent />
        {/* <About/> */}
      </Banner >

      <LightColor>
        <Skills/>
        <Projects />
        <Github/>
      </LightColor>
  
      <LightColor>
        <Footer />
      </LightColor>

    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
