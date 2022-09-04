import React from 'react';
import ItemLogisticProject from './ItemLogisticProject';
import ItemGreenProject from './itemGreenProject';
import ItemHistoricalProject from './itemHistoricalProject';
import ItemScientificProject from './itemScientificProject';
import ItemTouristicProject from './itemTouristicProject';
import ItemArtemProject from './itemArtemProject';

import { useParams } from "react-router-dom";

export const ProjectsPage = () => {
    const { clusterID } = useParams();    

    switch (clusterID) {
        case '1':
            return <ItemLogisticProject />
        case '2':
            return <ItemGreenProject/>
        case '3':
            return <ItemHistoricalProject />
        case '4':
            return <ItemScientificProject/>
        case '5':
            return <ItemTouristicProject/>
        case '6':
            return <ItemArtemProject/>
        default:
            return <></>
    }
}