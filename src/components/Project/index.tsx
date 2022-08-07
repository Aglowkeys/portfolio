import type { FunctionComponent } from 'react';
import { Fade } from 'react-awesome-reveal';
import { StyledProject } from './styles';
import ButtonLink from '../ButtonLink';

type Props = {
  title: string;
  desc: string;
  githubLink: string;
  githubLinkText: string;
  githubLinkLabel?: string;
  websiteLink: string;
  websiteLinkText: string;
  websiteLinkLabel?: string;
  imageSrc: string;
}

const Project: FunctionComponent<Props> = ({
  title,
  desc,
  imageSrc,
  websiteLink,
  websiteLinkLabel,
  websiteLinkText,
  githubLink,
  githubLinkLabel,
  githubLinkText,
}) => (
  <StyledProject>
    <Fade triggerOnce>
      <div className="project__img-container">
        <img src={imageSrc} alt={title} />
      </div>
    </Fade>

    <h3 className="project__title">{title}</h3>
    <p className="small project__desc">{desc}</p>

    <div className="project__buttons">
      <ButtonLink href={websiteLink} ariaLabel={websiteLinkLabel}>
        {websiteLinkText}
      </ButtonLink>
      <ButtonLink href={githubLink} ariaLabel={githubLinkLabel}>
        {githubLinkText}
      </ButtonLink>
    </div>
  </StyledProject>
);

export default Project;
