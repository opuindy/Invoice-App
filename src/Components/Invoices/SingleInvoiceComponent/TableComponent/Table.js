import React from 'react';
import { useGlobalContext } from '../../../context';
import {
  Container,
  TableContainer,
  TotalContainer,
  ItemContainer,
  MobileContainer,
} from './tableStyles';

const Table = ({ invoice }) => {
  const { windowWidth } = useGlobalContext();
  const { items, total } = invoice;
  return (
    <Container>
      <TableContainer>
        {windowWidth > 767 ? (
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>QTY.</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                const { name, quantity, price, total } = item;
                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>${price}</td>
                    <td>${total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <MobileContainer>
            {items.map((item, index) => {
              const { name, quantity, price, total } = item;
              return (
                <ItemContainer key={index}>
                  <div>
                    <p className='item_name'>{name}</p>
                    {/* <p className='price'>{`${quantity} x  $${price}`}</p> */}
                    <p className='price'>
                      <span>{quantity}</span>{' '}
                      <span className='multiply'>x</span>
                      <span>${price}</span>
                    </p>
                  </div>
                  <p className='total'>${total}</p>
                </ItemContainer>
              );
            })}
          </MobileContainer>
        )}
      </TableContainer>
      <TotalContainer>
        <p className='amount'>Amount Due</p>
        <p className='total'>${total}</p>
      </TotalContainer>
    </Container>
  );
};

export default Table;
