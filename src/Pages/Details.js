import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import EditWarehouse from '../Containers/EditWarehouse';
import '../Styles/Details.css'
import {useSelector} from 'react-redux'


function Details() {
    const location = useLocation()
    const details = location.state.id
    const warehouses = useSelector(state => state.warehouses);
    const filterdata = warehouses.filter(id => id.id === details)
    console.log(filterdata)
    const [editmodelopen, seteditmodelopen] = useState(false)
    const [selectedwarehouse, setselectedwarehouse] = useState(null);
    const openeditmodel = (warehouse) =>{
        setselectedwarehouse(warehouse)
        seteditmodelopen(true)
      }
      const closeeditmodel = () =>{
        setselectedwarehouse(null);
        seteditmodelopen(false);
      }
  return (
    <div className='details-container'>
        <div className='details-content'>
        <h2>Ware House Details</h2>
            <ul class="list-group col-sm-12 details-card">
                {filterdata.map((obj)=>(
                    <div>
                        <li class="list-group-item" style={{ display: 'flex', gap: '7%' }}>
                            <span>Name:</span>
                            <span>{obj.name}</span>
                        </li>
                        <li class="list-group-item" style={{ display: 'flex', gap: '7%' }}>
                            <span>Code:</span>
                            <span>{obj.code}</span>
                        </li>
                        <li class="list-group-item" style={{ display: 'flex', gap: '7%' }}>
                          <span>Cluster:</span>
                          <span>{obj.cluster}</span>
                        </li>
                        <li class="list-group-item" style={{ display: 'flex', gap: '7%' }}>
                          <span>Space:</span>
                          <span>{obj.space_available}</span>
                        </li>
                        <li class="list-group-item" style={{ display: 'flex', gap: '7%' }}>
                          <span>Type:</span>
                          <span>{obj.type}</span>
                        </li>
                        <li class="list-group-item" style={{ display: 'flex', gap: '7%' }}>
                          <span>IsLive:</span>
                          <span>
                            {obj.is_live ? (
                                <div>
                                <div class="details-green-dot"></div>
                                <span>Yes</span>
                                </div>
                            ) : (
                                <div>
                                <div class="details-red-dot"></div>
                                <span>No</span>
                            </div>
                            )}
                            </span>
                        </li>
                        <li class="list-group-item" style={{ display: 'flex', gap: '7%' }}>
                        <span>Register:</span>
                        <span>
                            {obj.is_registered ? (
                                <div>
                                <span>Yes</span>
                                </div>
                            ) : (
                                <div>
                                <span>No</span>
                                </div>
                            )}
                            </span>
                        </li>
                        <button className='bg-success detail-edit-button' onClick={() => openeditmodel(obj)}>Edit</button>
                </div>
                ))}
            </ul>
      </div>
      {editmodelopen && (
        <div className="edit-modal">
          <EditWarehouse warehouse={selectedwarehouse} onClose={closeeditmodel} />
        </div>
      )}
    </div>
  )
}

export default Details