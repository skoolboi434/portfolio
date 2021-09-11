import styled from 'styled-components';
import IWTBlock from './IWTBlock';

export const CustomIWTBlock = styled(IWTBlock)`
  flex-direction: ${props => (props.reverse ? 'row-reverse' : '')};
`;
