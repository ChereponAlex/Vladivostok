import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back_btn } from '../../images/backButton.svg';
import { ReactComponent as Back_home } from '../../images/back_home.svg';

 const Metro = () => {

    const navigate = useNavigate();

  return (
    <div className='background_metro'>
    <div className='btn_back_container' >
        <div className='btn_back_cluster' onClick={() => navigate('/')}>
            <Back_btn className='header_icons' />
        </div>
        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
            <Back_home className='header_icons' />
        </div>
    </div>
</div>
  )
}

export default Metro;