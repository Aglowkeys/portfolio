import styled from 'styled-components';
import AboutMe from './AboutMe';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const StyledMain = styled.main``;

const Main = () => {
	return (
		<StyledMain>
			<Header />
			<AboutMe />
			<Skills />
			<hr />
			<Projects />
			<Contact />
		</StyledMain>
	);
};

export default Main;
