import React from 'react';
import styled from 'styled-components';
import Heart from '../../assets/svg/Heart';

//onclick => 유저의 찜목록으로 넘거가도록 + 색상 변화

const LikeBtn = () => {
  return (
    <>
      <button>
        <Heart width={23.69} height={22} />
      </button>
    </>
  );
};

export default LikeBtn;
