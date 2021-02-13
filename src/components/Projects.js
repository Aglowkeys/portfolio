import React from 'react';
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
		flex-wrap: wrap;

		& > div {
			flex-basis: 50%;
			flex-shrink: 1;
			flex-grow: 1;
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

		@media (max-width: 1060px) {
			position: static;
		}
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
	return (
		<StyledProjects>
			<Container>
				<div className='projects__header'>
					<H2 alternative='alternative'>Proyectos</H2>
					<p>
						A continuación te muestro algunos de los proyectos en
						los cuales trabajé:
					</p>
				</div>
				<div className='projects__list'>
					<div className='project'>
						<Fade>
							<div className='project__img-container'>
								<img src={GamingHub} alt='GamingHub Image' />
							</div>
						</Fade>
						<h3 className='project__title'>GamingHub</h3>
						<p className='small project__desc'>
							E-commerce de venta de videojuegos en formato
							digital. Hecho con React, Redux, Express,
							PostgreSQL, Sequelize, Firebase y Passport.
						</p>
						<div className='project__buttons'>
							<ButtonLink link='https://ecommerce-ft07-g07.vercel.app'>
								Visitar sitio
							</ButtonLink>
							<ButtonLink link='https://github.com/Aglowkeys/GamingHub'>
								Repositorio
							</ButtonLink>
						</div>
					</div>

					<div className='project'>
						<Fade>
							<div className='project__img-container'>
								<img src={QuizMeApp} alt='GamingHub Image' />
							</div>
						</Fade>
						<h3 className='project__title'>QuizMeApp</h3>
						<p className='small project__desc'>
							Aplicación móvil de trivias de diversas categorías.
							Hecho con React Native, MongoDB y GraphQL. El panel
							de administración fue hecho con Next.js y
							TypeScript.
						</p>
						<div className='project__buttons'>
							<Button disabled={true}>APK (pronto)</Button>
							<Button disabled={true}>
								Repositorio (pronto)
							</Button>
						</div>
					</div>

					<div className='project'>
						<Fade>
							<div className='project__img-container'>
								<img src={GamingHub} alt='GamingHub Image' />
							</div>
						</Fade>
						<h3 className='project__title'>Weather App</h3>
						<p className='small project__desc'>
							Aplicación web para buscar los datos climáticos de
							cualquier parte del mundo. Creada con React. Datos
							traídos de una API.
						</p>
						<div className='project__buttons'>
							<ButtonLink link='https://ecommerce-ft07-g07.vercel.app'>
								Visitar
							</ButtonLink>
							<ButtonLink link='https://github.com/Aglowkeys/Weather'>
								Repositorio
							</ButtonLink>
						</div>
					</div>
				</div>
			</Container>
		</StyledProjects>
	);
};

export default Projects;
