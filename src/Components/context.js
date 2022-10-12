import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from './reducer';
import api from '../api/invoices';

const AppContext = React.createContext();

const initialState = {
  windowWidth: window.innerWidth,
  openForm: false,
  loading: false,
  data: [],
  singleData: null,
  receiptId: '',
  status: '',
  isEditing: false,
  editId: '',
  editInvoice: {},
  openDeleteModal: false,
  openFilterModal: false,
  isFiltering: false,
  // filterStatus: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSize = () => {
    dispatch({ type: 'HANDLE_SIZE' });
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  const handleUpdateReceiptId = useCallback((id) => {
    dispatch({ type: 'HANDLE_UPDATE_RECEIPTID', payload: id });
  }, []);

  const fetchInvoices = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await api.get(`/invoices`);
      dispatch({ type: 'DISPLAY_INVOICES', payload: response.data });
    } catch (err) {
      dispatch({ type: 'LOADING2' });
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error:${err.message}`);
      }
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchSingleInvoices = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await api.get(`/invoices?id=${state.receiptId}`);
      dispatch({ type: 'DISPLAY_SINGLE_INVOICES', payload: response.data });
    } catch (err) {
      dispatch({ type: 'LOADING2' });
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error:${err.message}`);
      }
    }
  }, [state.receiptId]);

  useEffect(() => {
    fetchSingleInvoices(state.receiptId);
  }, [state.receiptId, fetchSingleInvoices]);

  const handleOpenForm = () => {
    dispatch({ type: 'HANDLE_OPEN_FORM' });
  };

  const handleCloseForm = () => {
    dispatch({ type: 'HANDLE_CLOSE_FORM' });
  };

  const handleStatus = (type) => {
    dispatch({ type: 'HANDLE_STATUS', payload: type });
  };

  const updateInvoiceList = (data) => {
    dispatch({ type: 'UPDATE_INVOICE_LIST', payload: data });
  };

  const handleIsediting = (id) => {
    dispatch({ type: 'HANDLE_IS_EDITING', payload: id });
  };

  const handleEditSubmit = useCallback(async (id, editedInvoice) => {
    try {
      const response = await api.put(`/invoices/${id}`, editedInvoice);
      dispatch({
        type: 'UPDATE_INVOICE_LIST_EDIT',
        payload: { data: response.data, id: id },
      });
    } catch (err) {
      if (err.response) {
        console.log(`Error:${err.message}`);
      }
    }
  }, []);

  const handleMarkAsPaid = async (data) => {
    try {
      const response = await api.put(`/invoices/${state.receiptId}`, data);
      dispatch({ type: 'MARK_AS_PAID', payload: response.data });
    } catch (err) {
      if (err.response) {
        console.log(`Error:${err.message}`);
      }
    }
  };

  const handleOpenDeleteModal = () => {
    dispatch({ type: 'HANDLE_OPEN_DELETE_MODAL' });
  };

  const handleCloseDeleteModal = () => {
    dispatch({ type: 'HANDLE_CLOSE_DELETE_MODAL' });
  };

  const handleUpdateDeletedInvoice = (id) => {
    dispatch({ type: 'HANDLE_UPDATE_DELETED_INVOICE', payload: id });
  };

  const updateFilterState = (data) => {
    dispatch({ type: 'UPDATE_FILTER_STATE', payload: data });
  };

  // const handleFilterStatus = (data) => {
  //   dispatch({ type: 'HANDLE_FILTER_STATUS', payload: data });
  // };

  const openIsFiltering = () => {
    dispatch({ type: 'OPEN_IS_FILTERING' });
  };

  const closeIsFiltering = () => {
    dispatch({ type: 'CLOSE_IS_FILTERING' });
  };

  const toggleFilterModal = () => {
    dispatch({ type: 'TOGGLE_FILTER_MODAL' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleOpenForm,
        handleCloseForm,
        handleStatus,
        updateInvoiceList,
        handleIsediting,
        handleUpdateReceiptId,
        handleEditSubmit,
        handleMarkAsPaid,
        handleOpenDeleteModal,
        handleCloseDeleteModal,
        handleUpdateDeletedInvoice,
        updateFilterState,
        openIsFiltering,
        closeIsFiltering,
        toggleFilterModal,
        fetchInvoices,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
