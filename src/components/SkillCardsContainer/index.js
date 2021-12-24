import { StyledCardsContainer } from './styles';
import SkillCard from '../SkillCard';

import {
    Html5,
    CssThree,
    Sass,
    Tailwindcss,
    ReactJs,
    Redux,
    Nodedotjs,
    Express,
    Postgresql,
    Graphql,
    Javascript,
    Nextdotjs,
    Vuedotjs,
    Typescript,
} from '@icons-pack/react-simple-icons';

const SkillCards = () => {
    return (
        <StyledCardsContainer>
            <SkillCard Icon={Html5} text='HTML' />
            <SkillCard Icon={CssThree} text='CSS' />
            <SkillCard Icon={Javascript} text='JavaScript' />
            <SkillCard Icon={Typescript} text='TypeScript' />
            <SkillCard Icon={ReactJs} text='React' />
            <SkillCard Icon={Redux} text='Redux' />
            <SkillCard Icon={Nodedotjs} text='Node.js' />
            <SkillCard Icon={Express} text='Express' />
            <SkillCard Icon={Postgresql} text='PostgreSQL' />
            <SkillCard Icon={Graphql} text='GraphQL' />
            <SkillCard Icon={Tailwindcss} text='Tailwind CSS' />
            <SkillCard Icon={Sass} text='Sass' />
            <SkillCard Icon={Nextdotjs} text='Next.js' />
            <SkillCard Icon={Vuedotjs} text='Vue.js' />
        </StyledCardsContainer>
    );
};

export default SkillCards;
