import React from 'react';
import styled from 'styled-components';
import {
	Html5,
	CssThree,
	Sass,
	Tailwindcss,
	ReactJs,
	Redux,
	NodeDotJs,
	Express,
	Postgresql,
	Graphql,
	Javascript,
	NextDotJs,
} from '@icons-pack/react-simple-icons';

const StyledCardsContainer = styled.div`
	cursor: default;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;

	& > div {
		box-sizing: content-box;
		padding: 2em;
		width: 7rem;
		transition: all 0.3s ease;
		position: relative;

		@media (max-width: 700px) {
			width: 5rem;
			padding: 1em;
		}

		&:hover {
			background: var(--light);
			transform: scale(1.1);
			box-shadow: 5px 5px 0px var(--primary-200);
			color: var(--dark);
		}

		svg {
			width: 100%;
			height: 100%;
		}

		p {
			margin-top: 0.5em;
			font-size: var(--body-sm);
			text-align: center;
		}
	}
`;

const SkillCards = () => {
	return (
		<StyledCardsContainer>
			<div>
				<div>
					<Html5 />
				</div>
				<p>HTML</p>
			</div>
			<div>
				<div>
					<CssThree />
				</div>
				<p>CSS</p>
			</div>
			<div>
				<div>
					<Javascript />
				</div>
				<p>Javascript</p>
			</div>
			<div>
				<div>
					<ReactJs />
				</div>
				<p>React</p>
			</div>
			<div>
				<div>
					<Redux />
				</div>
				<p>Redux</p>
			</div>
			<div>
				<div>
					<NodeDotJs />
				</div>
				<p>Node.js</p>
			</div>
			<div>
				<div>
					<Express />
				</div>
				<p>Express</p>
			</div>
			<div>
				<div>
					<Postgresql />
				</div>
				<p>PostgreSQL</p>
			</div>
			<div>
				<div>
					<Graphql />
				</div>
				<p>GraphQL</p>
			</div>
			<div>
				<div>
					<Tailwindcss />
				</div>
				<p>Tailwind CSS</p>
			</div>
			<div>
				<div>
					<Sass />
				</div>
				<p>Sass</p>
			</div>
			<div>
				<div>
					<NextDotJs />
				</div>
				<p>Next.js</p>
			</div>
		</StyledCardsContainer>
	);
};

export default SkillCards;
