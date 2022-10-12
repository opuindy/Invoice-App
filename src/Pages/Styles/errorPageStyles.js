import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    margin-top: 2em;
    @media screen and (min-width: 768px) {
      font-size: 5rem;
    }
  }
  p {
    text-align: center;
    font-size: 1rem;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  a {
    margin-top: 1em;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;
