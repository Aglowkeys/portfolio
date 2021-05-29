import { StyledSkillCard } from './styles';

const SkillCard = ({ text, Icon }) => {
	return (
		<StyledSkillCard>
			<div>
				<Icon />
			</div>
			<p>{text}</p>
		</StyledSkillCard>
	);
};

export default SkillCard;
