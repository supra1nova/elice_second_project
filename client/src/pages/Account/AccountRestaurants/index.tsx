import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

function AccountRestaurants() {
  return (
    <div>
      <div>
        레스토랑 내용 들어갑니다~ 레스토랑 내용 들어갑니다레스토랑 내용
        들어갑니다레스토랑 내용 들어갑니다레스토랑 내용 들어갑니다레스토랑 내용
        들어갑니다레스토랑 내용 들어갑니다 레스토랑 내용 들어갑니다~ 레스토랑
        내용 들어갑니다레스토랑 내용 들어갑니다레스토랑 내용 들어갑니다레스토랑
        내용 들어갑니다레스토랑 내용 들어갑니다레스토랑 내용 들어갑니다
      </div>
      <Popup>
        <div
          style={{
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          팝업 테스트요 임시로 넣은거예여~
        </div>
      </Popup>
    </div>
  );
}

export default AccountRestaurants;
