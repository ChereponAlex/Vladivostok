import React from 'react';
import styled from "styled-components";
import dataSource from '../helper/dataSource';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';
// import background from '../images/background.svg';
import {ReactComponent as Cluster_1} from '../images/cluster_1.svg';
import {ReactComponent as Cluster_2} from '../images/cluster_2.svg';
import {ReactComponent as Cluster_3} from '../images/cluster_3.svg';
import {ReactComponent as Cluster_4} from '../images/cluster_4.svg';
import {ReactComponent as Cluster_5} from '../images/cluster_5.svg';
import marker_cluster_1 from '../images/marker_cluster_1.svg';
import dot_1 from '../images/dot_1.svg';
import *as icons from './icons.jsx';


// const MaterialsIcon = styled(icons).attrs({ name: "cluster_1" })`
//   fill: ${props => props.theme.colors.primary};
//   margin-right: 10px;
// `


const MapBoxContainer = () => {

    return (
        <div className='map_box-container'>
            <Cluster_1 className='cluster_1' />
            <Cluster_2 className='cluster_2' />
            <Cluster_3 className='cluster_3' />
            <Cluster_4 className='cluster_4' />
            <Cluster_5 className='cluster_5' />
       
            <img src={marker_cluster_1} alt="???" className='marker_cluster_1' />
            <img src={dot_1} alt="???" className='dot_1' />
          

            <div className='descrition_page'>
                <button class="text3d-wrap-3">
                    <span class="text3d-3">Карта агломерации Владивостока</span>
                </button>
            </div>


            {
                dataSource.map(cluster =>
                    <Link to={{
                        pathname: `/cluster/${cluster.id}`,
                        search: `?name=${encodeURI(cluster.name)}`
                    }} key={cluster.id}>
                        <button><div >{cluster.name}</div></button>

                    </Link>
                )
            }
        </div>
    )
}

export default MapBoxContainer;