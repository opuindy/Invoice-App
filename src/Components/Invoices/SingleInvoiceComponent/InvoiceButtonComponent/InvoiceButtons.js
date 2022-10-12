import React from 'react';
import { useGlobalContext } from '../../../context';
import {
  ButtonContainer,
  EditButton,
  DeleteButton,
  PaidButton,
} from './invoiceButtonStyles';

const InvoiceButtons = ({ id }) => {
  const {
    handleIsediting,
    handleMarkAsPaid,
    singleData,
    handleOpenDeleteModal,
  } = useGlobalContext();

  const checkstatus = (data) => {
    if (data.status.toLowerCase() === 'pending') {
      return { ...data, status: 'paid' };
    }
    return data;
  };

  return (
    <ButtonContainer>
      <EditButton onClick={() => handleIsediting(id)}>edit</EditButton>
      <DeleteButton onClick={handleOpenDeleteModal}>Delete</DeleteButton>
      {singleData.status.toLowerCase() === 'pending' && (
        <PaidButton
          disabled={
            singleData.status.toLowerCase() === 'draft' ||
            singleData.status.toLowerCase() === 'paid'
              ? true
              : false
          }
          onClick={() => handleMarkAsPaid(checkstatus(singleData))}
        >
          Mark as Paid
        </PaidButton>
      )}
    </ButtonContainer>
  );
};

export default InvoiceButtons;
