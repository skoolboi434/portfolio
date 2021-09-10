import styled from 'styled-components';
import CustomButton from './Button';

export const PrimaryButton = styled(CustomButton)`
  background: linear-gradient(90deg, rgba(10, 186, 181, 1) 35%, rgba(10, 186, 93, 1) 100%);
  background-clip: padding-box;
  color: #fff;
  box-shadow: $box-shadow;
  &:hover {
    background: #fff;
    background-clip: padding-box;
    color: #000;
  }
  &:after {
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background: $gradient;
    content: '';
    z-index: -1;
    border-radius: 4px;
  }
`;

export const SecondaryButton = styled(CustomButton)`
  background: linear-gradient(90deg, rgba(10, 186, 181, 1) 35%, rgba(10, 186, 93, 1) 100%);
  background-clip: padding-box;
  color: #fff;
  box-shadow: $box-shadow;
  &:hover {
    background: #fff;
    background-clip: padding-box;
    color: #000;
  }
  &:after {
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background: $gradient;
    content: '';
    z-index: -1;
    border-radius: 4px;
  }
`;
