import React from 'react';
import { InvoiceContainer } from '../Components/InvoiceHeaderComponent/invoiceHeaderStyles';
import { Link } from 'react-router-dom';
import { ErrorContainer } from './Styles/errorPageStyles';

const Error = () => {
  return (
    <InvoiceContainer>
      <ErrorContainer>
        <h2> 404 ERROR</h2>
        <p>Page Not Found</p>
        <Link to='/'>Back Home</Link>
      </ErrorContainer>
    </InvoiceContainer>
  );
};

export default Error;
