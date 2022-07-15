import type { FunctionComponent } from 'react';
import AboutMe from '../AboutMe';
import Header from '../Header';
import Projects from '../Projects';
import Skills from '../Skills';
// @ts-ignore: Hasta que le ponga tipos a Contact, para que TS no explote. TODO: Quitar esto
import Contact from '../Contact'; 

const Main: FunctionComponent = () => {
	return (
		<main>
			<Header />
			<AboutMe />
			<Skills />
			<hr />
			<Projects />
			<Contact />
		</main>
	);
};

export default Main;
