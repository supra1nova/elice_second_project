import React, { useState, useEffect, useMemo } from 'react';
import AccountHeader from '../../molecules/AccountHeader';
import { SECTION } from '../../../constants/title';
import * as UI from './style';
import Table from './MenuTable';
import * as API from '../../../api/api';

const AccountMenusList = ({ email }: any) => {
  const [menus, setMenus] = useState<any>([]);
  const getData = async () => {
    const shop = await API.userGet('/api/restaurants/owner');
    const result = await API.get(`/api/menus/${shop.REGNumber}`);
    setMenus([...result]);
  };
  useEffect(() => {
    getData();
  }, []);

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
    [menus],
  );

  return (
    <UI.Container>
      <AccountHeader title={SECTION.MENU_MANAGEMENT} />
      <Table columns={columns} data={data} />
    </UI.Container>
  );
};

export default AccountMenusList;
