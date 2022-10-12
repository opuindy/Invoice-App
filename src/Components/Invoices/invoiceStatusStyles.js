import styled from 'styled-components';

const mainTransition = `all 0.3s linear`;

export const StatusContainer = styled.div`
  height: 3em;
  width: 7.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  margin-right: ${(props) =>
    props.status === 'paid' || props.status === 'draft' ? 'auto' : null};
  margin-left: ${(props) =>
    props.status === 'paid' || props.status === 'draft' ? '4.2em' : null};

  text-transform: capitalize;
  color: ${(props) =>
    props.status === 'pending'
      ? '#ff8f00'
      : props.status === 'paid'
      ? '#33d69f'
      : `${({ theme }) => theme.color}`};
  border-radius: 5px;
  background: ${(props) =>
    props.status === 'pending'
      ? 'rgba(255, 143, 0, 0.06)'
      : props.status === 'paid'
      ? 'rgba(51, 214, 159, 0.06)'
      : 'rgba(55, 59, 83, 0.08)'};

  transition: ${mainTransition};

  div {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    margin-right: 0.8em;
    background: ${(props) =>
      props.status === 'pending'
        ? '#ff8f00'
        : props.status === 'paid'
        ? '#33d69f'
        : '#0c0e16'};
  }
`;
