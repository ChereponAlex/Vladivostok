import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import dataSource from '../helper/dataSource';
import cutOffUrl from '../utils/cutOffUrl';
import backgroundPNG from '../images/cluster_page.png';
import mainpage from '../styles/mainpage.css';
import { ReactComponent as Back_btn } from '../images/backButton.svg';
// import back_btn from '../images/backButton.png'
import { ReactComponent as Logistic_1 } from '../images/logistic_1.svg';
import { ReactComponent as Logistic_2 } from '../images/logistic_2.svg';
import { ReactComponent as Logistic_3 } from '../images/logistic_3.svg';
import { ReactComponent as Logistic_4 } from '../images/logistic_4.svg';
import { ReactComponent as Logistic_5 } from '../images/logistic_5.svg';
import { ReactComponent as Logistic_6 } from '../images/logistic_6.svg';
import { ReactComponent as Logistic_7 } from '../images/logistic_7.svg';
import { ReactComponent as Logistic_8 } from '../images/logistic_8.svg';

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
                    {/* <div className=''></div> */}
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
                    <main className='main_container'>
                        <section className='section_left'>
                            <Logistic_1 className='logistic_card' />
                            <Logistic_2 className='logistic_card' />
                            <Logistic_3 className='logistic_card' />
                            <Logistic_4 className='logistic_card' />
                        </section>
                        <section className='section_center'>
                            {/* <Logistic_map style={{ position: 'absolute' }} /> */}
                            <Logistic_cluster className='logistic_cluster' />
                        </section>
                        <section className='section_right'>
                            <Logistic_5 className='logistic_card' />
                            <Logistic_6 className='logistic_card' />
                            <Logistic_7 className='logistic_card' />
                            <Logistic_8 className='logistic_card' />
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