import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Cluster_1 } from '../images/cluster_1.svg';
import { ReactComponent as Marker_cluster_1 } from '../images/marker_cluster_1.svg';
import { ReactComponent as Dot_1 } from '../images/dot_1.svg';
import { ReactComponent as Dot_List_1 } from '../images/dot_list_1.svg';


import { ReactComponent as Cluster_2 } from '../images/cluster_2.svg';
import { ReactComponent as Marker_cluster_2 } from '../images/marker_cluster_2.svg';
import { ReactComponent as Dot_2 } from '../images/dot_2.svg';
import { ReactComponent as Dot_List_2 } from '../images/dot_list_2.svg';

import { ReactComponent as Cluster_3 } from '../images/cluster_3.svg';
import { ReactComponent as Marker_cluster_3 } from '../images/marker_cluster_3.svg';
import { ReactComponent as Dot_3 } from '../images/dot_3.svg';
import { ReactComponent as Dot_List_3 } from '../images/dot_list_3.svg';

import { ReactComponent as Cluster_4 } from '../images/cluster_4.svg';
import { ReactComponent as Marker_cluster_4 } from '../images/marker_cluster_4.svg';
import { ReactComponent as Dot_4 } from '../images/dot_4.svg';
import { ReactComponent as Dot_List_4 } from '../images/dot_list_4.svg';

import { ReactComponent as Cluster_5 } from '../images/cluster_5.svg';
import { ReactComponent as Marker_cluster_5 } from '../images/marker_cluster_5.svg';
import { ReactComponent as Dot_5 } from '../images/dot_5.svg';
import { ReactComponent as Dot_List_5 } from '../images/dot_list_5.svg';


const SvgContainer = ({ id }) => {

    const navigate = useNavigate()

    useEffect(() => {
        const changeRoute = (routeID) => {
            navigate(`/cluster/${routeID}`)
            console.log('changeRpute', routeID)
        }

        const path = document.getElementById(`path_${id}`)
        !!path && path.addEventListener('click', () => {
            changeRoute(id)
        })

        return () => {
            !!path && path.removeEventListener('click', changeRoute)
        }

    }, []);

    switch (id) {
        case 1:
            return <Cluster_1 />
        case 2:
            return <Cluster_2 />
        case 3:
            return <Cluster_3 />
        case 4:
            return <Cluster_4 />
        case 5:
            return <Cluster_5 />
        default:
            return null
    }

}
const dataSource =
    [
        {
            id: 1,
            name: "Логистически-производственный пояс",
            Cluster: SvgContainer,
            Marker: Marker_cluster_1,
            Dot: Dot_1,
            Dot_List: Dot_List_1
        },
        {
            id: 2,
            name: "Рекреационно-оздоровительный кластер",
            Cluster: SvgContainer,
            Marker: Marker_cluster_2,
            Dot: Dot_2,
            Dot_List: Dot_List_2
        },
        {
            id: 3,
            name: "Рекреационно-оздоровительный кластер",
            Cluster: SvgContainer,
            Marker: Marker_cluster_3,
            Dot: Dot_3,
            Dot_List: Dot_List_3
        },
        {
            id: 4,
            name: "ТОР Надеждинское",
            Cluster: SvgContainer,
            Marker: Marker_cluster_4,
            Dot: Dot_4,
            Dot_List: Dot_List_4
        },
        {
            id: 5,
            name: "Логистически-производственный пояс",
            Cluster: SvgContainer,
            Marker: Marker_cluster_5,
            Dot: Dot_5,
            Dot_List: Dot_List_5
        },

    ]

export default dataSource;