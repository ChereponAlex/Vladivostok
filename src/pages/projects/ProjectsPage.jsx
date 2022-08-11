import React from 'react';
import ItemLogisticProject from './ItemLogisticProject';
import ItemHistoricalProject from './itemHistoricalProject';
import { useParams } from "react-router-dom";

export const ProjectsPage = () => {
    const { clusterID } = useParams();
    console.log(clusterID)

    switch (clusterID) {
        case '1':
            return <ItemLogisticProject />
        case '2':
            return "2"
        case '3':
            return <ItemHistoricalProject />
        case '4':
            return "4"
        case '5':
            return "5"
        case '6':
            return "6"
        default:
            return <></>
    }
}