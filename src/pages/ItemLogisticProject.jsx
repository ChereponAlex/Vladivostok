import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logistic_project_4_page from '../images/logistic_project_4_page.svg';
import { ReactComponent as Back_btn } from '../images/backButton.svg';
import { ReactComponent as Back_home } from '../images/back_home.svg';



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
                    {/* <header className='header_logistic_project_4'>
                        <div className='header_btn_back' onClick={() => navigate('/')}>
                            <Back_btn className='123'/>
                            <div className='header_btn_back_description'>Назад к кластеру</div>
                            <Back_home style={{ paddingLeft: '0px' }} />
                            <div className='header_btn_back_description'>На главную</div>

                        </div>
                    </header> */}
                    <main className='main_logistic_project_4'>

                        {/* <section className='section_left_logistic_project_4'>
                            <div style={{color: 'white'}}>
                                Общественно-деловой центр
                                в городе Артем
                            </div>
                            <div style={{color: 'white'}}>шаблон карточки проекта. на фон ставим картинку из круга. делаем заголовок, под ним описание. справа делаем место под стоимость, параметры это драфтово так давай соберем такую карточку и тогда правда утвердим все 3 уровня по шаблонам, потом будем тогда

                            </div>
                        </section> */}

                        <section className='section_right_logistic_project_4'>
                            <div></div>
                            <div></div>
                            <div></div>

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