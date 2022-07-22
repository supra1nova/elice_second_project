import React, {useEffect, useState, useMemo} from 'react';
import * as API from '../../../api/api';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import Paging from '../../atoms/Pagination/Pagination';
import * as UI from './style';

const BookingList = () => {
    // 1: reserveId, name, email, number, phoneNumber, comment
    // 2: date
    const [reserveLists, setReserveLists] = useState<any>([]);
    const [timeId, setTimeId] = useState<number[]>([]);
    const [date, setDate] = useState<string[]>([]);

    const [pages, setPages] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [total, setTotal] = useState(10);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => reserveLists, [reserveLists])

    // 삭제버튼
    function handleClick(cell: any) {
        const reserveId: number = cell[0].value
        const email:string = cell[2].value
        console.log(email)
        const data = {reserveId, email}
        try {
            API.delete('/api/reserves', '', data);
            alert('예약이 삭제되었습니다.')
            window.location.replace('/account/booking');
        } catch (err: any) {
            console.error(err);
        }
    }

    useEffect(() => {
        const REGNumber = localStorage.getItem('REGNumber');
        
        API.get(`/api/reserves/owner/${REGNumber}`).then((res) => {
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
                            email: data.email,
                            number: data.number,
                            phoneNumber: data.phoneNumber,
                            comment: data.comment
                        }
                    ]}
                )
                setTimeId((result: any) => [...result, data.timeId])
            })
          });
    }, [])

    useEffect(() => {
        timeId.forEach((data: any) => {
            API.get(`/api/times/${data}`).then((res) => {
                setDate((result: any) => [...result, `${res[0].year}년 ${res[0].month}월 ${res[0].date}일 ${res[0].hour}시`])
            })
        })
    }, [reserveLists])

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
                        {headerGroup.headers.map((column: any, index: number) => (
                            <UI.StyledTh {...column.getHeaderProps()} key={index}>
                                {column.render('Header')}
                            </UI.StyledTh>
                        ))}
                        <UI.StyledTh>예약날짜</UI.StyledTh>
                        <UI.StyledTh>관리</UI.StyledTh>
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {page.map((row: any) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell: any, index: number) => {
                                return (
                                    <UI.StyledTd key={`${cell}-${index}`} {...cell.getCellProps()}>{cell.render('Cell')}</UI.StyledTd>
                                );
                            })}
                            <UI.StyledTd role="cell">{date[row.id]}</UI.StyledTd>
                            <UI.StyledTd role="cell">
                                <UI.TableButton onClick={() => handleClick(row.cells)}>예약 삭제</UI.TableButton>
                            </UI.StyledTd>
                        </tr>
                    );
                })}
            </tbody>
        </UI.StyledTable>
        <Paging page={pages} setPage={setPages} total={total} perPage={perPage} />
    </div>
    );
  };
  
  export default BookingList;