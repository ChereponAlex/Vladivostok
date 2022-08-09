import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import dataSource from '../helper/dataSource';
import cutOffUrl from '../utils/cutOffUrl';
import backgroundPNG from '../images/cluster_page.png';
import mainpage from '../styles/mainpage.css';
import { ReactComponent as Back_btn } from '../images/backButton.svg';

import { ReactComponent as Logistic_map } from '../images/logistic_map.svg';
import { ReactComponent as Logistic_cluster } from '../images/logistic_cluster.svg';
import { ReactComponent as Background_cluster_1 } from '../images/background_cluster_1.svg';
import { ReactComponent as Left_column_project } from '../images/logistic_left_column_project.svg';
import { ReactComponent as Right_column_project } from '../images/logistic_right_column_project.svg';
import { ReactComponent as Map } from '../images/logistic_cluster_1_map.svg';
import { ReactComponent as Map4 } from '../images/technology_cluster_4_map.svg';
import dataLogisticProject from '../helper/dataLogisticProject';

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
                                                <div className={`marker_map_logistic position_marker_${marker.id}`} onClick={() => navigate(`/cluster/${marker.id}/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_${marker.id}`} onClick={() => navigate(`/cluster/${marker.id}/project/${marker.id}`)}>{marker.title}</div>
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
                id == '4' ?
                    <>
                        <div className="background_cluster_page" >
                            <header className='header_cluster_1'>
                                <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
                                    <Back_btn className='header_cluster_logistic_btn_back' />
                                    <div className='header_cluster_logistic_description_btn'>На главную</div>
                                </div>
                                <div className='header_description_cluster_logistic' style={{paddingLeft: '7.5vw'}}>Научно-образовательный и технологический кластер</div>
                            </header>

                            <main className='main_container'>

                                <section className='section' >
                                    {dataLogisticProject.map((item) => {

                                        if (item.id <= 4) {
                                            return <ClusterCell key={item.id} clusterID={item.id} {...item} />
                                        } else return null
                                    })}
                                </section>

                                <section className='section_center_2'>
                                    {/* {dataLogisticProject.map(marker => {
                                        return (
                                            <div key={marker.id}>
                                                <div className={`marker_map_logistic position_marker_${marker.id}`} onClick={() => navigate(`/cluster/${marker.id}/project/${marker.id}`)}>
                                                    <div className={`number_marker`}>{marker.id}</div>
                                                </div>
                                                <div className={`description_marker position_description_marker_${marker.id}`} onClick={() => navigate(`/cluster/${marker.id}/project/${marker.id}`)}>{marker.title}</div>
                                            </div>

                                        )
                                    })} */}
                                    <Map4 className='centered-map' />
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
        </>


    )




    // <>
    //     <div className="background_cluster_page" >
    //         <header className='header_cluster_1'>
    //             <div className='header_cluster_logistic_btn_container' onClick={() => navigate('/')}>
    //                 <Back_btn className='header_cluster_logistic_btn_back' />
    //                 <div className='header_cluster_logistic_description_btn'>На главную</div>
    //             </div>
    //             <div className='header_description_cluster_logistic'>Логистически-производственный пояс</div>
    //         </header>

    //         <main className='main_container'>

    //             <section className='section' >
    //                 {dataLogisticProject.map((item) => {

    //                     if (item.id <= 4) {
    //                         return <ClusterCell key={item.id} clusterID={item.id} {...item} />
    //                     } else return null
    //                 })}
    //             </section>

    //             <section className='section_center'>
    //                 <Map className='centered-map' />
    //             </section>

    //             <section className='section'>
    //                 {dataLogisticProject.map((item) => {
    //                     if (item.id > 4) {
    //                         return <ClusterCell key={item.id} clusterID={item.id} {...item} />
    //                     } else return null
    //                 })}
    //             </section>

    //         </main>
    //     </div>
    // </>


}


export default ItemCluster;

