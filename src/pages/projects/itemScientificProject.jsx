import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as Back_btn } from '../../images/backButton.svg';
import { ReactComponent as Back_home } from '../../images/back_home.svg';




const ItemScientificProject = () => {
    const { projectID } = useParams();
    const navigate = useNavigate();

    switch (projectID) {
        case '1':
            return (
                <div className='background_scientific_project_1'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/4')}>
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
                <div className='background_scientific_project_2'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/4')}>
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
                <div className='background_scientific_project_3'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/4')}>
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
                <div className='background_scientific_project_4'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/4')}>
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
                <div className='background_scientific_project_5'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/4')}>
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

export default ItemScientificProject;