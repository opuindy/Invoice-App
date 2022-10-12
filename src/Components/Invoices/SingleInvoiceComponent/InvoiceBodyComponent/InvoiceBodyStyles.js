import styled from 'styled-components';

const borderRadius = '10px';
const colorLightPurp = '#9277ff';

export const Container = styled.div`
  width: 100%;
  min-height: calc(60vh - 110px);
  margin-top: 25px;
  margin-bottom: 90px;
  padding: 3em 2em;
  background: ${({ theme }) => theme.invoiceBackgroundColor};
  box-shadow: 10px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: ${borderRadius};
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const BillFromContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2em;

  .id_item_name {
    margin-bottom: 2em;
    .id {
      font-size: 0.9rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color};
      text-align: left;
      margin-bottom: 0.5em;
      span {
        color: ${colorLightPurp};
      }
      @media screen and (min-width: 768px) {
        font-size: 0.9rem;
      }
    }

    p {
      text-transform: capitalize;
      font-size: 0.9rem;
    }
  }

  .from_address_container {
    p {
      text-transform: capitalize;
      font-size: 0.83rem;
      margin-bottom: 0.5em;
      @media screen and (min-width: 768px) {
        text-align: right;
        margin-left: auto;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BillToContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DateAddedContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

export const DatePayment = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;

  .date {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;

    p {
      text-transform: capitalize;
      font-size: 0.9rem;
      margin-bottom: 1em;
      text-align: left;
      margin-right: auto;
    }
    .dates {
      font-size: 1rem;
      font-weight: bold;
      text-align: left;
      margin-right: auto;
      color: ${({ theme }) => theme.color};
      margin-bottom: 0;
      @media screen and (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  .payment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p {
      text-transform: capitalize;
      font-size: 0.9rem;
      margin-bottom: 1em;
      text-align: left;
      margin-right: auto;
    }
    .dates {
      font-size: 1rem;
      font-weight: bold;
      text-align: left;
      margin-right: auto;
      color: ${({ theme }) => theme.color};
      margin-bottom: 0;
      @media screen and (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

export const BillTo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: auto;
  margin-left: 3em;

  .bill_to {
    margin-bottom: auto;
    text-transform: capitalize;
    margin-bottom: 1em;
  }

  .customer_name {
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.color};
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    text-transform: capitalize;
    font-size: 0.9rem;
    margin-bottom: 0.5em;
    text-align: left;
    margin-right: auto;
  }
  @media screen and (max-width: 410px) {
    margin-left: 2em;
  }
  @media screen and (min-width: 768px) {
    margin-left: 6em;
  }
`;

export const AddEmail = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p {
    text-transform: capitalize;
    font-size: 0.9rem;
    margin-bottom: 1em;
    text-align: left;
    margin-right: auto;
  }

  .email {
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color};
    margin-bottom: 0;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    margin-right: 4em;
  }
`;
