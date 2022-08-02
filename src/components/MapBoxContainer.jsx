import React, { lazy, useEffect } from 'react';
import useHistory from 'react-router-dom';
import dataSource from '../helper/dataSource';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';


const MapBoxContainer = () => {

    return (
        <div className='map_box-container'>

            <div className='description_page'>
                Карта агломерации Владивостока
                {/* <button className="text3d-wrap-3">
                    <span className="text3d-3">Карта агломерации Владивостока</span>
                </button> */}
            </div>

            {
                dataSource.map(({ id, name, Cluster, Marker, Dot }) => {

                    return <div key={id}>
                        <Cluster id={id} className={`cluster_${id}`} />
                        <Marker className={`marker_cluster_${id}`} />
                        <Dot className={`dot_${id}`} />
                        <div className={`cluster_name_text cluster_name_position_${id}`}>{name}</div>
                    </div>

                    // return <Link to={{
                    //     pathname: `/cluster/${id}`,
                    //     search: `?name=${encodeURI(name)}`
                    // }} key={id}>
                    //     {name}

                    // </Link>
                }

                )
            }
            <div className='text_location_sea amur_bay_position'>Амурский залив</div>
            <div className='text_location_sea ussuri_bay_position'>Уссурийский залив</div>

            <div className='text_location big_stone_position'>г. Большой камень</div>
            <div className='text_location artem_position'>г. Артем</div>
            <div className='text_location vladivostok_position'>г. Владивосток</div>
            <div className='text_location island_russian_position'>о. Русский</div>


            <div className='container_clusters_list'>
                <div className='descriprion_clusters'>КЛАСТЕРЫ</div>
                {
                    dataSource.map(({ id, name, Dot_List }) =>
                        <div className='container_item_clusters_name' key={id}>
                            <Dot_List className='dot-list' />
                            <div className='name_of_cluster_list'>{name}</div>
                        </div>

                    )
                }
            </div>

        </div>
    )
}

export default MapBoxContainer;