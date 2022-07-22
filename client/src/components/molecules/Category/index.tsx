import React, { useState } from 'react';
import * as UI from './style';
import * as CategoryIcon from '../../../assets/svg/categoryIcon';

const Items = [
  {
    component: <CategoryIcon.KFood width={25} />,
    name: 'KFood',
    title: '한정식',
  },
  {
    component: <CategoryIcon.Meat width={25} />,
    name: 'Meat',
    title: '육류,고기요리',
  },
  {
    component: <CategoryIcon.SeaFood width={25} />,
    name: 'SeaFood',
    title: '해물,생선요리',
  },
  {
    component: <CategoryIcon.DiningBar width={25} />,
    name: 'DiningBar',
    title: '다이닝바',
  },
  {
    component: <CategoryIcon.Chicken width={25} />,
    name: 'Chicken',
    title: '닭,오리요리',
  },
  {
    component: <CategoryIcon.Buffet width={25} />,
    name: 'Buffet',
    title: '뷔페',
  },
  {
    component: <CategoryIcon.CourseMeal width={25} />,
    name: 'CourseMeal',
    title: '코스요리',
  },
  {
    component: <CategoryIcon.Family width={25} />,
    name: 'Family',
    title: '패밀리레스토랑',
  },
  {
    component: <CategoryIcon.Cafe width={25} />,
    name: 'Cafe',
    title: '카페,디저트',
  },
  {
    component: <CategoryIcon.Vegan width={25} />,
    name: 'Vegan',
    title: '베지테리안/비건',
  },
  {
    component: <CategoryIcon.Brunch width={25} />,
    name: 'Brunch',
    title: '브런치',
  },
  {
    component: <CategoryIcon.Noodle width={25} />,
    name: 'Noodle',
    title: '국수,냉면',
  },
  {
    component: <CategoryIcon.Pizza width={25} />,
    name: 'Pizza',
    title: '피자',
  },
  {
    component: <CategoryIcon.Pasta width={25} />,
    name: 'Pasta',
    title: '파스타',
  },
];

const Category = ({ setSelect }: any) => {
  let widthValue = 25;
  const [currTab, setCurrTab] = useState('');

  function handleClick(title: string) {
    setCurrTab(title);
    setSelect(title);
    if (currTab === title) {
      setCurrTab('');
      setSelect('');
    }
  }
  return (
    <UI.Container>
      {Items.map((item, idx) => {
        return (
          <UI.ItemWrapper
            key={`${item}-${idx}`}
            active={currTab === item.title}
            onClick={() => handleClick(item.title)}
          >
            {item.component}
            {item.title}
          </UI.ItemWrapper>
        );
      })}
    </UI.Container>
  );
};

export default Category;
