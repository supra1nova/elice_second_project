import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heart from '../../../assets/svg/Heart';
import * as API from '../../../api/api';

// delete 기능 수정된 거 기반으로 해야함. (백에서 수정 시)
const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 95;
`;

const LikeBtn = ({ regNumber, email }: any) => {
  const [liked, setLiked] = useState('#A6A8A3');
  const postData = { email, REGNumber: regNumber };

  function handleClick() {
    liked === '#A6A8A3' ? setLiked('#FB5E64') : setLiked('#A6A8A3');
  }
  useEffect(() => {
    if (liked === '#FB5E64') {
      API.post('/api/wishes', '', postData).then((res) => console.log(res));
    } else {
    }
  }, [liked]);

  return (
    <ButtonWrapper>
      <button
        onClick={() => {
          if (localStorage.getItem('token')) {
            handleClick();
            console.log('asdf');
          }
        }}
      >
        <Heart width={23.69} height={22} fill={liked} />
      </button>
    </ButtonWrapper>
  );
};

export default LikeBtn;
