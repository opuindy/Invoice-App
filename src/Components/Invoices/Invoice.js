import { images } from '../../utils/images';
import { useNavigate } from 'react-router-dom';
import InvoiceStatus from './InvoiceStatus';
import { useGlobalContext } from '../context';
import { Container, InvoiceContainer } from './invoiceStyles';
import CreateInvoice from './NoInvoiceComponent/CreateInvoice';

const Invoice = () => {
  const navigate = useNavigate();
  const { windowWidth, data, loading, isFiltering, closeIsFiltering } =
    useGlobalContext();

  if (loading) {
    return <Container> loading</Container>;
  }

  if (data.length === 0 && !loading && !isFiltering) {
    return (
      <>
        <CreateInvoice />
      </>
    );
  }

  return (
    <Container>
      {data.map((invoice) => {
        const { id, paymentDue, clientName, status, total } = invoice;

        const nav = () => {
          navigate(`receipt/${id}`);
          closeIsFiltering();
        };
        return (
          <InvoiceContainer key={id} onClick={nav}>
            <p className='id'>
              <span>{`#`}</span>
              {id}
            </p>
            <p className='date'>Due {paymentDue}</p>
            <p className='name'>{clientName}</p>
            <p className='price'>
              {`$`}
              {total}
            </p>
            <div className='status'>
              <InvoiceStatus status={status} />
            </div>
            {windowWidth > 768 && (
              <span className='icon'>
                <img src={images.right} alt='right_icon' />
              </span>
            )}
          </InvoiceContainer>
        );
      })}
    </Container>
  );
};

export default Invoice;
