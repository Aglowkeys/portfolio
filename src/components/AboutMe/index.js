import { useContext } from 'react';
import { LanguageContext } from '../../LangContext';
import { StyledAbout } from './styles';
import strings from './strings';
import ButtonLink from '../ButtonLink';
import Container from '../Container';
import H2 from '../H2';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	return (
		<StyledAbout className='selection-contrast'>
			<Container>
				<Fade>
					<H2>{s.aboutMe}</H2>
				</Fade>
				<Fade>
					<p>{s.description}</p>
				</Fade>
				<Fade>
					<ButtonLink link='#portfolio' alternative='alternative' blank={false}>
						{s.seeProjects}
					</ButtonLink>
				</Fade>
			</Container>
		</StyledAbout>
	);
};

export default AboutMe;
