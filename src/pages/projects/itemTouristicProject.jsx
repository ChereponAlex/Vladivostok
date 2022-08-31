import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as Back_btn } from '../../images/backButton.svg';
import { ReactComponent as Back_home } from '../../images/back_home.svg';




const ItemTouristicProject = () => {
    const { projectID } = useParams();
    const navigate = useNavigate();

    switch (projectID) {
        case '1':
            return (
                <div className='background_touristic_project_1'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
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
                <div className='background_touristic_project_2'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
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
                <div className='background_touristic_project_3'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
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
                <div className='background_touristic_project_4'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
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
                <div className='background_touristic_project_5'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
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
                <div className='background_touristic_project_6'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '7':
            return (
                <div className='background_touristic_project_7'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '8':
            return (
                <div className='background_touristic_project_8'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '9':
            return (
                <div className='background_touristic_project_9'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '10':
            return (
                <div className='background_touristic_project_10'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '11':
            return (
                <div className='background_touristic_project_11'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '12':
            return (
                <div className='background_touristic_project_12'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '13':
            return (
                <div className='background_touristic_project_13'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '14':
            return (
                <div className='background_touristic_project_14'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '15':
            return (
                <div className='background_touristic_project_15'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '16':
            return (
                <div className='background_touristic_project_16'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
                            <Back_btn className='header_icons' />
                        </div>
                        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                            <Back_home className='header_icons' />
                        </div>
                    </div>
                </div>
            )
            break;
        case '17':
            return (
                <div className='background_touristic_project_17'>
                    <div className='btn_back_container' >
                        <div className='btn_back_cluster' onClick={() => navigate('/cluster/5')}>
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

export default ItemTouristicProject;