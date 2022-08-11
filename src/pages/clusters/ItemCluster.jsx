import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import dataSource from '../../helper/dataSource';
import cutOffUrl from '../../utils/cutOffUrl';
import backgroundPNG from '../../images/cluster_page.png';
import mainpage from '../../styles/mainpage.css';
import background_cluster_2 from '../../images/background_cluster_2.jpg';
import background_cluster_5 from '../../images/background_cluster_5.jpg';
import background_cluster_6 from '../../images/background_cluster_6.jpg';



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

    return (
        <>
            {
                id == '1' ?
                    <>
                        <div className="background_cluster_page" >
                            <header className='header_cluster_1'>
                                <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                    <Back_btn className='header_cluster_logistic_btn_back' />
                                    <div className='header_cluster_logistic_description_btn'>На главную</div>
                                </div>
                                <div className='header_description_cluster_logistic'>Логистически-производственный пояс</div>
                            </header>

                            <main className='main_container'>

                                <section className='section' >
                                    {dataLogisticProject.map((item) => {

                                        if (item.id <= 4) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                                <section className='section_center'>
                                    {dataLogisticProject.map(marker => {
                                        return (
                                            <div key={marker.id}>
                                                <div className={`marker_map_logistic position_marker_${marker.id}`} onClick={() => navigate(`/cluster/1/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_${marker.id}`} onClick={() => navigate(`/cluster/1/project/${marker.id}`)}>{marker.title}</div>
                                            </div>

                                        )
                                    })}
                                    <Map className='centered-map' />
                                </section>

                                <section className='section'>
                                    {dataLogisticProject.map((item) => {
                                        if (item.id > 4) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>
                            </main>
                        </div>
                    </>
                    : null
            }
            {
                id == '2' ?
                    <>
                        <div className="background_cluster_page" >
                            <header className='header_cluster_1'>
                                <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                    <Back_btn className='header_cluster_logistic_btn_back' />
                                    <div className='header_cluster_logistic_description_btn'>На главную</div>
                                </div>
                                <div className='header_description_cluster_logistic' style={{ paddingLeft: '30vw' }}>Зеленый каркас</div>
                            </header>

                            <main className='main_container'>

                                <section className='section' >
                                    {dataGreenFrameProject.map((item) => {

                                        if (item.id <= 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                                <section className='section_center_2'
                                    style={{
                                        background: `url(${background_cluster_2}) no-repeat center`,
                                        backgroundSize: 'cover'
                                    }}>
                                    {dataGreenFrameProject.map(marker => {
                                        return (
                                            <div key={marker.id}>
                                                <div className={`marker_map_logistic position_marker_green_frame_${marker.id}`} onClick={() => navigate(`/cluster/2/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_green_frame_${marker.id}`} onClick={() => navigate(`/cluster/2/project/${marker.id}`)}>{marker.title}</div>
                                            </div>

                                        )
                                    })}
                                    <Map4 className='centered-map' />
                                </section>

                                <section className='section'>
                                    {dataGreenFrameProject.map((item) => {
                                        if (item.id > 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                            </main>
                        </div>
                    </>
                    : null
            }
            {
                id == '3' ?
                    <>
                        <div className="background_cluster_page" >
                            <header className='header_cluster_1'>
                                <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                    <Back_btn className='header_cluster_logistic_btn_back' />
                                    <div className='header_cluster_logistic_description_btn'>На главную</div>
                                </div>
                                <div className='header_description_cluster_logistic' style={{ paddingLeft: '3.5vw' }}>Центр креативной экономики(культурно-исторический центр)</div>
                            </header>

                            <main className='main_container'>

                                <section className='section' >
                                    {dataHistoricalProject.map((item) => {

                                        if (item.id <= 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                                <section className='section_center_3'>
                                    {dataHistoricalProject.map(marker => {
                                        return (
                                            <div key={marker.id}>
                                                <div className={`marker_map_logistic position_marker_historical_${marker.id}`} onClick={() => navigate(`/cluster/3/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_historical_${marker.id}`} onClick={() => navigate(`/cluster/3/project/${marker.id}`)}>{marker.title}</div>
                                            </div>

                                        )
                                    })}
                                    <Map4 className='centered-map' />
                                </section>

                                <section className='section'>
                                    {dataHistoricalProject.map((item) => {
                                        if (item.id > 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                            </main>
                        </div>
                    </>
                    : null
            }
            {
                id == '4' ?
                    <>
                        <div className="background_cluster_page" >
                            <header className='header_cluster_1'>
                                <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                    <Back_btn className='header_cluster_logistic_btn_back' />
                                    <div className='header_cluster_logistic_description_btn'>На главную</div>
                                </div>
                                <div className='header_description_cluster_logistic' style={{ paddingLeft: '7.5vw' }}>Научно-образовательный и технологический кластер</div>
                            </header>

                            <main className='main_container'>

                                <section className='section' >
                                    {dataTechnologyProject.map((item) => {

                                        if (item.id <= 3) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                                <section className='section_center_2'>
                                    {dataTechnologyProject.map(marker => {
                                        return (
                                            <div key={marker.id}>
                                                <div className={`marker_map_logistic position_marker_technology_${marker.id}`} onClick={() => navigate(`/cluster/4/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_technology_${marker.id}`} onClick={() => navigate(`/cluster/4/project/${marker.id}`)}>{marker.title}</div>
                                            </div>

                                        )
                                    })}
                                    <Map4 className='centered-map' />
                                </section>

                                <section className='section'>
                                    {dataTechnologyProject.map((item) => {
                                        if (item.id > 3) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                            </main>
                        </div>
                    </>
                    : null
            }
            {
                id == '5' ?
                    <>
                        <div className="background_cluster_page" >
                            <header className='header_cluster_1'>
                                <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                    <Back_btn className='header_cluster_logistic_btn_back' />
                                    <div className='header_cluster_logistic_description_btn'>На главную</div>
                                </div>
                                <div className='header_description_cluster_logistic' style={{ paddingLeft: '17.5vw' }}>Туристско-рекреационный кластер</div>
                            </header>

                            <main className='main_container'>

                                <section className='section' >
                                    {dataTouristicProject.map((item) => {

                                        if (item.id <= 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                                <section className='section_center_2'
                                    style={{
                                        background: `url(${background_cluster_5}) no-repeat center`,
                                        backgroundSize: 'cover'
                                    }}>
                                    {dataTouristicProject.map(marker => {
                                        return (
                                            <div key={marker.id}>
                                                <div className={`marker_map_logistic position_marker_touristic_${marker.id}`} onClick={() => navigate(`/cluster/5/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_touristic_${marker.id}`} onClick={() => navigate(`/cluster/5/project/${marker.id}`)}>{marker.title}</div>
                                            </div>

                                        )
                                    })}
                                    <Map4 className='centered-map' />
                                </section>

                                <section className='section'>
                                    {dataTouristicProject.map((item) => {
                                        if (item.id > 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                            </main>
                        </div>
                    </>
                    : null
            }
             {
                id == '6' ?
                    <>
                        <div className="background_cluster_page" >
                            <header className='header_cluster_1'>
                                <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                    <Back_btn className='header_cluster_logistic_btn_back' />
                                    <div className='header_cluster_logistic_description_btn'>На главную</div>
                                </div>
                                <div className='header_description_cluster_logistic' style={{ paddingLeft: '35.5vw' }}>г. Артем</div>
                            </header>

                            <main className='main_container'>

                                <section className='section' >
                                    {dataArtemProject.map((item) => {

                                        if (item.id <= 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                                <section className='section_center_2'
                                    style={{
                                        background: `url(${background_cluster_6}) no-repeat center`,
                                        backgroundSize: 'cover',                                        
                                    }}>
                                    {dataArtemProject.map(marker => {
                                        return (
                                            <div key={marker.id}>
                                                <div className={`marker_map_logistic position_marker_artem_${marker.id}`} onClick={() => navigate(`/cluster/6/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_artem_${marker.id}`} onClick={() => navigate(`/cluster/6/project/${marker.id}`)}>{marker.title}</div>
                                            </div>

                                        )
                                    })}
                                    <Map4 className='centered-map' /* style={{position: 'relative', top: '200px', right: '100px'}} *//>
                                </section>

                                <section className='section'>
                                    {dataArtemProject.map((item) => {
                                        if (item.id > 2) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                            </main>
                        </div>
                    </>
                    : null
            }
        </>


    )
}


export default ItemCluster;

