import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ItemCluster from './pages/ItemCluster';
import styles from '../src/styles/styles.css';



function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cluster/:id' element={<ItemCluster />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
