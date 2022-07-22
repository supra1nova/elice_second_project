import React, { useMemo, useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import * as UI from './style';
import * as API from '../../../api/api';
import Paging from '../../atoms/Pagination/Pagination';
import PopupReserve from './template/PopupReserve';

export const UserReserveTable = () => {
    const [reserveLists, setReserveLists] = useState<any>([])
    const [email, setEmail] = useState('')
    const [REGNumber, setREGNumber] = useState<any>([])
    const [timeId, setTimeId] = useState<any>([])
    const [restaurantName, setRestaurantName] = useState<any>([])
    const [date, setDate] = useState<any>([])
    const [handleIndex, setHandleIndex] = useState<number>(0)
    const [reserveId, setReserveId] = useState<any>([])
    const [reviewPost, setReviewPost] = useState<boolean[]>([])

    const [pages, setPages] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [total, setTotal] = useState(10);

    const [openPopup, setOpenPopup] = useState(false);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => reserveLists, [reserveLists])

    // 리뷰 팝업 열기 버튼
    const handleOpenPopup = (cell: any) => {
        setHandleIndex(cell.id)
        setOpenPopup(true);
    };

    // 팝업창 닫기 핸들러
    const handleClosePopup = (e: any) => {
        e.preventDefault();
        setOpenPopup(!openPopup);
    };

    // 삭제버튼
    function handleClick(cell: any) {
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
            if(res) {
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
                    setReserveId((result: any) => [...result, data.reserveId])
                })
            }
        })
    }, [email])

    useEffect(() => {
        for(let i = 0; i < reserveLists.length; i++) {
            API.userGet(`/api/restaurants/${REGNumber[i]}`).then((res) => {
                if(res) {
                    setRestaurantName((result: any) => [...result, res.name])
                } else {
                    setRestaurantName((result: any) => [...result, ''])
                }
            })
            API.userGet(`/api/times/${timeId[i]}`).then((res) => {
                if(res && res.length !== 0){
                    setDate((result: any) => [...result, `${res[0].year}년 ${res[0].month}월 ${res[0].date}일 ${res[0].hour}시`])
                }
            })
            API.userGet(`/api/reviews/specific/${reserveId[i]}`).then((res) => {
                console.log(res)
                if(res === null) {
                    setReviewPost((result: any) => [...result, true])
                } else {
                    setReviewPost((result: any) => [...result, false])
                }
            });
        }
    }, [reserveLists])

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
        <>
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
                                    <UI.StyledTd role="cell">
                                        {
                                            reviewPost[row.id]
                                            ? <UI.BtnReview onClick={() => handleOpenPopup(row)}>리뷰 등록</UI.BtnReview>
                                            : null
                                        }
                                    </UI.StyledTd>
                                </tr>
                            );
                        })}
                    </tbody>
                </UI.StyledTable>
                <Paging page={pages} setPage={setPages} total={total} perPage={perPage} />
            </div>
            <PopupReserve
                open={openPopup}
                onClose={handleClosePopup}
                width={'427'}
                titleColor={true}
                title={'리뷰 작성'}
                REGNumber={REGNumber[handleIndex]}
                email={email}
                reserveId={reserveId[handleIndex]}
                restaurantName={restaurantName[handleIndex]}
            />
        </>
    );
}

export default UserReserveTable;
