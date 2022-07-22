import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
    width: 387px;
    border-top: 1px solid ${(props) => props.theme.colors.line};
    padding: 20px 0 0;
    color: ${(props) => props.theme.colors.font1};
    ${(props) => props.theme.font.subtitle1}
`;

export const FormName = styled.div`
  margin-bottom: 6px;
  ${(props) => props.theme.font.subtitle2}
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 6px 6px;
  border: 1px solid #E5E5E5;

  &:focus {
    outline: none !important;
    border: 1px solid #64AD57;
  }
`
export const Info = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.font3};
  padding: 6px 0 10px;
  text-align: end;
`

export const StyleInputFileImage = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
> p {
  margin-bottom: 0;
}
& label {
  width: 100px;
  text-align: center;
  background: ${(props) => props.theme.colors.main1};
  color: ${(props) => props.theme.colors.white};
}
`;

export const StyleInputFilePreview = styled.div`
display: flex;

> div {
  margin-right: 10px;
  margin-top: 26px;
}
> div:last-child {
  margin-right: 0;
}
img {
  min-height: 100px;
}
`;