import styled from 'styled-components';

const colorLightPurp = '#9277ff';
const borderRadius = '10px';
const colorViolet = '#5964e0';
const mainTransition = `all 0.3s linear`;

export const GoBackContainer = styled.div`
  width: 5rem;
  height: 3rem;
  margin-right: auto;
  margin-bottom: auto;
  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color};
    &:hover {
      cursor: pointer;
      color: ${colorLightPurp};
    }
  }

  img {
    display: block;
    margin: auto 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const StatusContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 2em;
  margin-top: 2em;
  border-radius: ${borderRadius};
  background: ${({ theme }) => theme.invoiceBackgroundColor};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};

  .status_text {
    font-size: 0.9rem;
    text-transform: capitalize;
    margin-right: 2em;
  }

  .status_container {
    height: 3em;
    width: 7em;
    border-radius: ${borderRadius};
    background: ${colorViolet};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      margin-right: auto;
    }
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.invoiceBackgroundColor};
  box-shadow: 10px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  display: flex;
  justify-content: center;
  align-items: center;
`;
