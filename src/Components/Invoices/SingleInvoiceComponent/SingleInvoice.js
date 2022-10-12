import React, { useEffect } from 'react';
import { images } from '../../../utils/images';
import { useGlobalContext } from '../../context';
import { useParams, useNavigate } from 'react-router-dom';
import InVoiceBody from './InvoiceBodyComponent/InVoiceBody';
import InvoiceStatus from '../InvoiceStatus';
import InvoiceButtons from './InvoiceButtonComponent/InvoiceButtons';
import { Container } from '../../InvoiceHeaderComponent/invoiceHeaderStyles';
import {
  GoBackContainer,
  StatusContainer,
  Footer,
} from './SingleInvoiceStyles';
import DeleteModal from './DeleteModal/deleteModal';

const SingleInvoice = () => {
  const { windowWidth, handleUpdateReceiptId, openDeleteModal, singleData } =
    useGlobalContext();
  const navigate = useNavigate();
  const { receiptId } = useParams();

  useEffect(() => {
    handleUpdateReceiptId(receiptId);
  }, [receiptId, handleUpdateReceiptId]);

  const goBack = () => {
    navigate(-1);
  };

  const invoice = singleData ? singleData : '';

  return (
    <Container>
      <GoBackContainer onClick={goBack}>
        <span>
          <img src={images.left} alt='bak_arrow_icon' />
          Go back
        </span>
      </GoBackContainer>
      <StatusContainer>
        <p className='status_text'>status</p>
        {invoice ? <InvoiceStatus status={invoice.status} /> : ''}
        {windowWidth > 767 && invoice ? <InvoiceButtons id={invoice.id} /> : ''}
      </StatusContainer>
      {invoice ? <InVoiceBody invoice={invoice} /> : ''}

      {windowWidth < 768 && (
        <Footer>{invoice ? <InvoiceButtons id={invoice.id} /> : ''}</Footer>
      )}
      {openDeleteModal && <DeleteModal />}
    </Container>
  );
};

export default SingleInvoice;
