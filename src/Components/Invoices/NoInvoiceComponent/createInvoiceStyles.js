import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }

  h2 {
    color: ${({ theme }) => theme.color};
    font-size: 1.5rem;
    margin: 1em;
  }

  p {
    color: ${({ theme }) => theme.regularText};
    font-size: 0.9rem;
    text-align: center;
    width: 75%;

    span {
      font-weight: 700;
    }

    @media screen and (min-width: 768px) {
      width: 58%;
    }
  }
`;
