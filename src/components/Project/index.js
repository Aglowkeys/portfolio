import { StyledProject } from './styles';
import Fade from 'react-reveal/Fade';
import ButtonLink from '../ButtonLink';

const Project = ({
	title,
	desc,
	img,
	link1,
	link1Aria = null,
	text1,
	link2,
	link2Aria = null,
	text2,
}) => {
	return (
		<StyledProject>
			<Fade>
				<div className='project__img-container'>
					<img src={img} alt={title} />
				</div>
			</Fade>

			<h3 className='project__title'>{title}</h3>
			<p className='small project__desc'>{desc}</p>

			<div className='project__buttons'>
				<ButtonLink link={link1} ariaLabel={link1Aria}>
					{text1}
				</ButtonLink>
				<ButtonLink link={link2} ariaLabel={link2Aria}>
					{text2}
				</ButtonLink>
			</div>
		</StyledProject>
	);
};

export default Project;
