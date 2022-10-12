const reducer = (state, action) => {
  if (action.type === 'HANDLE_SIZE') {
    return { ...state, windowWidth: window.innerWidth };
  }

  if (action.type === 'HANDLE_OPEN_FORM') {
    return {
      ...state,
      openForm: true,
      isFiltering: false,
      openFilterModal: false,
    };
  }

  if (action.type === 'HANDLE_CLOSE_FORM') {
    return {
      ...state,
      openForm: false,
      isEditing: state.isEditing === true ? false : state.isEditing,
    };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_INVOICES') {
    return { ...state, data: action.payload, loading: false };
  }

  if (action.type === 'DISPLAY_SINGLE_INVOICES') {
    return { ...state, singleData: action.payload[0], loading: false };
  }

  if (action.type === 'LOADING2') {
    return { ...state, loading: false };
  }

  if (action.type === 'HANDLE_UPDATE_RECEIPTID') {
    return { ...state, receiptId: action.payload };
  }

  if (action.type === 'HANDLE_STATUS') {
    return { ...state, status: action.payload.type };
  }

  if (action.type === 'UPDATE_INVOICE_LIST') {
    const updatedInvoiceList = [...state.data, action.payload];
    return { ...state, data: updatedInvoiceList };
  }

  if (action.type === 'UPDATE_INVOICE_LIST_EDIT') {
    const updatedInvoiceList = state.data.map((invoice) =>
      invoice.id === action.payload.id ? { ...action.payload.data } : invoice
    );
    const updatedSingleInvoice = updatedInvoiceList.filter(
      (invoice) => invoice.id === action.payload.id
    );
    return {
      ...state,
      isEditing: false,
      openForm: false,
      data: updatedInvoiceList,
      singleData: updatedSingleInvoice[0],
    };
  }

  if (action.type === 'HANDLE_IS_EDITING') {
    const editItem = state.data.find((item) => item.id === action.payload);
    return {
      ...state,
      isEditing: true,
      openForm: true,
      editId: action.payload,
      editInvoice: editItem,
    };
  }

  if (action.type === 'MARK_AS_PAID') {
    const updatedInvoiceList = state.data.map((invoice) =>
      invoice.id === action.payload.id ? { ...action.payload } : invoice
    );
    const updatedSingleInvoice = updatedInvoiceList.filter(
      (invoice) => invoice.id === action.payload.id
    );
    return {
      ...state,
      data: updatedInvoiceList,
      singleData: updatedSingleInvoice[0],
    };
  }

  if (action.type === 'HANDLE_OPEN_DELETE_MODAL') {
    return { ...state, openDeleteModal: true };
  }

  if (action.type === 'HANDLE_CLOSE_DELETE_MODAL') {
    return { ...state, openDeleteModal: false };
  }

  if (action.type === 'HANDLE_UPDATE_DELETED_INVOICE') {
    const updatedInvoiceList = state.data.filter((invoice) => {
      return invoice.id !== action.payload;
    });

    return { ...state, data: updatedInvoiceList, openDeleteModal: false };
  }

  if (action.type === 'UPDATE_FILTER_STATE') {
    return { ...state, data: action.payload };
  }

  // if (action.type === 'HANDLE_FILTER_STATUS') {
  //   return { ...state, filterStatus: action.payload };
  // }

  if (action.type === 'OPEN_IS_FILTERING') {
    return { ...state, isFiltering: true };
  }

  if (action.type === 'CLOSE_IS_FILTERING') {
    return { ...state, isFiltering: false };
  }

  if (action.type === 'TOGGLE_FILTER_MODAL') {
    return { ...state, openFilterModal: !state.openFilterModal };
  }
};

export default reducer;
