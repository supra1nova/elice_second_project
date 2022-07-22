import React, {useEffect, useState, useMemo} from 'react';
import * as API from '../../../api/api';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import Paging from '../../atoms/Pagination/Pagination';
import * as UI from './style';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { SELECT_TIME, LABELTITLE, BUTTON } from '../../../constants/input';

const ReserveList = () => {
    const [reserveLists, setReserveLists] = useState<any>([]);
    const [pages, setPages] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [total, setTotal] = useState(10);
    const [selectDate, setSelectDate] = useState(new Date());

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => reserveLists, [reserveLists])

    // 삭제버튼
    function handleClick(cell: any) {
        const timeId: number = cell[0].value
        try {
            API.delete('/api/times', '', { timeId });
            alert('삭제되었습니다.')
            window.location.replace('/account/booking');
        } catch (err: any) {
            console.error(err);
        }
    }

    useEffect(() => {
        const REGNumber = localStorage.getItem('REGNumber');
        API.get(`/api/times/?REGNumber=${REGNumber}&year=${selectDate.getFullYear()}&month=${selectDate.getMonth() + 1}&date=${selectDate.getDate()}`).then((res) => {
            if(res) {
                console.log(res)
                setPerPage(res.perPage)
                setTotal(res.total)

                res.forEach((data:any) => {
                    setReserveLists((result:any) => {
                        return [
                            ...result,
                            {
                                timeId: data.timeId,
                                date: `${data.year}년 ${data.month}월 ${data.date}일`,
                                hour: `${data.hour}:00`,
                            }
                        ]}
                    )
                })
            }
        });
    }, [])

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
                        <UI.StyledTd role="cell">
                            <UI.TableButton onClick={() => handleClick(row.cells)}>삭제</UI.TableButton>
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
  
  export default ReserveList;