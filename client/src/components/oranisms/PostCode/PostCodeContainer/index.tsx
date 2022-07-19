import React from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

interface Props {
  props: any;
}

const PostCodeContainer = () => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
  };

  const PostCodeStyle = styled.div`
  display: 'block',
  position: 'absolute',
  top: '10%',
  width: '600px',
  height: '600px',
  padding: '7px',
  `;

  return (
    <PostCodeStyle>
      <DaumPostcode onComplete={handlePostCode} />
    </PostCodeStyle>
  );
};

export default PostCodeContainer;
