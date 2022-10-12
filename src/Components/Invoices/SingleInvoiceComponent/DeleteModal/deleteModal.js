import React from 'react';
import api from '../../../../api/invoices';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../../../context';
import {
  DeleteModalContainer,
  InnerContainer,
  ButtonContainer,
  CancelButton,
  DeleteButton,
} from './deleteModalStyles';

const DeleteModal = () => {
  const { handleCloseDeleteModal, singleData, handleUpdateDeletedInvoice } =
    useGlobalContext();
  const navigate = useNavigate();

  const handleDeleteInvoice = async () => {
    try {
      const response = await api.delete(`/invoices/${singleData.id}`);
      handleUpdateDeletedInvoice(singleData.id);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <DeleteModalContainer>
      <InnerContainer>
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete invoice <span>{singleData.id}?</span>{' '}
          This action cannot be undone.
        </p>
        <ButtonContainer>
          <CancelButton onClick={handleCloseDeleteModal}>Cancel</CancelButton>
          <DeleteButton onClick={handleDeleteInvoice}>Delete</DeleteButton>
        </ButtonContainer>
      </InnerContainer>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
