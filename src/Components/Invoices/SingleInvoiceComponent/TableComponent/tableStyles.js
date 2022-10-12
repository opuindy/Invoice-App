import styled from 'styled-components';

const borderRadius = '10px';

export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius};

  background: ${({ theme }) => theme.editBtnBackground};
`;

export const TableContainer = styled.div`
  width: 100%;
  min-height: 90px;
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  align-items: center;

  table {
    width: 100%;
  }
  th {
    height: 3em;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 400;
  }
  td {
    height: 1.5em;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 700;
  }

  td:first-child {
    color: ${({ theme }) => theme.color};
  }
  td:last-child {
    color: ${({ theme }) => theme.color};
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;

  background: ${({ theme }) => theme.totalContainerBackground};
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};

  .amount {
    color: #fff;
    font-size: 1rem;
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 410px) {
      font-size: 1rem;
    }
  }

  .total {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 410px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8em;
  &:last-child {
    margin-bottom: 0;
  }

  div {
    width: max-content;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .item_name {
      font-size: 0.9rem;
      margin-right: auto;
      color: ${({ theme }) => theme.color};
      text-transform: capitalize;
      font-weight: 500;
    }
    .price {
      font-size: 0.9rem;
      text-align: left;
      margin-right: auto;
      text-transform: capitalize;
      font-weight: 500;
      letter-spacing: normal;
      min-width: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .multiply {
        height: 80%;
        font-size: 0.7rem;
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .total {
    font-size: 1rem;
    margin-left: auto;
    color: ${({ theme }) => theme.color};
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: normal;
  }
`;

export const MobileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
