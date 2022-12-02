const NewExpenseForm = () => {

  return (
    <form>
      <label key='Amount'>Amount
      <input
        type='number'
        name='expense-amount'
        />
      </label>
      <label key='Description'>Description
      <input
        type='text'
        name='expense-description'
        />

        <button type='submit'>Add to minuses</button>
        <button type='submit'>Add to pluses</button>
      </label>
    </form>
  )
}

NewExpenseForm.PropTypes = {

}

NewExpenseForm.defaultProps = {

}

export default NewExpenseForm;
