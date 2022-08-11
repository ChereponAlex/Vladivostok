import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ItemCluster from './pages/clusters/ItemCluster';
import { ProjectsPage } from './pages/projects/ProjectsPage';

import ItemLogisticProject from './pages/projects/ItemLogisticProject';
import ItemHistoricalProject from './pages/itemHistoricalProject';
import mainpage from '../src/styles/mainpage.css';
// import cluster_1 from '../src/styles/cluster_1.css';
import cluster_1_grid from '../src/styles/cluster_1_grid.css';
import cluster_3 from '../src/styles/cluster_3.css';
import historical_project_1 from '../src/styles/historical_project_1.css'


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
          <Route path='/cluster/:clusterID/project/:projectID' element={<ProjectsPage />} />
          {/* <Route path='/cluster/:clusterID/project/:projectID' element={<ItemHistoricalProject />} /> */}
          {/* <Route path='/cluster/:id/project/:id' element={<ItemHistoricalProject />} /> */}

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