import styled from 'styled-components';

const colorPurp = '#7c5dfa;';
const colorLightPurp = '#9277ff';
const mainTransition = `all 0.3s linear`;

export const InvoiceContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 11vh);
  margin-top: 11vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2em;
  transition: ${mainTransition};
  @media screen and (min-width: 1204px) {
    min-height: 100vh;
    margin-top: 0;
    margin-left: 100px;
    width: calc(100vw - 100px);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 11vh;
  margin: 3em auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 4em;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .title {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-right: auto;
      font-size: 1.5rem;
      text-align: left;
      margin-right: 0.5em;

      &:hover {
        cursor: pointer;
      }
      @media screen and (min-width: 768px) {
        width: 10rem;
        font-size: 2.3rem;
      }
    }
    p {
      margin-right: auto;
      text-align: left;
    }
  }

  .filter_new {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      height: 3.3rem;
      width: 6.5rem;
      border-radius: 50px;
      padding: 1.1em 0.7em;
      padding-right: 1.4em;
      margin-left: 2.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      outline: none;
      color: white;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 0.9rem;
      background: ${colorPurp};
      transition: ${mainTransition};

      @media screen and (max-width: 410px) {
        margin-left: 0.5em;
      }
      @media screen and (min-width: 768px) {
        width: 9.2rem;
        font-size: 0.8rem;
        padding-right: 1.4em;
        height: 3.3rem;
      }
    }
    button:hover {
      background: ${colorLightPurp};
      cursor: pointer;
    }

    p {
      text-transform: capitalize;
      font-weight: bold;
      color: ${({ theme }) => theme.color};

      .span {
        margin-left: 1.3em;
        .img {
          transition: ${mainTransition};
          transform: ${(props) =>
            props.openFilterModal ? 'rotate(-180deg)' : 'rotate(0deg)'};
        }
        @media screen and (max-width: 410px) {
          margin-left: 0.5em;
        }
      }
      &:hover {
        cursor: pointer;
      }
      @media screen and (max-width: 410px) {
        margin-right: 0.5em;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 8vh;
  }
`;

export const Span = styled.span`
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  background: white;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;
