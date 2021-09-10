import styled from 'styled-components';
import Wrapper from './Wrapper';

export const CustomWrapper = styled(Wrapper)`
  background-color: ${props => (props.primary ? '#39306f' : props.secondary ? '#10d1d3' : props.backgroundColor)};
  color: ${props => (props.primary ? '#39306f' : props.secondary ? '#10d1d3' : props.color)};
  padding: 50px 0;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
