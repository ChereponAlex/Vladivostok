import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import dataSource from '../helper/dataSource';
import cutOffUrl from '../utils/cutOffUrl';
import backgroundPNG from '../images/cluster_page.png';
import mainpage from '../styles/mainpage.css';
import { ReactComponent as Back_btn } from '../images/backButton.svg';

import { ReactComponent as Logistic_map } from '../images/logistic_map.svg';
import { ReactComponent as Logistic_cluster } from '../images/logistic_cluster.svg';
import dataLogisticProject from '../helper/dataLogisticProject';


const ItemCluster = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const navigate = useNavigate();

    switch (id) {
        case '1':
            return (
                <div className='container_page_cluster_1'>
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
                            {/* <Logistic_cluster className='logistic_cluster' /> */}
                            {/* {dataLogisticProject.map(({ id, name, Point }) => {
                                return (
                                    <Point/>
                                )
                            })} */}

                        </section>

                        <section className='section_right' >
                            {
                                dataLogisticProject.slice(4, 8).map(({ id, name, Project }) => {
                                    return <Project className='logistic_card' onClick={() => navigate(`/cluster/1/project/${id}`)} key={id} />
                                })
                            }
                        </section>
                        
                    </main>

                </div>
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



{/* <main className='main_container'>
<section className='section_left'>
    <Logistic_1 className='logistic_card' />
    <Logistic_2 className='logistic_card' />
    <Logistic_3 className='logistic_card' />
    <Logistic_4 className='logistic_card' />
</section>
<section className='section_center'>
    <Logistic_map style={{ position: 'absolute' }} />
    <Logistic_cluster className='logistic_cluster' />
</section>
<section className='section_right'>
    <Logistic_5 className='logistic_card' />
    <Logistic_6 className='logistic_card' />
    <Logistic_7 className='logistic_card' />
    <Logistic_8 className='logistic_card' />
</section>
</main> */}
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