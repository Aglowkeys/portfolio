import React, { useContext } from 'react';
import { LanguageContext } from '../LangContext';
import strings from './strings/Projects';

import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import H2 from './H2';
import Container from './Container';
import Button from './Button';
import ButtonLink from './ButtonLink';
import GamingHub from '../assets/GamingHub.jpg';
import QuizMeApp from '../assets/QuizMeApp.jpg';
import Weather from '../assets/Weather.jpg';

const StyledProjects = styled.section`
	padding: 7em 0 3em;

	h2 {
		color: var(--primary-100);
	}

	& > * {
		display: flex;
		justify-content: center;

		@media (max-width: 800px) {
			flex-direction: column;
		}

		& > div {
			flex: 1 1 50%;
		}
	}

	.projects__header {
		position: -webkit-sticky;
		position: sticky;
		top: 8em;
		align-self: flex-start;
		width: auto;
		padding-right: 4em;
		margin-bottom: 4em;

		@media (max-width: 800px) {
			position: static;
		}
	}

	.projects__list {
		z-index: 10;
		background-color: var(--dark);
	}

	.project {
		width: 100%;
		margin-bottom: 9em;
	}

	.project:last-child {
		margin-bottom: 0;
	}

	.project__img-container {
		width: 100%;
		height: 20rem;
		border: 5px solid var(--secondary);
		margin-bottom: 3rem;
		flex-shrink: 1;
		position: relative;
		z-index: 1;

		&::before {
			content: '';
			background-image: radial-gradient(
				circle,
				var(--secondary) 0%,
				var(--secondary) 15%,
				transparent 30%,
				transparent
			);
			background-size: 10px 10px;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 1.75rem;
			left: -1.75rem;
			z-index: -1;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.project__title {
		color: var(--primary-100);
		margin-bottom: 0.2em;
	}

	.project__desc {
		margin-bottom: 2em;
	}

	.project__buttons > *:first-child {
		margin-right: 2em;
		margin-bottom: 1em;
	}
`;

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
					<div className='project'>
						<Fade>
							<div className='project__img-container'>
								<img src={GamingHub} alt={s.gamingHubAlt} />
							</div>
						</Fade>
						<h3 className='project__title'>GamingHub</h3>
						<p className='small project__desc'>{s.gamingHub}</p>
						<div className='project__buttons'>
							<ButtonLink
								link='https://ecommerce-ft07-g07.vercel.app'
								ariaLabel={s.gamingHubAriaWebsite}
							>
								{s.buttonWebsite}
							</ButtonLink>
							<ButtonLink
								link='https://github.com/Aglowkeys/GamingHub'
								ariaLabel={s.gamingHubAriaRepository}
							>
								{s.buttonRepository}
							</ButtonLink>
						</div>
					</div>

					<div className='project'>
						<Fade>
							<div className='project__img-container'>
								<img src={QuizMeApp} alt={s.quizMeAppAlt} />
							</div>
						</Fade>
						<h3 className='project__title'>QuizMeApp</h3>
						<p className='small project__desc'>{s.quizMeApp}</p>
						<div className='project__buttons'>
							<ButtonLink
								link='https://appgallery.huawei.com/#/app/C103845919'
								ariaLabel={s.quizMeAppAriaApp}
							>
								{s.buttonApp}
							</ButtonLink>
							<ButtonLink
								link='https://github.com/Aglowkeys/QuizmeApp'
								ariaLabel={s.quizMeAppAriaRepository}
							>
								{s.buttonRepository}
							</ButtonLink>
						</div>
					</div>

					<div className='project'>
						<Fade>
							<div className='project__img-container'>
								<img src={Weather} alt={s.weatherAppAlt} />
							</div>
						</Fade>
						<h3 className='project__title'>Weather App</h3>
						<p className='small project__desc'>{s.weatherApp} </p>
						<div className='project__buttons'>
							<ButtonLink
								link='https://weather-eosin.vercel.app'
								ariaLabel={s.weatherAppAriaWebsite}
							>
								{s.buttonWebsite}
							</ButtonLink>
							<ButtonLink
								link='https://github.com/Aglowkeys/Weather'
								ariaLabel={s.weatherAppAriaRepository}
							>
								{s.buttonRepository}
							</ButtonLink>
						</div>
					</div>
				</div>
			</Container>
		</StyledProjects>
	);
};

export default Projects;
