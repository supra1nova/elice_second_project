import styled from 'styled-components';
import * as UI from './style';
import { Link } from 'react-router-dom';
import * as ICON from '../../../../assets/svg';

const GNBNotUser = () => {
  return (
    <>
      <UI.Description>
        회원가입 후 TEAM 3와 함께
        <br /> 근사한 식사를 준비해보세요!
      </UI.Description>
      <UI.ButtonWrapper>
        <Link to='/users/register'>
          <UI.BtnMenu name='register'>
            회원가입
            <ICON.Arrow fill={'white'} />
          </UI.BtnMenu>
        </Link>
        <Link to='/users/login'>
          <UI.BtnMenu name='login'>
            로그인
            <ICON.Arrow />
          </UI.BtnMenu>
        </Link>
      </UI.ButtonWrapper>
    </>
  );
};

export default GNBNotUser;
