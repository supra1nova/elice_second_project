import styled from 'styled-components';
import testImg from '/images/testImg.png';

export const Img = styled.img`
  height: inherit;
  width: inherit;
  object-fit: cover;
`;

Img.defaultProps = {
  src: process.env.PUBLIC_URL + '/images/testImg.png',
};
