import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { editWarehouse } from '../action/Action'
import '../Styles/Editwarehouse.css'

function EditWarehouse({
    warehouse, onClose,
}) {
    const dispatch = useDispatch()
    const [updatedwarehouse, setupdatewaerhouse] = useState(warehouse)

    const handleEdit = () =>{
        dispatch(editWarehouse(updatedwarehouse));
        onClose();
        if(updatedwarehouse !== '') {
            alert('Edited sucessfully')
        }
    }
    const close= () => {
        onClose()
    }
  return (
    <div>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Edit Warehouse Details</h2>
          <span style={{ cursor: 'pointer', marginTop: '1%'}} onClick={close}>X</span>
        </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
            value={updatedwarehouse.name}
            onChange={(e) => setupdatewaerhouse({ ...updatedwarehouse, name: e.target.value })}
          />
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Code:</span>
        </div>
          <input
            type="text"
            class="form-control"
            aria-label="Name"
            id='code'
            aria-describedby="basic-addon1"
            value={updatedwarehouse.code}
            onChange={(e) => setupdatewaerhouse({ ...updatedwarehouse, code: e.target.value })}
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
            value={updatedwarehouse.cluster}
            onChange={(e) => setupdatewaerhouse({ ...updatedwarehouse, cluster: e.target.value })}
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
            value={updatedwarehouse.space_available}
            onChange={(e) => setupdatewaerhouse({ ...updatedwarehouse, space_available: e.target.value })}
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
            value={updatedwarehouse.type}
            onChange={(e) => setupdatewaerhouse({ ...updatedwarehouse, type: e.target.value })}
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
            value={updatedwarehouse.is_live}
            onChange={(e) => setupdatewaerhouse({ ...updatedwarehouse, is_live: e.target.checked })}
          />
          <span className="slider round"></span>
        </label>
        </div>
      </div>
      <button className='edit-button' onClick={handleEdit}>Save</button>
    </div>
  )
}

export default EditWarehouse