import type { FunctionComponent } from 'react';
import AboutMe from '../AboutMe';
import Header from '../Header';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../ContactForm';

const Main: FunctionComponent = () => (
  <main>
    <Header />
    <AboutMe />
    <Skills />
    <hr />
    <Projects />
    <Contact />
  </main>
);

export default Main;
