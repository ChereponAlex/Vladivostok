import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import dataSource from '../helper/dataSource';
import cutOffUrl from '../utils/cutOffUrl';
const ItemCluster = () => {
    const { id } = useParams();    
    const { search } = useLocation();
    
    // const itemCluster = dataSource.filter(el => el.id === id).map(el => el.name)
    

    return (
        <>
            <div>{cutOffUrl(decodeURI(search))}</div>
            <div>{id}</div>
        </>
    )
}
export default ItemCluster;
