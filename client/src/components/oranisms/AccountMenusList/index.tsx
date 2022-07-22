import React, { useState, useEffect, useMemo } from 'react';
import AccountHeader from '../../molecules/AccountHeader';
import { SECTION } from '../../../constants/title';
import * as UI from './style';
import Table from './MenuTable';
import * as API from '../../../api/api';

const AccountMenusList = () => {
  const [menus, setMenus] = useState([]);
  const getData = async () => {
    const result = await API.get(`/api/menus/12345678`);
    setMenus(result);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(menus);
  const columns = useMemo(
    () => [
      {
        accessor: 'menuId',
        Header: '#',
      },
      {
        accessor: 'name',
        Header: '메뉴명',
      },
      {
        accessor: 'price',
        Header: '가격',
      },
      // {
      //   accessor: 'phone',
      //   Header: '관리',
      // },
    ],
    [],
  );

  const data = useMemo(
    () =>
      menus.map((e: any) => ({
        menuId: e.menuId,
        name: e.name,
        price: e.price,
      })),
    [],
  );
  if (menus.length > 0) {
    return (
      <UI.Container>
        <AccountHeader title={SECTION.MENU_MANAGEMENT} />
        <Table columns={columns} data={data} />
      </UI.Container>
    );
  } else {
    return (
      <UI.Container>
        <AccountHeader title={SECTION.MENU_MANAGEMENT} />
      </UI.Container>
    );
  }
};

export default AccountMenusList;
