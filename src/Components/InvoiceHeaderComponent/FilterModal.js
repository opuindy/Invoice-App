import React, { useEffect, useCallback } from 'react';
import api from '../../api/invoices';
import { useGlobalContext } from '../context';
import { ModalContainer, FormControl } from './filterModalStyles';
import { images } from '../../utils/images';

const FilterModal = ({ query, setQuery }) => {
  const { updateFilterState } = useGlobalContext();

  const handleFilterByStatus = useCallback(async () => {
    try {
      const response =
        query === ''
          ? await api.get(`/invoices`)
          : await api.get(`/invoices?status=${query}`);
      updateFilterState(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error:${err.message}`);
      }
    }
  }, [query, updateFilterState]);

  useEffect(() => {
    handleFilterByStatus();
  }, [query, handleFilterByStatus]);

  // useEffect(() => {
  //   handleFilterStatus(query);
  // }, [query]);

  return (
    <ModalContainer>
      <FormControl>
        <img src={images.calender} alt='' />
        <input
          type='radio'
          id='paid'
          name='status'
          value={'paid'}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor='paid'>Paid</label>
      </FormControl>
      <FormControl>
        <input
          type='radio'
          id='pending'
          name='status'
          value={'pending'}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor='pending'>Pending</label>
      </FormControl>
      <FormControl>
        <input
          type='radio'
          id='draft'
          name='status'
          value={'draft'}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor='draft'>Draft</label>
      </FormControl>
    </ModalContainer>
  );
};

export default FilterModal;
