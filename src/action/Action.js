export const editWarehouse = (updatedWarehouse) => ({
    type: 'EDIT_WAREHOUSE',
    payload: updatedWarehouse,
  });
  export const addWarehouse = (newWarehouse) => ({
    type: 'ADD_WAREHOUSE',
    payload: newWarehouse,
  });