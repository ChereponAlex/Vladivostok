import React from 'react';
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
import dataLogisticProject from '../helper/dataLogisticProject';

const ClusterCell = ({ id, title, imageSrc }) => (
    <div className="cell-wrapper" style={{
        backgroundImage: `url("${imageSrc}")`,
    }}>
        <div className="cell-number">{id}</div>
        <span className="cell-title">{title}</span>
    </div>
)

const ItemCluster = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const navigate = useNavigate();

    switch (id) {
        case '1':
            return (
                <>
                    <div className="background_cluster_page" >
                        <header className='header_container_page_cluster_1'>
                            <div className='header_btn_back' onClick={() => navigate('/')}>
                                <Back_btn />
                                <div className='header_btn_back_description'>Вернуться назад</div>
                            </div>
                            <div className='header_cluster_1_name'>Логистически-производственный пояс</div>
                        </header>
                        <main className='main_container'>
                            <section className='section_right' >
                                {dataLogisticProject.map((item) => {
                                    if( item.id <= 4) {
                                        return <ClusterCell key={item.id} {...item} />
                                    } else return null
                                })}
                                {/*<Left_column_project />*/}
                            </section>

                            <section className='section_center'>
                                <Map className='centered-map' />
                            </section>

                            <section className='section_right' >
                                {dataLogisticProject.map((item) => {
                                    if( item.id > 4) {
                                        return <ClusterCell key={item.id} {...item} />
                                    } else return null
                                })}
                                {/*<Right_column_project />*/}
                            </section>

                        </main>
                    </div>


                    {/* <Background_cluster_1 className="background_cluster_1" /> */}

                    {/* <div className='container_page_cluster_1'>
                        <header className='header_container_page_cluster_1'>
                            <div className='header_btn_back' onClick={() => navigate('/')}>
                                <Back_btn />
                                <div className='header_btn_back_description'>Вернуться назад</div>
                            </div>
                            <div className='header_cluster_1_name'>Логистически-производственный пояс</div>
                        </header>

                        <main className='main_container'>

                            <section className='section_left' >
                                {
                                    dataLogisticProject.slice(0, 4).map(({ id, name, Project }) => {
                                        return <Project className='logistic_card' onClick={() => navigate(`/cluster/1/project/${id}`)} key={id} />
                                    })
                                }
                            </section>

                            <section className='section_center'>           

                            </section>

                            <section className='section_right' >
                                {
                                    dataLogisticProject.slice(4, 8).map(({ id, name, Project }) => {
                                        return <Project className='logistic_card' onClick={() => navigate(`/cluster/1/project/${id}`)} key={id} />
                                    })
                                }
                            </section>

                        </main>

                    </div> */}


                </>

            )
            break;

        case '2':
            <div>страница №2</div>
            break;
        case '3':
            <div>страница №3</div>
            break;
        case '4':
            <div>страница №4</div>
            break;
        case '5':
            <div>страница №5</div>
            break;
        default:
            return (
                <>
                    такой страницы не найдено
                </>
            )

    }

}
export default ItemCluster;



{/* <div className='container_page_cluster_1'>
<header className='header_container_page_cluster_1'>
    <div className='header_btn_back' onClick={() => navigate('/')}>
        <Back_btn />
        <div className='header_btn_back_description'>Вернуться назад</div>
    </div>
    <div className='header_cluster_1_name'>Логистически-производственный пояс</div>
</header>

<main className='main_container'>
    
    <section className='section_left' >
        {
            dataLogisticProject.slice(0, 4).map(({ id, name, Project }) => {
                return <Project className='logistic_card' onClick={() => navigate(`/cluster/1/project/${id}`)} key={id} />
            })
        }
    </section>

    <section className='section_center'>
        <Logistic_map style={{ position: 'absolute' }} />
        <Logistic_cluster className='logistic_cluster' />
        {dataLogisticProject.map(({ id, name, Point }) => {
            return (
                <Point/>
            )
        })}

    </section>

    <section className='section_right' >
        {
            dataLogisticProject.slice(4, 8).map(({ id, name, Project }) => {
                return <Project className='logistic_card' onClick={() => navigate(`/cluster/1/project/${id}`)} key={id} />
            })
        }
    </section>
    
</main>

</div> */}
{/* <main className='main_container'>
                        {
                            dataLogisticProject.map(({ id, name, Project }, index) => {
                                return (
                                    <div key={id}>
                                        {
                                            <section className={index >= 0 && index < 5 ? 'section_left' : 'section_right'} key={id}>
                                                <Project className='logistic_card' onClick={() => navigate(`/cluster/1/project/${id}`)} />
                                            </section>
                                        }
                                    </div>
                                )
                            })
                        }
                        <section className='section_center'>
                            <Logistic_map style={{ position: 'absolute' }} />
                            <Logistic_cluster className='logistic_cluster' />
                        </section>
                    </main> */}