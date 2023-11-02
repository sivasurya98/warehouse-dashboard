import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
