import React from 'react';
import ReactModal from 'react-modal';

const NewExpenseForm = ({ isModalOpen, setIsModalOpen }) => {

  return (
    <ReactModal isOpen={isModalOpen}>
      <div className="form-group">
        <form>
          <label key='Amount' className='form-control'>Amount
          <input
            type='number'
              name='expense-amount'
              className='form-input'
            />
          </label>
          <label key='Description' className='form-control'>Description
          <input
            type='text'
            name='expense-description'
            className='form-input'
            />

            <button type='submit'>Add to minuses</button>
            <button type='submit'>Add to pluses</button>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </label>
        </form>
      </div>
    </ReactModal>
  )
}

export default NewExpenseForm;
