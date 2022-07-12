import styled from 'styled-components';

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  ${(props) => props.theme.font.caption}
  color: ${(props) => props.theme.colors.font2}
`;
