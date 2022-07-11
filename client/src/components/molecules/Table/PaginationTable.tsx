import React, { useMemo } from 'react';
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { usePagination, useTable } from 'react-table'
import styled from 'styled-components';
import { TableButton } from '../../atoms/TableButton'

const BtnReview = styled(TableButton)`
    color: #fff;
    background-color: #64AD57;
`;
const BtnModification = styled(TableButton)`
    background-color: #fff;
    border: 1px solid #E5E5E5;
`;
const StyledTable = styled.table`
    font-family: 'Noto Sans KR';
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    border-color: #E5E5E5;
`
const StyledTh = styled.td`
    border: 1px solid #E5E5E5;
    padding: 8px;
    background-color: #F4F6F3;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`
const StyledTd = styled.td`
    border: 1px solid #E5E5E5;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
`
const StyledTablePagination = styled.div`
    margin: 60px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        prepareRow,
    } = useTable({
            // @ts-ignore
            columns,
            data,
        },
        usePagination
    );

    const { pageIndex } = state

    return (
        <div className="table">
            <StyledTable {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (                   
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <StyledTh {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </StyledTh>
                            ))}
                            <StyledTh>승인상태</StyledTh>
                            <StyledTh>예약관리</StyledTh>
                            <StyledTh>리뷰</StyledTh>
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row: any) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <StyledTd {...cell.getCellProps()}>{cell.render('Cell')}</StyledTd>
                                    );
                                })}
                                <StyledTd role="cell">예약 완료</StyledTd>
                                <StyledTd role="cell">
                                    <BtnModification>수정</BtnModification>
                                    <TableButton>취소</TableButton>
                                </StyledTd>
                                <StyledTd role="cell"><BtnReview>작성하기</BtnReview></StyledTd>
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>

            <StyledTablePagination>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <span>
                    <strong style={{display: 'block', width: '100px', textAlign: 'center'}}>
                        {pageIndex + 1} / {pageOptions.length} 
                    </strong>
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>'}
                </button>
            </StyledTablePagination>
        </div>
    );
}

export default PaginationTable;