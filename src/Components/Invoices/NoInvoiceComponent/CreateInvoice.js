import React from 'react';
import { Container } from './createInvoiceStyles';
import { images } from '../../../utils/images';
import { useGlobalContext } from '../../context';

const CreateInvoice = () => {
  const { windowWidth } = useGlobalContext();
  return (
    <Container>
      <img src={images.illustration} alt='empty illustration icon' />
      <h2>There Is Nothing Here.</h2>
      <p>
        Create an invoice by clicking the{' '}
        <span>{windowWidth < 768 ? 'New' : 'Create New'}</span> button and get
        started
      </p>
    </Container>
  );
};

export default CreateInvoice;
