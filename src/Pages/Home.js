import React, { useState } from 'react'
// import data from '../utils/Data.json'
import '../Styles/Home.css'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AddWarehouseForm from '../Containers/AddWarehouseForm';
import {CgProfile} from 'react-icons/cg'

function Home() {
  const warehouses = useSelector(state => state.warehouses);
  const [search, setsearch] = useState('')
  const [selectedCity, setSelectedCity] = useState('All')
  const [cluster, setcluster] = useState('')
  const [avaliable, setavaliable] = useState('')
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate()

  const onsearch = (e) => {
    const value = e.target.value
    setsearch(value)
  }
  const onavailable = (e) => {
    const value = e.target.value
    setavaliable(value)
  }
  const onCitySelect = (e) => {
    setSelectedCity(e.target.value);
  };
  const onclusterselect = (e) => {
    setcluster(e.target.value)
    console.log(e.target.value)
  }
  const oncardclick = (warehouse_id)=>{
    navigate('/details', {state: { id: warehouse_id }})
  }
  const handleShowAddForm = () => {
    setShowAddForm(true);
  };
  let filteredData = warehouses.filter((warehouse) =>
    (selectedCity === 'All' || warehouse.city.toLowerCase() === selectedCity.toLowerCase()) &&
    (cluster === '' || warehouse.cluster.toLowerCase() === cluster.toLowerCase())
      && warehouse.name.toLowerCase().includes(search.toLowerCase())
    );
    if(avaliable !== ''){
        filteredData = warehouses.filter(warehouse => warehouse.space_available >= avaliable)
    }
    // const filteredData = data.filter((warehouse) => warehouse.name.toLowerCase().includes(search.toLowerCase()));
    const uniqueCities = [...new Set(warehouses.map((warehouse) => warehouse.city))];
    const selectcluster = [...new Set(warehouses.map((warehouse)=> warehouse.cluster))]
    return (
    <div className="container-fluid">
        <div className='header'>
            <div style={{ display: 'flex', gap: '7%' }}>
              <span className='header-name'>Hi,</span>
              <input type='text' className='input-search' onChange={onsearch} placeholder='Search Your Warehouse...'/>
            </div>
            <div><CgProfile size={40}/></div>
        </div> 
        <div class="col-sm-12" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="city-dropdown">
            <label htmlFor="citySelect">Select City:</label>
              <select
                id="citySelect"
                onChange={onCitySelect}
                value={selectedCity}
              >
                <option value="All">All</option>
                {uniqueCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
          </div>
          <div className="filter">
            <label htmlFor="clusterSelect">Select Cluster:</label>
            <select
              id="clusterSelect"
              onChange={onclusterselect}
              value={cluster}
            >
              <option value=''>All</option>
              {selectcluster.map((cluster, index) => (
                <option key={index} value={cluster}>
                  {cluster}
                </option>
              ))}
            </select>
          </div>
          <input type='text' className='input' onChange={onavailable} placeholder='Check Your Available Space...'/>
          <button onClick={handleShowAddForm}>Add Warehouse</button>
        </div>
        <div class="row" className='home-card'>
          {filteredData.map((obj) => (
            <div class="col-md-3 click-card" onClick={()=>oncardclick(obj.id)}>
              <div class="card home-card-content">
                <div class="card-body ">
                <div class="bg-light head-conntent">
                  <div>
                    <h5 class="card-title text-dark">{obj.name}</h5>
                    <p class="card-title text-dark">({obj.code})</p>
                  </div>
                  <p class="card-text text-dark">{obj.city}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p class="card-text">{`Space available-${obj.space_available}`}</p>
                  {obj.is_live ? (
                    <div class="green-dot"></div>
                  ) : (
                    <div class="red-dot"></div>
                  )}
                </div>
                  <p>{obj.cluster}</p>
                  <p>{`Type-${obj.type}`}</p>
                </div>
              </div>
           </div>
          ))}
        </div>
        {showAddForm && 
        <div className="edit-modal">
          <AddWarehouseForm onClose={() => setShowAddForm(false)} />
        </div>
          }
    </div>
  )
}

export default Home