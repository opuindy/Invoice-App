import React from 'react';
import { ButtonContainer } from './formButtonStyles';
import { useGlobalContext } from '../../context';

const FormButtons = ({ handleSubmit, handleSubmitDraft, handleEdit }) => {
  const { handleCloseForm, isEditing } = useGlobalContext();
  return (
    <ButtonContainer>
      <button className='discard' onClick={handleCloseForm}>
        Discard
      </button>
      {isEditing ? null : (
        <button
          className='draft'
          onClick={(e) =>
            isEditing ? null : handleSubmitDraft(e, { type: 'draft' })
          }
        >
          Save as Draft
        </button>
      )}

      <button
        className='saveBtn'
        onClick={(e) =>
          isEditing
            ? handleEdit(e, { type: 'pending' })
            : handleSubmit(e, { type: 'pending' })
        }
      >
        {!isEditing ? `Save & Send` : 'Save Changes'}
      </button>
    </ButtonContainer>
  );
};

export default FormButtons;
