import styled from 'styled-components';
import testImg from '../../../assets/images/testImg.png';

export const Img = styled.img`
  height: inherit;
  width: inherit;
`;

Img.defaultProps = {
  src: testImg,
};
