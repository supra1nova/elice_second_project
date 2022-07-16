import React, { useState } from 'react';
import styled from 'styled-components';
import Heart from '../../../assets/svg/Heart';

//onclick => 유저의 찜목록으로 넘거가도록 + 색상 변화

const LikeBtn = () => {
  const [liked, setLiked] = useState('#A6A8A3');
  function handleClick() {
    liked === '#A6A8A3' ? setLiked('#FB5E64') : setLiked('#A6A8A3');
  }
  return (
    <>
      <button onClick={handleClick}>
        <Heart width={23.69} height={22} fill={liked} />
      </button>
    </>
  );
};

export default LikeBtn;
