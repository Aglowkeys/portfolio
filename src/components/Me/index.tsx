import type { FunctionComponent } from 'react';
import { StyledPhoto } from './styles';
import myphoto from '../../assets/fotomia.jpg';

const Me: FunctionComponent = () => (
  <StyledPhoto
    src={myphoto}
    alt="Emiliano Alfonso"
    aria-hidden="true"
  />
);

export default Me;
