import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logistic_project_4_page from '../images/logistic_project_4_page.svg';
import { ReactComponent as Back_btn } from '../images/backButton.svg';
import { ReactComponent as Back_home } from '../images/back_home.svg';
import background from '../images/logistic_project_4_page.svg';
// import button_back from '../images/button_back.jpg'



const ItemLogisticProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    switch (id) {
        case '1':
            return 'ТОР Большой камень'
            break;
        case '2':
            return 'ССК Звезда'
            break;
        case '3':
            return 'Судохол'
            break;
        case '4':
            return (

                <div className='logistic_project_4_page'>

                    <header className='header_logistic_project_4'>
                        <div className='header_btn_back_container' >
                            <div className='header_btn_back_cluster' onClick={() => navigate('/cluster/1')}>
                                <Back_btn className='header_icons'/>
                                <div className='header_btn_back_description'>Назад к кластеру</div>
                            </div>
                            <div className='header_btn_back_cluster' onClick={() => navigate('/')} style={{marginLeft: '6.04vw'}}  >
                                <Back_home className='header_icons'/>
                                <div className='header_btn_back_description'>На главную</div>
                            </div>

                        </div>
                    </header>
                    <main className='main_logistic_project_4'>
                        <section className='section_left_logistic_project_4'>
                            <div className='description_page_logistic_project_4'>
                                Общественно-деловой центр
                                в городе Артем
                            </div>
                            <div className='_description_page_logistic_project_4'>
                                шаблон карточки проекта. на фон ставим картинку из круга. делаем заголовок, под ним описание. справа делаем место под стоимость, параметры это драфтово так давай соберем такую карточку и тогда правда утвердим все 3 уровня по шаблонам, потом будем тогда
                            </div>
                        </section>
                        <section className='section_right_logistic_project_4'>
                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>1,6 млрд руб.</div>
                                <div className='card_project'>шаблон карточки проекта. на фон ставим картинку</div>
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>12 тыс. м2</div>
                                <div className='card_project'>шаблон карточки проекта. на фон ставим картинку</div>
                            </div>

                            <div className='block_1_right_section'>
                                <div className='descriprion_card_project'>1,6 млрд руб.</div>
                                <div className='card_project'>шаблон карточки проекта. на фон ставим картинку</div>
                            </div>

                        </section>


                    </main>

                </div>
            )
            break;
        case '5':
            return 'Проект "Сухой порт"'
            break;
        case '6':
            return 'ТОР Надежденский'
            break;
        case '7':
            return 'Спутник 1'
            break;
        case '8':
            return 'Центр морских финансов'
            break;

        default:
            break;
    }
}

export default ItemLogisticProject;