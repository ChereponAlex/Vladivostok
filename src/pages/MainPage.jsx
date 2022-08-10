import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';
import MapBoxContainer from '../components/MapBoxContainer';
import { ReactComponent as Background } from '../images/background_mainpage.svg';
// import { ReactComponent as Background } from '../images/background_mainpage_finish.svg';
import dataClusters from '../helper/dataClusters';
import dataTransport from '../helper/dataTransport';


const MainPage = () => {

  // функция под навигацию кластеров
  // const SvgContainer = (id) => {

  //   const parseID = id[id.length - 1]
  //   console.log(parseID)

  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     const changeRoute = (routeName) => {
  //       navigate(`/cluster/${routeName}`)
  //       // console.log('changeRoute', routeName)
  //     }
  //     console.log(parseID)
  //     const path = document.getElementById(`path_${id}`)
  //     !!path && path.addEventListener('click', () => {
  //       changeRoute(id)
  //     });

  //     return () => {
  //       !!path && path.removeEventListener('click', changeRoute)
  //     }

  //   }, []);
  // }

  const navigate = useNavigate();
  const changeRoute = (id) => {
    const parseID = id[id.length -1]
    if(parseID) navigate(`/cluster/${parseID}`)
    
  }

  return (
    <div className="main-page-container">
      <div className="background" />
      <div className='description_page'>
        Карта агломерации Владивостока
      </div>
      <div className='text_sea amur_bay_position'>Амурский залив</div>
      <div className='text_sea ussuri_bay_position'>Уссурийский залив</div>

      <div className='text_city big_stone_position'>г. Большой камень</div>
      <div className='text_city artem_position'>г. Артем</div>
      <div className='text_city vladivostok_position'>г. Владивосток</div>
      <div className='text_city island_russian_position'>о. Русский</div>

      <div>
        {dataTransport.map(({ id, title, color, point }) => {
          return (

            <div key={id}>
              <div

                className={`transport_marker_block transport_marker_location_${id}`}
                style={{ background: `${color}` }}
              >
                <div style={{ position: 'relative' }}>
                  <div className='cluster_block_text'>
                    {title}
                  </div>
                  <div className={`transport_marker_line_${id}`} />
                </div>
              </div>
              <div>{point}</div>

            </div>

          )
        })}
      </div>
      <div>
        {dataClusters.map(cluster => {
          return (

            <div
              key={cluster.id}
              className={`cluster_block text_location_${cluster.id}`}
              style={{ background: `${cluster.color}` }}
            >
              <div className='cluster_block_text'>
                {cluster.title}
              </div>
            </div>
          )
        })}
        <div className='container_clusters_list'>
          <div className='descriprion_clusters_list'>КЛАСТЕРЫ</div>
          {dataClusters.map(cluster => {
            return (
              <div className='container_cluster_item' key={cluster.id}>
                <div className={`dot_cluster`} style={{ background: `${cluster.color}` }}></div>
                <div className='name_cluster_item'>{cluster.title}</div>
              </div>
            )
          })}
        </div>

        <div className='container_transport_list'>
          <div className='descriprion_clusters_list'>ТРАНСПОРТНЫЕ УЗЛЫ</div>
          {dataTransport.map(({ id, title, Icon }) => {
            return (
              <div className='container_cluster_item' key={id}>
                <Icon style={{ width: '2.76vw' }} />
                <div className='name_cluster_item' style={{ paddingLeft: '8px' }}>{title}</div>
              </div>
            )
          })}
        </div>

      </div>
      <Background className="background_1" onClick={(e) => changeRoute(e.target.id)} />
    </div>
  )
}
export default MainPage;

