import React, { useEffect, useState } from 'react';
import Heart from '../../../assets/svg/Heart';
import * as API from '../../../api/api';
import * as UI from './style';
import { useNavigate } from 'react-router-dom';

const LikeBtn = ({ regNumber, email, isWished, position }: any) => {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [likedColor, setLikedColor] = useState('#A6A8A3');
  const postData = { email, REGNumber: regNumber };

  const [role, setRole] = useState<string | null | undefined>(null)
  const isNotUser = role === undefined
  const isUser = role === 'user' || role === 'USER'

  console.log(role)
  console.log(isNotUser)

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      if(res === undefined) {
        setRole(undefined)
      } else {
        setRole(res.role)
      }
    });
  })

  useEffect(() => {
    if (isWished) {
      setLiked(true);
      setLikedColor('#FB5E64');
    }
  }, [isWished, liked]);

  function handleClick() {
    liked === false ? setLiked(true) : setLiked(false);
    if (liked) {
      API.delete('/api/wishes', '', postData).then((res) => res);
      setLikedColor('#A6A8A3');
    } else {
      API.post('/api/wishes', '', postData).then((res) => res);
      setLikedColor('#FB5E64');
    }
  }

  return (
    <UI.ButtonWrapper position={position}>
      {
        isNotUser
        ? <button onClick={() => navigate('/users/login')}>
          <Heart width={23.69} height={22} fill={likedColor} />
        </button>
        : isUser
        ? <button
            onClick={() => {
              if (localStorage.getItem('token')) {
                handleClick();
              }
            }}
          >
          <Heart width={23.69} height={22} fill={likedColor} />
        </button>
        : null
      }
      
    </UI.ButtonWrapper>
  );
};

export default LikeBtn;
