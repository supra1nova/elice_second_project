import React, { useState, useEffect, useMemo } from 'react';
import AccountHeader from '../../molecules/AccountHeader';
import { SECTION } from '../../../constants/title';
import * as UI from './style';
import Table from './MenuTable';
import * as API from '../../../api/api';

const AccountMenusList = ({ email, render, setRender }: any) => {
  console.log(render);
  const [a, setA] = useState(true);
  const [menus, setMenus] = useState<any>([]);
  const getData = async () => {
    const shop = await API.userGet('/api/restaurants/owner');
    const result = await API.get(`/api/menus/${shop.REGNumber}`);
    setMenus([...result]);
  };
  useEffect(() => {
    getData();
    setA(true);
  }, [render, a]);

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
      {
        accessor: 'manage',
        Header: '관리',
      },
    ],
    [],
  );

  const data = useMemo(
    () =>
      menus.map((e: any) => ({
        menuId: e.menuId,
        name: e.name,
        price: e.price,
        manage: (
          <button
            onClick={async () => {
              const menuId = e.menuId;
              const data = { email, menuId };
              await API.delete('/api/menus', '', data);
              setA(false);
            }}
            style={{
              color: 'white',
              backgroundColor: '#64AD57',
              borderRadius: '23px',
              width: '50px',
            }}
          >
            삭제
          </button>
        ),
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
