import React, { useEffect, useState, useCallback } from 'react';
import { images } from '../../utils/images';
import { useGlobalContext } from '../context';
import api from '../../api/invoices';
import { useNavigate } from 'react-router';
import FormButtons from './FormButtons/FormButtons';
import {
  validateForm,
  validateForm2,
  validateForm3,
  validateForm4,
} from './validateForm';
import {
  FormModal,
  FormContainer,
  FormItem,
  InputGroup,
  InputGroup2,
  InputGroup3,
  Button,
} from './formStyles';

const Form = () => {
  const {
    handleCloseForm,
    handleStatus,
    status,
    isEditing,
    editId,
    editInvoice,
    handleEditSubmit,
    updateInvoiceList,
  } = useGlobalContext();
  const { createdAt, description, paymentTerms, clientName, clientEmail } =
    editInvoice;
  const [downIcon, setDownIcon] = useState(false);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [formErrors2, setFormErrors2] = useState([]);
  const [formErrors3, setFormErrors3] = useState({});
  const [formErrors4, setFormErrors4] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [senderAddress, setSenderAddress] = useState(
    isEditing
      ? editInvoice.senderAddress
      : {
          street: '',
          city: '',
          postCode: '',
          country: '',
        }
  );
  const [clientAddress, setClientAddress] = useState(
    isEditing
      ? editInvoice.clientAddress
      : {
          street: '',
          city: '',
          postCode: '',
          country: '',
        }
  );
  const [singleInvoice, setSingleInvoice] = useState(
    isEditing
      ? { createdAt, description, paymentTerms, clientName, clientEmail }
      : {
          createdAt: '',
          description: '',
          paymentTerms: 0,
          clientName: '',
          clientEmail: '',
        }
  );

  const [items, setItems] = useState(
    isEditing
      ? editInvoice.items
      : [
          {
            name: '',
            quantity: 0,
            price: 0,
            total: 0,
          },
        ]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSingleInvoice({ ...singleInvoice, [name]: value });
  };

  const handleChange1 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSenderAddress({ ...senderAddress, [name]: value });
  };

  const handleChange2 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setClientAddress({ ...clientAddress, [name]: value });
  };

  const handleChange3 = (e, index) => {
    const values = [...items];
    values[index][e.target.name] = e.target.value;
    setItems(values);
  };

  const handleAddItems = () => {
    setItems([
      ...items,
      {
        name: '',
        quantity: 0,
        price: 0,
        total: 0,
      },
    ]);
  };

  const handleRemoveItems = (index) => {
    const values = [...items];
    values.splice(index, 1);
    setItems(values);
  };

  const id = () => {
    let newLetter = () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let num = () => new Date().getTime().toString().slice(-4);
    return `${newLetter()}${newLetter()}${num()}`;
  };

  const dueDate = useCallback(() => {
    let date = new Date(singleInvoice.createdAt);
    let newDate = new Date(
      date.setDate(date.getDate() + parseFloat(singleInvoice.paymentTerms))
    );
    return `${newDate.getFullYear()}-${
      newDate.getMonth() + 1
    }-${newDate.getDate()}`;
  }, [singleInvoice.createdAt, singleInvoice.paymentTerms]);

  const getTotals = useCallback(() => {
    let { total } = items.reduce(
      (invoiceTotal, item) => {
        const { price, quantity } = item;
        const itemTotal = price * quantity;
        invoiceTotal.total += itemTotal;

        return invoiceTotal;
      },
      { total: 0 }
    );
    return (total = parseFloat(total.toFixed(2)));
  }, [items]);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    setFormErrors(validateForm(singleInvoice));
    setFormErrors2(validateForm2(items));
    setFormErrors3(validateForm3(senderAddress));
    setFormErrors4(validateForm4(clientAddress));
    handleStatus(type);
    setIsSubmit(true);
  };

  const handleSubmitDraft = (e, type) => {
    e.preventDefault();
    setFormErrors(validateForm(singleInvoice));
    handleStatus(type);
    setIsSubmit(true);
  };

  const handleEdit = (e, type) => {
    e.preventDefault();
    if (isEditing) {
      setFormErrors(validateForm(singleInvoice));
      setFormErrors2(validateForm2(items));
      setFormErrors3(validateForm3(senderAddress));
      setFormErrors4(validateForm4(clientAddress));
      handleStatus(type);
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (
      (Object.keys(formErrors).length === 0 &&
        formErrors2.map((formError) => {
          return Object.keys(formError).length === 0;
        }) &&
        Object.keys(formErrors3).length === 0 &&
        Object.keys(formErrors4).length === 0 &&
        isSubmit &&
        !isEditing) ||
      (Object.keys(formErrors).length === 0 &&
        isSubmit &&
        status === 'Draft' &&
        !isEditing)
    ) {
      const submitInvoice = async () => {
        const invoice = {
          ...singleInvoice,
          id: id(),
          senderAddress,
          clientAddress,
          status: status,
          paymentDue: dueDate(
            singleInvoice.createdAt,
            singleInvoice.paymentTerms
          ),
          items: items,
          total: getTotals(),
        };
        try {
          const response = await api.post('/invoices', invoice);
          updateInvoiceList(response.data);
          handleCloseForm();
          navigate('/');
          setIsSubmit(false);
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };
      submitInvoice();
    }
    if (
      Object.keys(formErrors).length === 0 &&
      formErrors2.map((formError) => {
        return Object.keys(formError).length === 0;
      }) &&
      Object.keys(formErrors3).length === 0 &&
      Object.keys(formErrors4).length === 0 &&
      isSubmit &&
      isEditing
    ) {
      const editedInvoice = {
        ...singleInvoice,
        id: editId,
        senderAddress,
        clientAddress,
        status: status,
        paymentDue: dueDate(
          singleInvoice.createdAt,
          singleInvoice.paymentTerms
        ),
        items: items,
        total: getTotals(),
      };
      handleEditSubmit(editId, editedInvoice);
    }
  }, [
    formErrors,
    formErrors2,
    formErrors3,
    formErrors4,
    isSubmit,
    status,
    clientAddress,
    dueDate,
    getTotals,
    handleCloseForm,
    items,
    navigate,
    senderAddress,
    singleInvoice,
    isEditing,
    editId,
    handleEditSubmit,
    updateInvoiceList,
  ]);

  return (
    <FormModal onClick={handleCloseForm}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <h1 className='title'>{!isEditing ? 'New Invoice' : 'Edit Invoice'}</h1>
        <FormItem>
          <div className='bill_section'>
            <h3>Bill From</h3>
            <InputGroup>
              <div className='address'>
                <label htmlFor='street'>
                  Street Address <span>{formErrors3.street}</span>
                </label>
                <input
                  type='text'
                  id='street'
                  name='street'
                  value={senderAddress.street}
                  onChange={handleChange1}
                  required
                />
              </div>
              <div className='city'>
                <label htmlFor='city'>
                  City <span>{formErrors3.city}</span>
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={senderAddress.city}
                  onChange={handleChange1}
                  required
                />
              </div>
              <div className='post_code'>
                <label htmlFor='postCode'>
                  Post Code <span>{formErrors3.postCode}</span>
                </label>
                <input
                  type='text'
                  id='postCode'
                  name='postCode'
                  value={senderAddress.postCode}
                  onChange={handleChange1}
                />
              </div>
              <div className='country'>
                <label htmlFor='country'>
                  Country <span>{formErrors3.country}</span>
                </label>
                <input
                  type='text'
                  id='country'
                  name='country'
                  value={senderAddress.country}
                  onChange={handleChange1}
                  required
                />
              </div>
            </InputGroup>
          </div>

          <div className='bill_to_section'>
            <h3>Bill To</h3>
            <InputGroup2 downIcon={downIcon}>
              <div className='name'>
                <label htmlFor='clientName'>
                  Name <span>{formErrors.clientName}</span>
                </label>
                <input
                  type='text'
                  id='clientName'
                  name='clientName'
                  value={singleInvoice.clientName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='email'>
                <label htmlFor='clientEmail'>
                  Email <span>{formErrors.clientEmail}</span>
                </label>
                <input
                  type='email'
                  id='clientEmail'
                  name='clientEmail'
                  placeholder='alvin@examplemail.com'
                  value={singleInvoice.clientEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='address'>
                <label htmlFor='street'>
                  Address <span>{formErrors4.street}</span>
                </label>
                <input
                  type='text'
                  id='street'
                  name='street'
                  value={clientAddress.street}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className='city'>
                <label htmlFor='city'>
                  City <span>{formErrors4.city}</span>
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  value={clientAddress.city}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className='post_code'>
                <label htmlFor='postCode'>
                  Post Code <span>{formErrors4.postCode}</span>
                </label>
                <input
                  type='text'
                  id='postCode'
                  name='postCode'
                  value={clientAddress.postCode}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className='country'>
                <label htmlFor='country'>
                  Country <span>{formErrors4.country}</span>
                </label>
                <input
                  type='text'
                  id='country'
                  name='country'
                  value={clientAddress.country}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className='date'>
                <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z'
                    fill='#7E88C3'
                    fillRule='nonzero'
                    opacity='.5'
                  />
                </svg>
                <label htmlFor='createdAt'>
                  Date <span>{formErrors.createdAt}</span>
                </label>
                <input
                  type='date'
                  name='createdAt'
                  id='createdAt'
                  value={singleInvoice.createdAt}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='payment_terms'>
                <img src={images.down} alt='down_icon' />
                <label htmlFor='paymentTerms'>
                  Payment Terms <span>{formErrors.paymentTerms}</span>
                </label>
                <select
                  name='paymentTerms'
                  id='paymentTerms'
                  onChange={handleChange}
                  onClick={() => setDownIcon(!downIcon)}
                >
                  <option>Select Terms</option>
                  <option value={1}>Net 1 Day</option>
                  <option value={7}>Net 7 Days</option>
                  <option value={14}>Net 14 Days</option>
                  <option value={30}>Net 30 Days</option>
                </select>
              </div>
              <div className='description'>
                <label htmlFor='description'>
                  Description <span>{formErrors.description}</span>
                </label>
                <input
                  type='text'
                  id='description'
                  name='description'
                  placeholder='e.g Graphic Design Service'
                  value={singleInvoice.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </InputGroup2>
          </div>
          {items.length > 0 && (
            <div className='item_list_section'>
              <h3>ItemList</h3>
              {items.map((item, index) => {
                return (
                  <InputGroup3 key={index}>
                    <div className='name'>
                      <label htmlFor='name'>
                        Name <span>{formErrors2.name}</span>
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={item.name}
                        onChange={(e) => handleChange3(e, index)}
                        required
                      />
                    </div>
                    <div className='quantity'>
                      <label htmlFor='quantity'>
                        Qty. <span>{formErrors2.quantity}</span>
                      </label>
                      <input
                        type='number'
                        id='quantity'
                        name='quantity'
                        value={item.quantity}
                        onChange={(e) => handleChange3(e, index)}
                        required
                      />
                    </div>
                    <div className='price'>
                      <label htmlFor='price'>
                        Price <span>{formErrors2.price}</span>
                      </label>
                      <input
                        type='number'
                        id='price'
                        name='price'
                        value={item.price}
                        onChange={(e) => handleChange3(e, index)}
                        required
                      />
                    </div>
                    <div className='total'>
                      <div className='total_container'>
                        <div className='totals'>
                          <label htmlFor='total'>Total</label>
                          <input
                            type='number'
                            id='total'
                            name='total'
                            value={
                              (item.total = parseFloat(
                                (item.price * item.quantity).toFixed(2)
                              ))
                            }
                            onChange={(e) => handleChange3(e, index)}
                            required
                            className='total_input'
                          />
                        </div>
                        <div
                          className='icon'
                          onClick={() => handleRemoveItems(index)}
                        ></div>
                      </div>
                    </div>
                  </InputGroup3>
                );
              })}
            </div>
          )}

          <Button type='button' onClick={handleAddItems}>
            + Add New Items
          </Button>
        </FormItem>
        <FormButtons
          handleSubmit={handleSubmit}
          handleStatus={handleStatus}
          handleSubmitDraft={handleSubmitDraft}
          handleEdit={handleEdit}
        />
      </FormContainer>
    </FormModal>
  );
};

export default Form;
