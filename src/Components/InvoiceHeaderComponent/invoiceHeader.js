import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import FilterModal from './FilterModal';
import { images } from '../../utils/images';
import { Container, InnerContainer, Span } from './invoiceHeaderStyles';

const InvoiceHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  const [query, setQuery] = useState('');
  const {
    windowWidth,
    handleOpenForm,
    data,
    isFiltering,
    openIsFiltering,
    toggleFilterModal,
    openFilterModal,
    fetchInvoices,
    closeIsFiltering,
  } = useGlobalContext();

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    toggleFilterModal();
    openIsFiltering();
  };

  const handleClick = () => {
    handleOpenForm();
    fetchInvoices();
    closeIsFiltering();
  };

  const handleReset = () => {
    closeIsFiltering();
    setOpenModal(false);

    fetchInvoices();
    setQuery('');
  };

  return (
    <Container>
      <InnerContainer openFilterModal={openFilterModal}>
        <div className='title'>
          <h1 onClick={handleReset}>Invoices</h1>
          {!isFiltering && (
            <p>
              {windowWidth < 768
                ? `${data.length} ${data.length <= 1 ? 'invoice' : 'invoices'}.`
                : `There ${data.lenght <= 1 ? 'is' : 'are'} ${
                    data.length
                  } total ${data.length <= 1 ? 'invoice' : 'invoices'}.`}
            </p>
          )}
          {isFiltering && (
            <p>
              {windowWidth < 768
                ? `${data.length} ${query} ${
                    data.length <= 1 ? 'invoice' : 'invoices'
                  }.`
                : `There ${data.length <= 1 ? 'is' : 'are'} ${
                    data.length
                  } ${query} ${data.length <= 1 ? 'invoice' : 'invoices'}.`}
            </p>
          )}
        </div>
        <div className='filter_new'>
          <p onClick={handleOpenModal}>
            {windowWidth < 768 ? 'filter' : 'filter by status'}
            <span className='span'>
              <img src={images.down} alt='down_icon' className='img' />
            </span>
          </p>
          <button type='button' onClick={handleClick}>
            <Span>
              <img src={images.plus} alt='plus_icon' />
            </Span>
            {windowWidth < 768 ? 'new' : 'new invoice'}
          </button>
        </div>
        {openFilterModal && <FilterModal setQuery={setQuery} query={query} />}
      </InnerContainer>
    </Container>
  );
};

export default InvoiceHeader;
