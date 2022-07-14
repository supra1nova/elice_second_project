import React, { useState, useEffect } from 'react';
import LNBItem from '../../atoms/LNBItem';
import * as UI from './style';

interface Props {
  items: string[];
  tabIndex?: number;
  onTabClicked?: (tabIndex: number) => void;
}

const LNB = ({ items, tabIndex = 1, onTabClicked }: Props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(tabIndex);

  useEffect(() => {
    setCurrentTabIndex(tabIndex);
  }, [tabIndex]);

  return (
    <UI.Container key={currentTabIndex}>
      {items.map((item, index) => (
        <LNBItem
          key={index}
          active={currentTabIndex - 1 === index}
          children={item}
          onClick={(): void => {
            setCurrentTabIndex(index + 1);
            onTabClicked && onTabClicked(index + 1);
          }}
        />
      ))}
    </UI.Container>
  );
};

export default LNB;
