import { Link } from 'react-router-dom';
import { Gnb } from '../components/oranisms/Gnb';
import styled from 'styled-components';
import WeekBestCard from '../components/molecules/Card/CardHorizontal/WeekBestCard';
import ShopCardVertical from '../components/molecules/Card/CardVertical/ShopCardVertical';

export const Home = () => {
  return (
    <>
      <WeekBestCard></WeekBestCard>
      <ShopCardVertical large={false}></ShopCardVertical>
      <ShopCardVertical large></ShopCardVertical>
    </>
  );
};
