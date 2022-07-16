import ToSearch from '../../components/molecules/Search/SearchBtn';
import Category from '../../components/molecules/Category';
import MainShopList from '../../components/oranisms/MainShopList';
import { useState } from 'react';
import SearchBar from '../../components/oranisms/SearchBar';

// import LocationFilter from '../components/molecules/Search/filterSearch/LocationFilter';
// import PriceFilter from '../components/molecules/Search/filterSearch/PriceFilter';
// import TimeFilter from '../components/molecules/Search/filterSearch/TimeFilter';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);
  return (
    <>
      <SearchBar setInputvalue={setInputValue} />
      <Category />
      <MainShopList inputValue={inputValue} />
      {/* <SearchInputOnly />
      <FilterSearch />
      <TimeFilter /> */}
      {/* <WeekBestCard></WeekBestCard> */}
      {/* <RecentReviewCard></RecentReviewCard>
      <ReservationListCard></ReservationListCard>
      <CardWithoutReview large={false}></CardWithoutReview>
      <CardWithoutReview large></CardWithoutReview> */}
    </>
  );
};

export default Home;
