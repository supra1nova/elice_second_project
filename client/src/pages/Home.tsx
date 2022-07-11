import { Link } from 'react-router-dom';
import WeekBestCard from '../components/molecules/Card/MainCardWithReview/MainCardWithReview';
import CardWithoutReview from '../components/molecules/Card/MainCardWithoutReview/MainCardWithoutReview';
import RecentReviewCard from '../components/molecules/Card/SideBarCard/RecentReviewCard';
import ReservationListCard from '../components/molecules/Card/SideBarCard/ReservationListCard';
import SearchInputOnly from '../components/molecules/Search/filterSearch/inputOnly';
import FilterSearch from '../components/molecules/Search/filterSearch';
import ToSearch from '../components/molecules/Search/SearchBtn';
import CategoryFilter from '../components/molecules/Search/filterSearch/CategoryFilter';
// import LocationFilter from '../components/molecules/Search/filterSearch/LocationFilter';
// import PriceFilter from '../components/molecules/Search/filterSearch/PriceFilter';
// import TimeFilter from '../components/molecules/Search/filterSearch/TimeFilter';

export const Home = () => {
  return (
    <>
      <ToSearch />
      <SearchInputOnly />
      <FilterSearch />
      {/* <CategoryFilter /> */}
      <WeekBestCard></WeekBestCard>
      <RecentReviewCard></RecentReviewCard>
      <ReservationListCard></ReservationListCard>
      <CardWithoutReview large={false}></CardWithoutReview>
      <CardWithoutReview large></CardWithoutReview>
    </>
  );
};
