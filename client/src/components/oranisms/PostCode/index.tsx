// import React from 'react';
// import DaumPostcodeEmbed from 'react-daum-postcode';

// interface Props {
//   onComplete: any;
// }

// const Postcode = ({ onComplete }: Props) => {
//   const handleComplete = (data: any) => {
//     let fullAddress = data.address;
//     let extraAddress = '';

//     if (data.addressType === 'R') {
//       if (data.bname !== '') {
//         extraAddress += data.bname;
//       }
//       if (data.buildingName !== '') {
//         extraAddress +=
//           extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
//       }
//       fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
//     }

//     console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
//   };

//   return <DaumPostcodeEmbed onComplete={handleComplete} {...props} />;
// };

// export default Postcode;

import React from 'react';

export const index = () => {
  return <div>index</div>;
};
