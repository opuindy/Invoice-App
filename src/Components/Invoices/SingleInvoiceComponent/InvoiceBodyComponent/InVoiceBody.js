import React from 'react';
import Table from '../TableComponent/Table';
import {
  Container,
  BillFromContainer,
  BillToContainer,
  DateAddedContainer,
  DatePayment,
  BillTo,
  AddEmail,
} from './InvoiceBodyStyles';

const InVoiceBody = ({ invoice }) => {
  const {
    id,
    createdAt,
    paymentDue,
    description,
    clientName,
    clientEmail,
    senderAddress,
    clientAddress,
  } = invoice;
  return (
    <Container>
      <BillFromContainer>
        <div className='id_item_name'>
          <p className='id'>
            <span>{`#`}</span>
            {id}
          </p>
          <p>{description}</p>
        </div>

        <div className='from_address_container'>
          <p>{senderAddress.street}</p>
          <p>{senderAddress.city}</p>
          <p>{senderAddress.postCode}</p>
          <p>{senderAddress.country}</p>
        </div>
      </BillFromContainer>
      <BillToContainer>
        <DateAddedContainer>
          <DatePayment>
            <div className='date'>
              <p className='invoice_date'>Invoice Date</p>
              <p className='dates'>{createdAt}</p>
            </div>
            <div className='payment'>
              <p>payment Due</p>
              <p className='dates'>{paymentDue}</p>
            </div>
          </DatePayment>
          <BillTo>
            <p className='bill_to'>Bill To</p>
            <p className='customer_name'>{clientName}</p>
            <p>{clientAddress.street}</p>
            <p>{clientAddress.city}</p>
            <p>{clientAddress.postCode}</p>
            <p>{clientAddress.country}</p>
          </BillTo>
        </DateAddedContainer>
        <AddEmail>
          <p>Sent to</p>
          <p className='email'>{clientEmail}</p>
        </AddEmail>
      </BillToContainer>
      <Table invoice={invoice} />
    </Container>
  );
};

export default InVoiceBody;
