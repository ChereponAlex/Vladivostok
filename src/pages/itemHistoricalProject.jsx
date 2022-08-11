import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logistic_project_4_page from '../images/logistic_project_4_page.svg';
import historical_project_2_page from '../images/historical_project_2_page.jpg';
import historical_project_3_page from '../images/historical_project_3_page.jpg';
import historical_project_4_page from '../images/historical_project_4_page.jpg';



import { ReactComponent as Back_btn } from '../images/backButton.svg';
import { ReactComponent as Back_home } from '../images/back_home.svg';
import background from '../images/logistic_project_4_page.svg';
// import button_back from '../images/button_back.jpg'



const ItemHistoricalProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    switch (id) {
        case '1':
            return (
                <div className='historical_project_1_page'>

                    <header className='header_logistic_project_4'>
                        <div className='header_btn_back_container' >
                            <div className='header_btn_back_cluster' onClick={() => navigate('/cluster/3')}>
                                <Back_btn className='header_icons' />
                                <div className='header_btn_back_description'>Назад к кластеру</div>
                            </div>
                            <div className='header_btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '6.04vw' }}  >
                                <Back_home className='header_icons' />
                                <div className='header_btn_back_description'>На главную</div>
                            </div>

                        </div>
                    </header>
                    <main className='main_logistic_project_4'>
                        <section className='section_left_logistic_project_4'>
                            <div className='description_page_logistic_project_4'>
                                Ревитализация исторического центра города
                            </div>
                            <div className='_description_page_logistic_project_4'>
                            </div>
                        </section>
                        <section className='section_right_logistic_project_4'>
                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>135 млрд руб.</div>
                                {/* <div className='card_project'>шаблон карточки проекта. на фон ставим картинку</div> */}
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>54 км</div>
                                <div className='card_project'>протяженность новой набережной</div>
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>{'>10'}</div>
                                <div className='card_project'>оборудованных чистых пляжей</div>
                            </div>

                        </section>


                    </main>

                </div>
            )
            break;
        case '2':
            return (

                <div className='logistic_project_4_page'
                    style={{
                        background: `radial-gradient(97.64% 97.64% at 50% 96.1%, rgba(1, 15, 31, 0) 0%, #010F1F 100%), url(${historical_project_2_page}) no-repeat center`,
                        backgroundSize: 'cover'
                    }}>

                    <header className='header_logistic_project_4'>
                        <div className='header_btn_back_container' >
                            <div className='header_btn_back_cluster' onClick={() => navigate('/cluster/3')}>
                                <Back_btn className='header_icons' />
                                <div className='header_btn_back_description'>Назад к кластеру</div>
                            </div>
                            <div className='header_btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '6.04vw' }}  >
                                <Back_home className='header_icons' />
                                <div className='header_btn_back_description'>На главную</div>
                            </div>

                        </div>
                    </header>
                    <main className='main_logistic_project_4'>
                        <section className='section_left_logistic_project_4'>
                            <div className='description_page_logistic_project_4'>
                                Возвращение моря в город. Создание единой набережной вдоль Амурского залива
                            </div>
                            <div className='_description_page_logistic_project_4'>
                            </div>
                        </section>
                        <section className='section_right_logistic_project_4'>
                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>135 млрд руб.</div>
                                {/* <div className='card_project'>шаблон карточки проекта. на фон ставим картинку</div> */}
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>54 км</div>
                                <div className='card_project'>протяженность новой набережной</div>
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>{'>10'}</div>
                                <div className='card_project'>оборудованных чистых пляжей</div>
                            </div>

                        </section>


                    </main>

                </div>

            )
            break;
        case '3':
            return (

                <div className='logistic_project_4_page'
                    style={{
                        background: `radial-gradient(97.64% 97.64% at 50% 96.1%, rgba(1, 15, 31, 0) 0%, #010F1F 100%), url(${historical_project_3_page}) no-repeat center`,
                        backgroundSize: 'cover'
                    }}
                >

                    <header className='header_logistic_project_4'>
                        <div className='header_btn_back_container' >
                            <div className='header_btn_back_cluster' onClick={() => navigate('/cluster/3')}>
                                <Back_btn className='header_icons' />
                                <div className='header_btn_back_description'>Назад к кластеру</div>
                            </div>
                            <div className='header_btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '6.04vw' }}  >
                                <Back_home className='header_icons' />
                                <div className='header_btn_back_description'>На главную</div>
                            </div>

                        </div>
                    </header>
                    <main className='main_logistic_project_4'>
                        <section className='section_left_logistic_project_4'>
                            <div className='description_page_logistic_project_4'>
                                Восстановление памятников архитектуры, благоустройство общественных пространств и центральных улиц
                            </div>
                            <div className='_description_page_logistic_project_4'>
                            </div>
                        </section>
                        <section className='section_right_logistic_project_4'>
                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>11,5 млрд руб.</div>
                                <div className='card_project'>шаблон карточки проекта. на фон ставим картинку</div>
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>16</div>
                                <div className='card_project'>благоустроенных общественных пространств</div>
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>11</div>
                                <div className='card_project'>улиц будут реконструированы</div>
                            </div>

                        </section>


                    </main>

                </div>

            )
            break;
        case '4':
            return (

                <div className='logistic_project_4_page'
                    style={{
                        background: `radial-gradient(97.64% 97.64% at 50% 96.1%, rgba(1, 15, 31, 0) 0%, #010F1F 100%), url(${historical_project_4_page}) no-repeat center`,
                        backgroundSize: 'cover'
                    }}
                >

                    <header className='header_logistic_project_4'>
                        <div className='header_btn_back_container' >
                            <div className='header_btn_back_cluster' onClick={() => navigate('/cluster/3')}>
                                <Back_btn className='header_icons' />
                                <div className='header_btn_back_description'>Назад к кластеру</div>
                            </div>
                            <div className='header_btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '6.04vw' }}  >
                                <Back_home className='header_icons' />
                                <div className='header_btn_back_description'>На главную</div>
                            </div>

                        </div>
                    </header>
                    <main className='main_logistic_project_4'>
                        <section className='section_left_logistic_project_4'>
                            <div className='description_page_logistic_project_4'>
                                Возвращение моря в город. Создание единой набережной вдоль Амурского залива
                            </div>
                            <div className='_description_page_logistic_project_4'>
                            </div>
                        </section>
                        <section className='section_right_logistic_project_4'>
                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>135 млрд руб.</div>
                                {/* <div className='card_project'>шаблон карточки проекта. на фон ставим картинку</div> */}
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>54 км</div>
                                <div className='card_project'>протяженность новой набережной</div>
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>{'>10'}</div>
                                <div className='card_project'>оборудованных чистых пляжей</div>
                            </div>

                        </section>


                    </main>

                </div>
            )

        default:
            break;
    }
}

export default ItemHistoricalProject;