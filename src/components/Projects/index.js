import React, { useContext } from 'react';
import { LanguageContext } from '../../LangContext';
import { StyledProjects } from './styles';
import strings from './strings';

import H2 from '../H2';
import Container from '../Container';
import Project from '../Project';
import GamingHub from '../../assets/GamingHub.jpg';
import QuizMeApp from '../../assets/QuizMeApp.jpg';
import Movye from '../../assets/Movye.jpg';
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
						desc={s.gamingHub.description}
						img={GamingHub}
						link1='https://ecommerce-ft07-g07.vercel.app'
						link1Aria={s.gamingHub.ariaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/Aglowkeys/GamingHub'
						link2Aria={s.gamingHub.ariaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='QuizMeApp'
						desc={s.quizMeApp.description}
						img={QuizMeApp}
						link1='https://appgallery.huawei.com/#/app/C103845919'
						link1Aria={s.quizMeApp.ariaWebsite}
						text1={s.buttonApp}
						link2='https://github.com/Aglowkeys/QuizmeApp'
						link2Aria={s.quizMeApp.ariaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='Movye'
						desc={s.movye.description}
						img={Movye}
						link1='https://movye.vercel.app/'
						link1Aria={s.movye.ariaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/SantiagoMartinMolina/Movye'
						link2Aria={s.movye.ariaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='Whiteboard'
						desc={s.whiteboard.description}
						img={Whiteboard}
						link1='https://whiteboard-pi.vercel.app/'
						link1Aria={s.whiteboard.ariaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/Aglowkeys/whiteboard'
						link2Aria={s.whiteboard.ariaRepository}
						text2={s.buttonRepository}
					/>
				</div>
			</Container>
		</StyledProjects>
	);
};

export default Projects;
