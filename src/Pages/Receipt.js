import React from 'react';
import SingleInvoice from '../Components/Invoices/SingleInvoiceComponent/SingleInvoice';
import { useGlobalContext } from '../Components/context';
import Form from '../Components/formComponents/Form';
import { InvoiceContainer } from '../Components/InvoiceHeaderComponent/invoiceHeaderStyles';

const Receipt = () => {
  const { isEditing, openForm } = useGlobalContext();

  // let receipt = data.find((receipt) => receipt.id.toString() === receiptId);

  return (
    <InvoiceContainer>
      <SingleInvoice />
      {isEditing && openForm && <Form />}
    </InvoiceContainer>
  );
};

export default Receipt;
