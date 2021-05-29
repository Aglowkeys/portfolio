import React, { useContext } from 'react';
import { LanguageContext } from '../../LangContext';
import { StyledProjects } from './styles';
import strings from './strings';

import H2 from '../H2';
import Container from '../Container';
import Project from '../Project';
import GamingHub from '../../assets/GamingHub.jpg';
import QuizMeApp from '../../assets/QuizMeApp.jpg';
import Weather from '../../assets/Weather.jpg';
import Whiteboard from '../../assets/Whiteboard.jpg';

const Projects = () => {
	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	return (
		<StyledProjects id='portfolio'>
			<Container>
				<div className='projects__header'>
					<H2 alternative='alternative'>Portfolio</H2>
					<p>{s.description}</p>
				</div>

				<div className='projects__list'>
					<Project
						title='GamingHub'
						desc={s.gamingHub}
						img={GamingHub}
						link1='https://ecommerce-ft07-g07.vercel.app'
						link1Aria={s.gamingHubAriaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/Aglowkeys/GamingHub'
						link2Aria={s.gamingHubAriaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='QuizzMeApp'
						desc={s.quizMeApp}
						img={QuizMeApp}
						link1='https://appgallery.huawei.com/#/app/C103845919'
						link1Aria={s.quizMeAppAriaApp}
						text1={s.buttonApp}
						link2='https://github.com/Aglowkeys/QuizmeApp'
						link2Aria={s.quizMeAppAriaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='Weather App'
						desc={s.weatherApp}
						img={Weather}
						link1='https://weather-eosin.vercel.app'
						link1Aria={s.weatherAppAriaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/Aglowkeys/Weather'
						link2Aria={s.weatherAppAriaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='Whiteboard'
						desc={s.whiteboard}
						img={Whiteboard}
						link1='https://whiteboard-pi.vercel.app/'
						link1Aria={s.whiteboardAriaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/Aglowkeys/whiteboard'
						link2Aria={s.whiteboardAriaRepository}
						text2={s.buttonRepository}
					/>
				</div>
			</Container>
		</StyledProjects>
	);
};

export default Projects;
