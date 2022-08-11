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
        case '3':
            return <ItemHistoricalProject />
        default:
            return <></>
    }
}