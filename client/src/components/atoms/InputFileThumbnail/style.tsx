import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Label = styled.label`
  display: inline-block;
  width: 100px !important;
  height: 100px !important;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.main4};
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.2105 6.31579V10.0926C20.2105 10.0926 17.6968 10.1053 17.6842 10.0926V6.31579H13.8947C13.8947 6.31579 13.9074 3.80211 13.8947 3.78947H17.6842V0H20.2105V3.78947H24V6.31579H20.2105ZM16.4211 11.3684V7.57895H12.6316V3.78947H2.52632C1.13684 3.78947 0 4.92632 0 6.31579V21.4737C0 22.8632 1.13684 24 2.52632 24H17.6842C19.0737 24 20.2105 22.8632 20.2105 21.4737V11.3684H16.4211ZM2.52632 21.4737L6.31579 16.4211L8.8421 20.2105L12.6316 15.1579L17.6842 21.4737H2.52632Z' fill='%23A6A8A3'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.line};
`;

export const File = styled.div``;

export const Delete = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Image = styled.div``;

export const Preview = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 5px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
