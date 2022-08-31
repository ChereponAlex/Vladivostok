import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import dataSource from '../../helper/dataSource';
import cutOffUrl from '../../utils/cutOffUrl';
import backgroundPNG from '../../images/cluster_page.png';
import mainpage from '../../styles/mainpage.css';
import background_cluster_2 from '../../images/background_cluster_2.jpg';
import background_cluster_5 from '../../images/background_cluster_5.jpg';
import background_cluster_6 from '../../images/background_cluster_6.jpg';

import { ReactComponent as Test_sputnik_project_1_picture } from '../../images/test_sputnik_project_1_picture.svg'


import { ReactComponent as Back_btn } from '../../images/backButton.svg';

import { ReactComponent as Logistic_map } from '../../images/logistic_map.svg';
import { ReactComponent as Logistic_cluster } from '../../images/logistic_cluster.svg';
import { ReactComponent as Background_cluster_1 } from '../../images/background_cluster_1.svg';
import { ReactComponent as Left_column_project } from '../../images/logistic_left_column_project.svg';
import { ReactComponent as Right_column_project } from '../../images/logistic_right_column_project.svg';
import { ReactComponent as Map } from '../../images/logistic_cluster_1_map.svg';
import { ReactComponent as Map4 } from '../../images/technology_cluster_4_map.svg';
import { ReactComponent as Map6 } from '../../images/artem_cluster_6_map.svg';


import dataLogisticProject from '../../helper/dataLogisticProject';
import dataHistoricalProject from '../../helper/dataHistoricalProject';
import dataTouristicProject from '../../helper/dataTouristicProject';
import dataGreenFrameProject from '../../helper/dataGreenFrameProject';
import dataArtemProject from '../../helper/dataArtemProject';
import dataTechnologyProject from '../../helper/dataTechnologyProject';

// функция под навигацию маркеров на карте
const useClusterNavigation = (id) => {

    const navigate = useNavigate();

    useEffect(() => {
        const changeRoute = (routeName) => {
            navigate(`/cluster/${routeName}`)
            console.log('changeRoute', routeName)
        }
        const path = document.getElementById(`path_${id}`)
        !!path && path.addEventListener('click', () => {
            changeRoute(id)
        });

        return () => {
            !!path && path.removeEventListener('click', changeRoute)
        }

    }, []);
}


const ClusterCell = ({ clusterID, title, imageSrc }) => {
    const navigate = useNavigate();

    const { id } = useParams();

    return (
        <div onClick={() => navigate(`/cluster/${id}/project/${clusterID}`)} className="cell-wrapper" style={{
            backgroundImage: `url("${imageSrc}")`,
        }}>
            <div className="cell-number">{clusterID}</div>
            <span className="cell-title">{title}</span>
        </div>
    )
}
const ItemCluster = () => {
    const { id } = useParams();
    // const { search } = useLocation();
    const navigate = useNavigate();

    // test_logisic_picture.jpg
    return (
        <>
            {
                id == '1' ?
                    <>
                        <div className="background_cluster_1_page">
                            {[1, 2, 3, 4, 5, 6].map((button, index) => {
                                return (
                                    <>
                                        <button
                                            className={`btn_ logistic_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/1/project/${index + 1}`)}
                                        />
                                        <button
                                            className={`btn_marker_logistic logistic_marker_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/1/project/${index + 1}`)}
                                        />
                                    </>
                                )
                            })}
                            <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                <Back_btn className='header_cluster_logistic_btn_back' />
                            </div>
                        </div>
                    </>
                    : null
            }
            {
                id == '2' ?
                    <>
                        <div className="background_cluster_2_page">
                            {[1, 2, 3, 4].map((button, index) => {
                                return (
                                    <>
                                        <button
                                            className={`btn_ green_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/2/project/${index + 1}`)}
                                        />
                                        <button
                                            className={`btn_marker_green green_marker_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/2/project/${index + 1}`)}
                                        />
                                    </>
                                )
                            })}
                            <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                <Back_btn className='header_cluster_logistic_btn_back' />
                            </div>
                        </div>
                    </>
                    : null
            }
            {
                id == '3' ?
                    <>
                        <div className="background_cluster_3_page">
                            {[1, 2, 3, 4].map((button, index) => {
                                return (
                                    <>
                                        <button
                                            className={`btn_ historical_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/3/project/${index + 1}`)}
                                        />
                                        <button
                                            className={`btn_marker_historical historical_marker_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/3/project/${index + 1}`)}
                                        />
                                    </>
                                )
                            })}
                            <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                <Back_btn className='header_cluster_logistic_btn_back' />
                            </div>
                        </div>
                    </>
                    : null
            }
            {
                id == '4' ?
                    <>
                        <div className="background_cluster_4_page">
                            {[1, 2, 3, 4, 5].map((button, index) => {
                                return (
                                    <>
                                        <button
                                            className={`btn_ scientific_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/4/project/${index + 1}`)}
                                        />
                                        <button
                                            className={`btn_marker_scientific scientific_marker_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/4/project/${index + 1}`)}
                                        />
                                    </>
                                )
                            })}
                            <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                <Back_btn className='header_cluster_logistic_btn_back' />
                            </div>
                        </div>
                    </>
                    : null
            }
            {
                id == '5' ?
                    <>
                        <div className="background_cluster_5_page">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((button, index) => {
                                return (
                                    <>
                                        <button
                                            className={`btn_ touristic_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/5/project/${index + 1}`)}
                                        />
                                        <button
                                            className={`btn_marker_touristic touristic_marker_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/5/project/${index + 1}`)}
                                        />
                                    </>
                                )
                            })}
                            <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                <Back_btn className='header_cluster_logistic_btn_back' />
                            </div>
                        </div>
                    </>
                    : null
            }
            {
                id == '6' ?
                    <>
                        <div className="background_cluster_6_page">
                            {[1, 2, 3, 4].map((button, index) => {
                                return (
                                    <>
                                        <button
                                            className={`btn_ artem_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/6/project/${index + 1}`)}
                                        />
                                        <button
                                            className={`btn_marker_artem artem_marker_project_${index + 1}`}
                                            onClick={() => navigate(`/cluster/6/project/${index + 1}`)}
                                        />
                                    </>
                                )
                            })}
                            <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                <Back_btn className='header_cluster_logistic_btn_back' />
                            </div>
                        </div>
                    </>
                    : null
            }
        </>


    )
}


export default ItemCluster;

