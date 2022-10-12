import styled from 'styled-components';
import { images } from '../../utils/images';

const borderRadius = `20px`;
const colorLightPurp = '#9277ff';
const mainTransition = `all 0.3s linear`;

export const FormModal = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 685px;
  height: 100%;
  padding-right: 2em;
  padding-left: 2em;
  background: ${({ theme }) => theme.background};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .title {
    color: ${({ theme }) => theme.color};
    text-transform: capitalize;
    font-size: 1.6rem;
    margin: 1.3em 0;
    margin-bottom: 1.6em;
    @media screen and (min-width: 1204px) {
      margin: 2em 0;
    }
  }

  @media screen and (max-width: 645px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media screen and (max-width: 1203px) {
    max-width: 630px;
    height: 89vh;
  }

  @media screen and (min-width: 768px) {
    padding-left: 3em;
  }

  @media screen and (min-width: 1204px) {
    padding-left: 8em;
  }
`;

export const GoBackContainer = styled.div`
  width: 4.5rem;
  height: 1rem;
  margin-right: auto;
  margin-top: 1em;
  margin-bottom: 1em;
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

export const FormItem = styled.div`
  width: 100%;
  height: 550px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 2em;

  .bill_section,
  .bill_to_section,
  .item_list_section {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      text-transform: capitalize;
      font-size: 0.95rem;
      margin-bottom: 1.5em;
    }
  }
  @media screen and (max-width: 1203px) {
    max-width: 630px;
    height: 500px;
  }

  @media screen and (max-width: 428px) {
    height: 600px;
  }

  .bill_to_section {
    margin-top: 3em;
  }
  .item_list_section {
    margin-top: 3em;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 70px 70px 70px;
  gap: 20px;
  transition: ${mainTransition};

  .address,
  .city,
  .post_code,
  .country {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: ${mainTransition};
  }

  .address {
    grid-column: 1/-1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .city {
    grid-column: 1/2;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 1/2;
    }
  }

  .post_code {
    grid-column: 2/3;

    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 2/3;
    }
  }

  .country {
    grid-column: 1/-1;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 3/4;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 70px 70px;
  }
`;

export const InputGroup2 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 70px);
  gap: 20px;

  .name,
  .email,
  .address,
  .city,
  .post_code,
  .country,
  .date,
  .payment_terms,
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: ${mainTransition};
  }

  .name {
    grid-column: 1/-1;
    border-radius: 5px;
  }

  .email {
    grid-column: 1/-1;
    border-radius: 5px;
  }

  .address {
    grid-column: 1/-1;
    border-radius: 5px;
  }

  .city {
    grid-column: 1/2;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 1/3;
    }
  }

  .post_code {
    grid-column: 2/3;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 3/5;
    }
  }

  .country {
    grid-column: 1/-1;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 5/7;
    }
  }

  .date {
    grid-column: 1/2;
    border-radius: 5px;
    position: relative;

    svg {
      display: block;
      position: absolute;
      top: 65%;
      right: 1.5em;
      transform: translateY(-50%);
    }
    @media screen and (min-width: 768px) {
      grid-column: 1/4;
    }
  }

  .payment_terms {
    grid-column: 2/3;
    border-radius: 5px;
    position: relative;

    img {
      display: block;
      position: absolute;
      top: 60%;
      right: 1.5em;
      transition: all 0.2s linear;
      transform: ${(props) =>
        props.downIcon ? 'rotate(-180deg)' : 'rotate(0deg)'};
    }
    @media screen and (min-width: 768px) {
      grid-column: 4/7;
    }
  }

  .description {
    grid-column: 1/-1;
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 70px);
  }
`;

export const InputGroup3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, 70px);
  gap: 20px;
  margin-bottom: 1.5em;

  .name,
  .quantity,
  .price,
  .total {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: ${mainTransition};
  }

  .name {
    grid-column: 1/-1;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 1/6;
    }
  }

  .quantity {
    grid-column: 1/3;
    border-radius: 5px;

    @media screen and (min-width: 768px) {
      grid-column: 6/8;
    }
  }

  .price {
    grid-column: 3 / 6;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      grid-column: 8/11;
    }
  }
  .total {
    grid-column: 6 / 9;
    border-radius: 5px;

    .total_container {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .totals {
        width: 75%;
      }

      .total_input {
        border: none;
        outline: none;
        background: none;
        padding-left: 0;
      }

      .icon {
        height: 0.9rem;
        width: 0.8rem;
        margin: auto 0;
        margin-top: 2.7em;
        background: url(${images.delete});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: ${mainTransition};
        &:hover {
          cursor: pointer;
          background: url(${images.deleteHover});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          transition: ${mainTransition};
        }
      }
    }

    @media screen and (min-width: 768px) {
      grid-column: 11/-1;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(1, 70px);
  }
`;

export const Button = styled.button`
  margin-top: 1.5em;
  width: 100%;
  padding: 1.3em;
  border-radius: 50px;
  color: ${({ theme }) => theme.editColor};
  font-weight: 700;
  background: ${({ theme }) => theme.editBtnBackground};
  transition: ${mainTransition};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    background: #dfe3fa;
    color: ${({ theme }) => theme.editHoverColor};
  }
`;
