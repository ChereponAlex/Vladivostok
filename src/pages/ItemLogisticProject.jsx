import React from 'react';
import { useParams } from 'react-router-dom';

const ItemLogisticProject = () => {
    const { id } = useParams();

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
            return 'Общественно-деловой центр в городе Артем'
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