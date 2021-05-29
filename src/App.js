import Main from './components/Main';
import Footer from './components/Footer';
import ArrowTop from './components/ArrowTop';
import { LanguageProvider } from './LangContext';

const App = () => {
	return (
		<>
			<LanguageProvider>
				<Main />
				<Footer />
				<ArrowTop />
			</LanguageProvider>
		</>
	);
};

export default App;
