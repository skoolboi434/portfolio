import styled from 'styled-components';
import Hero from './Hero';
import { PrimaryButton } from '../../Elements/Button/Button.style';

export const CustomHero = styled(Hero)`
  flex-direction: ${props => (props.reverse ? 'row-reverse' : '')};
  background-color: ${props => (props.primary ? '#39306f' : props.secondary ? '#10d1d3' : props.background)};

  ${PrimaryButton} {
    display: ${props => (props.btnActive ? 'inline-flex' : 'none')} !important;
  }
`;
