import styled from 'styled-components';

export const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-family: 'Noto Sans CJK KR', sans-serif;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    display: none;
  }
  ul.pagination li:nth-child(2) {
    margin-right: 10px;
  }
  ul.pagination li:nth-last-child(2) {
    margin-left: 10px;
  }

  ul.pagination li:last-child {
    display: none;
  }
  ul.pagination li a {
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #64ad57;
    border-radius: 50%;
  }

  ul.pagination li a.active {
    color: black;
  }
`;
