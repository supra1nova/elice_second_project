import React, { useEffect } from 'react';
import * as UI from './style';
import Img from '../../../../../components/atoms/Img';
import * as Icon from '../../../../../assets/svg';
import Paging from '../../../../../components/atoms/Pagination/Pagination';
import * as API from '../../../../../api/api';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MainCardWithoutReviewProps {
  title: String;
  address: String;
  regNumber: any;
  foodType: string;
}

const AccountLikesUser = ({
  title,
  address,
  regNumber,
  foodType,
}: MainCardWithoutReviewProps) => {
  const navigate = useNavigate();
  const [shop, setShop] = useState<any>([]);
  const [image, setImage] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [postPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);

  const getData = async () => {
    setLoading(true);
    await regNumber.forEach((e: any, idx: any) => {
      API.get(`/api/restaurants/${e}`).then((res) =>
        setShop((prev: any) => {
          return [...prev, res];
        }),
      );
      API.get(`/api/restaurantImages/${e}`).then((res) => {
        if (res[0] === undefined) {
          return;
        } else {
          setImage((prev: any) => {
            return [...prev, res[0]];
          });
        }
      });
    });
    setLoading(false);
  };

  useEffect(() => {
    setShop([]);
    getData();
  }, [regNumber]);

  console.log(loading);

  useEffect(() => {
    setCount(shop.length);
    setIndexOfLastPost(page * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(shop.slice(indexOfFirstPost, indexOfLastPost));
  }, [page, indexOfFirstPost, indexOfLastPost, shop, postPerPage]);

  // console.log(shop);

  return (
    <UI.Container>
      <UI.PageTitle>찜 목록</UI.PageTitle>

      {shop.length > 0 ? (
        <>
          <UI.GridContainer>
            {currentPosts.map((item: any, idx: any) => {
              return (
                <UI.CardContainer
                  key={`${idx}-${item.REGNumber}`}
                  onClick={() => {
                    navigate(`/restaurants/view/${item.REGNumber}`);
                  }}
                >
                  <UI.ImgWrapper>
                    <Img src={image[idx]}></Img>
                  </UI.ImgWrapper>
                  <UI.InfoWrapper>
                    <UI.Title>{item.name}</UI.Title>
                    <UI.SubTitle>
                      {item.address1} - {item.category} -{idx}
                    </UI.SubTitle>
                  </UI.InfoWrapper>
                </UI.CardContainer>
              );
            })}
          </UI.GridContainer>
          <Paging
            page={page}
            perPage={postPerPage}
            total={count}
            setPage={setPage}
          />
        </>
      ) : (
        <div
          style={{
            fontSize: '30px',
            textAlign: 'center',
            marginTop: '350px',
          }}
        >
          Loading... <span style={{ marginLeft: '15px' }}>:(</span>
        </div>
      )}
    </UI.Container>
  );
};

AccountLikesUser.defaultProps = {
  title: '오츠에스프레소',
  address: '판교',
  foodType: '이탈리안음식',
};

export default AccountLikesUser;
