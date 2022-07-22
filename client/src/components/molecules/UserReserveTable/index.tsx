import React, { useMemo, useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import * as UI from './style';
import * as API from '../../../api/api';
import Paging from '../../atoms/Pagination/Pagination';

export const UserReserveTable = () => {
    const [reserveLists, setReserveLists] = useState<any>([])
    const [email, setEmail] = useState('')
    const [REGNumber, setREGNumber] = useState<any>([])
    const [timeId, setTimeId] = useState<any>([])
    const [restaurantName, setRestaurantName] = useState<any>([])
    const [date, setDate] = useState<any>([])

    const [pages, setPages] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [total, setTotal] = useState(10);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => reserveLists, [reserveLists])

    // 삭제버튼
    function handleClick(cell: any) {
        console.log(email)
        console.log(cell[0].value)
        const reserveId: number = cell[0].value
        const data = {reserveId, email}
        try {
            API.delete('/api/reserves', '', data);
            alert('예약이 취소되었습니다.')
            window.location.replace('/account/reserves');
        } catch (err: any) {
            console.error(err);
        }
    }

    useEffect(() => {
        API.userGet('/api/users/user').then((res) => {
            if (res) {
                setEmail(res.email);
            }
        });
    }, []);

    useEffect(() => {
        API.userGet(`/api/reserves/user/${email}`).then((res) => {
            setPerPage(res.perPage)
            setTotal(res.total)
            const datas = res.reserves
            datas.forEach((data:any) => {
                setReserveLists((result:any) => {
                    return [
                        ...result,
                        {
                            reserveId: data.reserveId,
                            name: data.name,
                            number: data.number
                        }
                    ]}
                )
                setREGNumber((result: any) => [...result, data.REGNumber])
                setTimeId((result: any) => [...result, data.timeId])
            })
        })
    }, [email])

    useEffect(() => {
        for(let i = 0; i < reserveLists.length; i++) {
            API.userGet(`/api/restaurants/${REGNumber[i]}`).then((res) => {
                setRestaurantName((result: any) => [...result, res.name])
            })
            API.userGet(`/api/times/${timeId[i]}`).then((res) => {
                setDate((result: any) => [...result, `${res[0].year}년 ${res[0].month}월 ${res[0].date}일 ${res[0].hour}시`])
            })
        }
    }, [reserveLists])

    console.log(REGNumber)
    console.log(timeId)
    console.log(restaurantName)
    console.log(date)

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        prepareRow,
    } = useTable({
            // @ts-ignore
            columns,
            data,
        },
        usePagination
    );

    return (
        <div className="table">
            <UI.StyledTable {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup:any, index: number) => (                   
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            <UI.StyledTh>식당이름</UI.StyledTh>
                            {headerGroup.headers.map((column: any, index: number) => (
                                <UI.StyledTh {...column.getHeaderProps()} key={index}>
                                    {column.render('Header')}
                                </UI.StyledTh>
                            ))}
                            <UI.StyledTh>예약날짜</UI.StyledTh>
                            <UI.StyledTh>승인상태</UI.StyledTh>
                            <UI.StyledTh>예약관리</UI.StyledTh>
                            <UI.StyledTh>리뷰</UI.StyledTh>
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row: any) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                <UI.StyledTd role="cell">{restaurantName[row.id]}</UI.StyledTd>
                                {row.cells.map((cell: any, index: number) => {
                                    return (
                                        <UI.StyledTd key={`${cell}-${index}`} {...cell.getCellProps()}>{cell.render('Cell')}</UI.StyledTd>
                                    );
                                })}
                                <UI.StyledTd role="cell">{date[row.id]}</UI.StyledTd>
                                <UI.StyledTd role="cell">예약 완료</UI.StyledTd>
                                <UI.StyledTd role="cell">
                                    <UI.TableButton onClick={() => handleClick(row.cells)}>예약 취소</UI.TableButton>
                                </UI.StyledTd>
                                <UI.StyledTd role="cell"><UI.BtnReview>작성하기</UI.BtnReview></UI.StyledTd>
                            </tr>
                        );
                    })}
                </tbody>
            </UI.StyledTable>
            <Paging page={pages} setPage={setPages} total={total} perPage={perPage} />
        </div>
    );
}

export default UserReserveTable;
