import { StyledProjects } from './styles';
import { strings } from './strings';
import H2 from '../H2';
import Container from '../Container';
import Project from '../Project';
import GamingHub from '../../assets/GamingHub.jpg';
import QuizMeApp from '../../assets/QuizMeApp.jpg';
import Movye from '../../assets/Movye.jpg';
import Whiteboard from '../../assets/Whiteboard.jpg';
import { useLangContext } from '../../hooks/useLangContext';

const Projects = () => {
    const [lang] = useLangContext();
    const s = strings[lang];
    const { gamingHub, quizMeApp, movye, whiteboard } = s;

    return (
        <StyledProjects aria-labelledby='projects-title' id='portfolio'>
            <Container>
                <div className='projects__header'>
                    <H2 id='projects-title' className='alternative'>
                        Portfolio
                    </H2>
                    <p>{s.description}</p>
                </div>

                <div className='projects__list'>
                    <Project
                        title='GamingHub'
                        desc={gamingHub.description}
                        imageSrc={GamingHub}
                        websiteLink='https://ecommerce-ft07-g07.vercel.app'
                        websiteLinkLabel={gamingHub.ariaWebsite}
                        websiteLinkText={s.buttonWebsite}
                        githubLink='https://github.com/Aglowkeys/GamingHub'
                        githubLinkLabel={gamingHub.ariaRepository}
                        githubLinkText={s.buttonRepository}
                    />

                    <Project
                        title='QuizMeApp'
                        desc={quizMeApp.description}
                        imageSrc={QuizMeApp}
                        websiteLink='https://appgallery.huawei.com/#/app/C103845919'
                        websiteLinkLabel={quizMeApp.ariaWebsite}
                        websiteLinkText={s.buttonApp}
                        githubLink='https://github.com/Aglowkeys/QuizmeApp'
                        githubLinkLabel={quizMeApp.ariaRepository}
                        githubLinkText={s.buttonRepository}
                    />

                    <Project
                        title='Movye'
                        desc={movye.description}
                        imageSrc={Movye}
                        websiteLink='https://movye.vercel.app/'
                        websiteLinkLabel={movye.ariaWebsite}
                        websiteLinkText={s.buttonWebsite}
                        githubLink='https://github.com/SantiagoMartinMolina/Movye'
                        githubLinkLabel={movye.ariaRepository}
                        githubLinkText={s.buttonRepository}
                    />

                    <Project
                        title='Whiteboard'
                        desc={whiteboard.description}
                        imageSrc={Whiteboard}
                        websiteLink='https://whiteboard-pi.vercel.app/'
                        websiteLinkLabel={whiteboard.ariaWebsite}
                        websiteLinkText={s.buttonWebsite}
                        githubLink='https://github.com/Aglowkeys/whiteboard'
                        githubLinkLabel={whiteboard.ariaRepository}
                        githubLinkText={s.buttonRepository}
                    />
                </div>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
