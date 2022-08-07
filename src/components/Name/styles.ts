import styled from 'styled-components';

export const StyledName = styled.h1`
  font-size: var(--h-lg);
  color: var(--primary-200);
  line-height: 1;
  letter-spacing: -0.075em;
  max-width: 8ch;

  @media (max-width: 1000px) {
    font-size: var(--h-md);
  }

  @supports (background-clip: text) or (-webkit-background-clip: text) {
    color: transparent;
    background-image: linear-gradient(90deg, var(--primary-200), var(--secondary));
    background-clip: text;
    -webkit-background-clip: text;

    /* Para arreglar bug con Safari. Parece que no le gustan las etiquetas dentro de h1 */
    -webkit-mask-image: linear-gradient(90deg, var(--primary-200), var(--secondary));
  }
`;
