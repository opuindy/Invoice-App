import styled from 'styled-components';

const borderRadius = '10px';
const mainTransition = `all 0.3s linear`;
const colorLightPurp = '#9277ff';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  height: max-content;
  &:last-child {
    margin-bottom: 20px;
  }

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-auto-rows: 125px;
  @media screen and (min-width: 768px) {
    grid-auto-rows: 95px;
  }
`;

export const InvoiceContainer = styled.article`
  background: ${({ theme }) => theme.invoiceBackgroundColor};
  border-radius: ${borderRadius};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  height: 100%;
  padding: 25px;
  position: relative;
  border: ${colorLightPurp};
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
    border: 1px solid ${colorLightPurp};
  }

  .id {
    color: ${({ theme }) => theme.color};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    text-align: left;
    position: absolute;
    transition: ${mainTransition};

    span {
      color: ${colorLightPurp};
    }

    @media screen and (min-width: 768px) {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .date {
    text-transform: capitalize;
    text-align: left;
    font-size: 0.9rem;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    transition: ${mainTransition};

    @media screen and (min-width: 768px) {
      top: 50%;
      left: 8em;
    }
  }

  .name {
    text-transform: capitalize;
    text-align: left;
    position: absolute;
    right: 25px;
    @media screen and (min-width: 768px) {
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
  }

  .price {
    text-transform: capitalize;
    text-align: left;
    font-weight: bold;
    font-size: 1rem;
    color: ${({ theme }) => theme.color};
    position: absolute;
    top: 76%;
    transform: translateY(-50%);
    transition: ${mainTransition};

    @media screen and (min-width: 768px) {
      top: 50%;
      right: calc(10em + 25px);
    }
  }

  .status {
    height: max-content;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: absolute;
    top: 69%;
    right: 25px;
    transform: translateY(-50%);
    transition: ${mainTransition};

    @media screen and (min-width: 768px) {
      top: 50%;
      right: calc(2em + 25px);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
`;
