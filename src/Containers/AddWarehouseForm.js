import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWarehouse } from '../action/Action';
import '../Styles/Addwarehouse.css'

function AddWarehouseForm({ onClose }) {
  const dispatch = useDispatch();
  const [newWarehouse, setNewWarehouse] = useState({
    name: '',
    city: '',
    cluster: '',
    space_available: '',
    type: '',
  });

  const handleAddWarehouse = () => {
    dispatch(addWarehouse(newWarehouse));
    onClose();
    if(newWarehouse !== '') {
        alert('Added sucessfully')
    }
  };
  const close= () => {
    onClose()
}

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Add Warehouse Details</h3>
          <span style={{ cursor: 'pointer', marginTop: '1%'}} onClick={close}>X</span>
        </div>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">name:</span>
        </div>
          <input
            type="text"
            class="form-control"
            aria-label="Name"
            id='name'
            aria-describedby="basic-addon1"
            value={newWarehouse.name}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, name: e.target.value })}
          />
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">code:</span>
        </div>
          <input
            type="text"
            class="form-control"
            aria-label="Name"
            id='code'
            aria-describedby="basic-addon1"
            value={newWarehouse.code}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, code: e.target.value })}
          />
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">city:</span>
        </div>
          <input
            type="text"
            class="form-control"
            aria-label="Name"
            id='name'
            aria-describedby="basic-addon1"
            value={newWarehouse.city}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, city: e.target.value })}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Cluster:</span>
          </div>
          <input
           type="text"
           class="form-control"
           aria-label="Name"
           id='cluster'
           aria-describedby="basic-addon1"
            value={newWarehouse.cluster}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, cluster: e.target.value })}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Space:</span>
          </div>
          <input
           type="text"
           class="form-control"
           aria-label="Name"
           id='space_available'
           aria-describedby="basic-addon1"
            value={newWarehouse.space_available}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, space_available: e.target.value })}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Type:</span>
          </div>
          <input
           type="text"
           class="form-control"
           aria-label="Name"
           id='type'
           aria-describedby="basic-addon1"
            value={newWarehouse.type}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, type: e.target.value })}
          />
        </div>
        <div class="input-group mb-3" style={{ display: 'flex', gap: '5%' }}>
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Is live:</span>
          </div>
          <label className="switch">
          <input
            type="checkbox"
            class="form-control"
            aria-label="Name"
            id='type'
            aria-describedby="basic-addon1"
            value={newWarehouse.is_live}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, is_live: e.target.checked })}
          />
          <span className="slider round"></span>
        </label>
        </div>
      </div>
      <button className='add-button' onClick={handleAddWarehouse}>Add</button>
    </div>
  );
}

export default AddWarehouseForm;
