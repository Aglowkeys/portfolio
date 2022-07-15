import type { FunctionComponent } from 'react';
import { ReactJs } from '@icons-pack/react-simple-icons';
import { StyledSkillCard } from './styles';

type Props = {
  text: string;
  Icon: typeof ReactJs; // Se hizo lo que se pudo 🤷‍♂️ TODO: Ver cómo mejorar esto
};

const SkillCard: FunctionComponent<Props> = ({ text, Icon }) => {
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
