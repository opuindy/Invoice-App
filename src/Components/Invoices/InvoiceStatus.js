import React from 'react';
import { StatusContainer } from './invoiceStatusStyles';

const InvoiceStatus = ({ status }) => {
  return (
    <StatusContainer status={status}>
      <div></div> <p>{status}</p>
    </StatusContainer>
  );
};

export default InvoiceStatus;
