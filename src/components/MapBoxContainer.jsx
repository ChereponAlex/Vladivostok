import React from 'react';
import dataSource from '../helper/dataSource';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';

import { ReactComponent as Cluster_1 } from '../images/cluster_1.svg';
import { ReactComponent as Cluster_2 } from '../images/cluster_2.svg';
import { ReactComponent as Cluster_3 } from '../images/cluster_3.svg';
import { ReactComponent as Cluster_4 } from '../images/cluster_4.svg';
import { ReactComponent as Cluster_5 } from '../images/cluster_5.svg';
import { ReactComponent as Marker_cluster_1 } from '../images/marker_cluster_1.svg';
import { ReactComponent as Marker_cluster_2 } from '../images/marker_cluster_2.svg';
import { ReactComponent as Dot_1 } from '../images/dot_1.svg';
import { ReactComponent as Dot_2 } from '../images/dot_2.svg';

const MapBoxContainer = () => {

    return (
        <div className='map_box-container'>

            <Cluster_1 className='cluster_1' />
            <Marker_cluster_1 className='marker_cluster_1' />
            <Dot_1 className='dot_1' />

            <Cluster_2 className='cluster_2' />
            <Marker_cluster_2 className='marker_cluster_2' />
            <Dot_2 className='dot_2' />


            <Cluster_3 className='cluster_3' />
            <Cluster_4 className='cluster_4' />
            <Cluster_5 className='cluster_5' />


            <div className='descrition_page'>
                <button class="text3d-wrap-3">
                    <span class="text3d-3">Карта агломерации Владивостока</span>
                </button>
            </div>
            <button className='btn-test' >Test</button>
            {
                dataSource.map(cluster =>
                    <Link to={{
                        pathname: `/cluster/${cluster.id}`,
                        search: `?name=${encodeURI(cluster.name)}`
                    }} key={cluster.id}>
                        <button className='btn'>
                            {cluster.name}
                        </button>

                    </Link>
                )
            }
        </div>
    )
}

export default MapBoxContainer;