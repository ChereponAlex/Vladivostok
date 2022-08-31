import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logistic_project_4_page from '../../images/logistic_project_4_page.svg';
import { ReactComponent as Back_btn } from '../../images/backButton.svg';
import { ReactComponent as Back_home } from '../../images/back_home.svg';
import background from '../../images/logistic_project_4_page.svg';
// import button_back from '../images/button_back.jpg'



const ItemLogisticProject = () => {
    const { projectID } = useParams();
    const navigate = useNavigate();

    switch (projectID) {
        case '1':
            return (
                <div className='background_project_1'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/1')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '2':
            return (
                <div className='background_project_2'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/1')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '3':
            return (
                <div className='background_project_3'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/1')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '4':
            return (
                <div className='background_project_4'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/1')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '5':
            return (
                <div className='background_project_5'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/1')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '6':
            return (
                <div className='background_project_6'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/1')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;

        default:
            break;
    }
}

export default ItemLogisticProject;