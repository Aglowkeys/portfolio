import styled from 'styled-components';

export const StyledProject = styled.div`
  width: 100%;
  margin-bottom: 9em;

  &:last-child {
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
