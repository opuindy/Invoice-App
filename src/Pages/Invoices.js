import React from 'react';
import InvoiceHeader from '../Components/InvoiceHeaderComponent/invoiceHeader';
import Invoice from '../Components/Invoices/Invoice';
import Form from '../Components/formComponents/Form';
import { useGlobalContext } from '../Components/context';
import { InvoiceContainer } from '../Components/InvoiceHeaderComponent/invoiceHeaderStyles';

const Invoices = () => {
  const { openForm } = useGlobalContext();
  return (
    <InvoiceContainer>
      <InvoiceHeader />
      <Invoice />
      {openForm && <Form />}
    </InvoiceContainer>
  );
};

export default Invoices;
