export const validateForm = (values) => {
  let errors = {};
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!values.createdAt) {
    errors.createdAt = `can't be empty`;
  }

  if (!values.description) {
    errors.description = `can't be empty`;
  }

  if (!values.paymentTerms) {
    errors.paymentTerms = `required`;
  }

  if (!values.clientName) {
    errors.clientName = `can't be empty`;
  }

  if (!values.clientEmail) {
    errors.clientEmail = `can't be empty`;
  } else if (!regex.test(values.clientEmail)) {
    errors.clientEmail = '*invalid email format';
  }

  return errors;
};

export const validateForm2 = (values) => {
  let errors = values.map((value) => {
    let errorChild = {};
    if (!value.name) {
      errorChild.name = `can't be empty`;
    }
    if (!value.quantity) {
      errorChild.quantity = `can't be empty`;
    }
    if (!value.price) {
      errorChild.price = `can't be empty`;
    }
    return errorChild;
  });
  return errors;
};

export const validateForm3 = (values) => {
  let errors = {};

  if (!values.street) {
    errors.street = `can't be empty`;
  }

  if (!values.city) {
    errors.city = `can't be empty`;
  }

  if (!values.postCode) {
    errors.postCode = `can't be empty`;
  }

  if (!values.country) {
    errors.country = `can't be empty`;
  }

  return errors;
};

export const validateForm4 = (values) => {
  let errors = {};

  if (!values.street) {
    errors.street = `can't be empty`;
  }

  if (!values.city) {
    errors.city = `can't be empty`;
  }

  if (!values.postCode) {
    errors.postCode = `can't be empty`;
  }

  if (!values.country) {
    errors.country = `can't be empty`;
  }

  return errors;
};
