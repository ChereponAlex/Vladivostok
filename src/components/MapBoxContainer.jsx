import React from 'react';
import dataSource from '../helper/dataSource';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';
import map from '../images/map.png';
import map2 from '../images/map2.png';
import map3 from '../images/map3.png';

import artem from '../images/artem.png';


const MapBoxContainer = () => {

    return (
        <div /* className='map_box-container' */>
            {
                dataSource.map(cluster =>
                    <Link to={{
                        pathname: `/cluster/${cluster.id}`,
                        search: `?name=${encodeURI(cluster.name)}`
                    }} key={cluster.id}>
                        <div >{cluster.name}</div>
                    </Link>
                )
            }
        </div>
    )
}

export default MapBoxContainer;