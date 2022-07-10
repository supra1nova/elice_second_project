import { Link } from 'react-router-dom';
import { Gnb } from '../components/oranisms/Gnb';
import styled from 'styled-components';
import WeekBestCard from '../components/molecules/Card/MainCardWithReview/MainCardWithReview';
import CardWithoutReview from '../components/molecules/Card/MainCardWithoutReview/MainCardWithoutReview';
import RecentReviewCard from '../components/molecules/Card/SideBarCard/RecentReviewCard';
import ReservationListCard from '../components/molecules/Card/SideBarCard/ReservationListCard';

export const Home = () => {
  return (
    <>
      <WeekBestCard></WeekBestCard>
      <RecentReviewCard></RecentReviewCard>
      <ReservationListCard></ReservationListCard>
      <CardWithoutReview large={false}></CardWithoutReview>
      <CardWithoutReview large></CardWithoutReview>
    </>
  );
};
