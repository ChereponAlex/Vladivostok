import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ItemCluster from './pages/ItemCluster';
import ItemLogisticProject from './pages/ItemLogisticProject';
import mainpage from '../src/styles/mainpage.css';
// import cluster_1 from '../src/styles/cluster_1.css';
import cluster_1_grid from '../src/styles/cluster_1_grid.css';

import project_4 from '../src/styles/project_4.css'
import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


import '../src/fonts/Graphik-Black-Web.ttf';
import '../src/fonts/Graphik-Bold-Web.ttf';
import '../src/fonts/Graphik-Medium-Web.ttf';
import '../src/fonts/Graphik-Regular-Web.ttf';


function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 8000);
  }, []);

  return (
    <div className='app-container'>
      
      {/* {loading ? <ClipLoader  className='loader' color={'#4362ff'} loading={loading} size={150}/>
      :  null
      } */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cluster/:id' element={<ItemCluster />} />
          <Route path='/cluster/:id/project/:id' element={<ItemLogisticProject />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;


{/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cluster/:id' element={<ItemCluster />} />
          <Route path='/cluster/:id/project/:id' element={<ItemLogisticProject />} />

        </Routes>
      </BrowserRouter> */} 