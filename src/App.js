import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainPage from './pages/MainPage';
import ItemCluster from './pages/clusters/ItemCluster';
import { ProjectsPage } from './pages/projects/ProjectsPage';
import AdditionalInvest from './pages/investments/additionalInvest';
import Information from './pages/investments/Information';
import Vkad from './pages/vkad/vkad';
import Metro from './pages/metro/metro';

import ItemLogisticProject from './pages/projects/ItemLogisticProject';
import ItemHistoricalProject from './pages/projects/itemHistoricalProject';
import mainpage from '../src/styles/mainpage.css';

import cluster_1_grid from '../src/styles/cluster_1_grid.css';
import cluster_2 from '../src/styles/cluster_2.css';
import cluster_3 from '../src/styles/cluster_3.css';
import cluster_4 from '../src/styles/cluster_4.css';
import cluster_5 from '../src/styles/cluster_5.css';
import cluster_6 from '../src/styles/cluster_6.css';

import historical_project_1 from '../src/styles/historical_project_1.css';
import project_4 from '../src/styles/project_4.css';
import global from '../src/styles/global.css';
import React, { useState, useEffect } from 'react';



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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Развитие Владивостокской агломерации — 2030</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cluster/:id' element={<ItemCluster />} />
          <Route path='/cluster/:clusterID/project/:projectID' element={<ProjectsPage />} />
          <Route path='/additional-invest' element={<AdditionalInvest />} />
          <Route path='/information' element={<Information />} />
          <Route path='/vkad' element={<Vkad />} />
          <Route path='/metro' element={<Metro />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
