import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logistic_1 } from '../images/logistic_1.svg';
import { ReactComponent as Logistic_2 } from '../images/logistic_2.svg';
import { ReactComponent as Logistic_3 } from '../images/logistic_3.svg';
import { ReactComponent as Logistic_4 } from '../images/logistic_4.svg';
import { ReactComponent as Logistic_5 } from '../images/logistic_5.svg';
import { ReactComponent as Logistic_6 } from '../images/logistic_6.svg';
import { ReactComponent as Logistic_7 } from '../images/logistic_7.svg';
import { ReactComponent as Logistic_8 } from '../images/logistic_8.svg';

import { ReactComponent as Point_1 } from '../images/logistic_point_project_1.svg';
import { ReactComponent as Point_2 } from '../images/logistic_point_project_2.svg';
import { ReactComponent as Point_3 } from '../images/logistic_point_project_3.svg';
import { ReactComponent as Point_4 } from '../images/logistic_point_project_4.svg';
import { ReactComponent as Point_5 } from '../images/logistic_point_project_5.svg';
import { ReactComponent as Point_6 } from '../images/logistic_point_project_6.svg';
import { ReactComponent as Point_7 } from '../images/logistic_point_project_7.svg';
import { ReactComponent as Point_8 } from '../images/logistic_point_project_8.svg';

import { ReactComponent as Logistic_project_1 } from '../images/logistic_project_1.svg';
import { ReactComponent as Logistic_project_2 } from '../images/logistic_project_2.svg';
import { ReactComponent as Logistic_project_3 } from '../images/logistic_project_3.svg';
import { ReactComponent as Logistic_project_4 } from '../images/logistic_project_4.svg';
// import { ReactComponent as Logistic_project_5 } from '../images/Logistic_project_5.svg';
// import { ReactComponent as Logistic_project_6 } from '../images/Logistic_project_6.svg';
// import { ReactComponent as Logistic_project_7 } from '../images/Logistic_project_7.svg';
// import { ReactComponent as Logistic_project_8 } from '../images/logistic_project_8.svg';

const SvgContainer = ({id}) => {

    console.log(1)
    const navigate = useNavigate()

    useEffect(() => {
        const changeRoute = (routeID) => {
            navigate(`/cluster/1/project/${routeID}`)
            console.log('changeRpute', routeID)
        }

        const path = document.getElementById(`logistic_marker_${id}`)
        !!path && path.addEventListener('click', () => {
            changeRoute(id)
        })

        return () => {
            !!path && path.removeEventListener('click', changeRoute)
        }

    }, []);

    // switch (id) {
    //     case 1:
    //         return <Cluster_1 />
    //     case 2:
    //         return <Cluster_2 />
    //     case 3:
    //         return <Cluster_3 />
    //     case 4:
    //         return <Cluster_4 />
    //     case 5:
    //         return <Cluster_5 />
    //     default:
    //         return null
    // }

}


const dataLogisticProject = [
    {
        id: 1,
        name: 'ТОР Большой камень',
        Project: Logistic_project_1,
        Point: Point_1,
        ProjectPage: SvgContainer
    },
    {
        id: 2,
        name: 'ССК Звезда',
        Project: Logistic_project_2,
        Point: Point_2,
        ProjectPage: SvgContainer
    },
    {
        id: 3,
        name: 'Судохол',
        Project: Logistic_project_3,
        Point: Point_3
    },
    {
        id: 4,
        name: 'Общественно-деловой центр в городе Артем',
        Project: Logistic_project_4,
        Point: Point_4,
        ProjectPage: SvgContainer
    },
    {
        id: 5,
        name: 'Проект "Сухой порт"',
        Project: Logistic_5,
        Point: Point_5,
        ProjectPage: SvgContainer
    },
    {
        id: 6,
        name: 'ТОР Надежденский',
        Project: Logistic_6,
        Point: Point_6,
        ProjectPage: SvgContainer
    },
    {
        id: 7,
        name: 'Спутник 1',
        Project: Logistic_7,
        Point: Point_7,
        ProjectPage: SvgContainer
    },
    {
        id: 8,
        name: 'Центр морских финансов',
        Project: Logistic_8,
        Point: Point_8,
        ProjectPage: SvgContainer
    }
]

export default dataLogisticProject;