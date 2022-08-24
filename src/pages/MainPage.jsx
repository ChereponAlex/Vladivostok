import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';
import MapBoxContainer from '../components/MapBoxContainer';
import { ReactComponent as Background } from '../images/background_mainpage.svg';
import { ReactComponent as SignRusskiy } from '../images/signRusskiy.svg'
import { ReactComponent as BigStone } from '../images/signBigStone.svg'
import { ReactComponent as SignArtem } from '../images/signArtem.svg'
import { ReactComponent as SignAeroport } from '../images/signAeroport.svg'
import { ReactComponent as IconAeroport } from '../images/icon_aeroport.svg'
import { ReactComponent as SignVladivostok } from '../images/signVladivostok.svg'
import { ReactComponent as SignTor } from '../images/signTOR.svg'
import { ReactComponent as SignSanding } from '../images/sign_sanding.svg'
import { ReactComponent as Sign_bridge_elena } from '../images/sign_bridge_elena.svg'
import { ReactComponent as Sign_island_popova } from '../images/sign_island_popova.svg'
import { ReactComponent as Sign_island_reineke} from '../images/sign_island_reineke.svg'
import { ReactComponent as Sea_ways} from '../images/sea_ways.svg'
import { ReactComponent as Land_ways} from '../images/land_ways.svg'












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
    console.log(id)
    const parseID = id[id.length - 1]
    if (parseID) navigate(`/cluster/${parseID}`)

  }
  

  return (
    <div className="main-page-container">
      <div className="background" />
      <div className='description_page'>
        Развитие Владивостокской агломерации — 2030 г
        {/* Развитие Владивостокской агломерации&nbsp;к&nbsp;2030 г */}
      </div>
      <div className='text_sea amur_bay_position'>Амурский залив</div>
      <div className='text_sea ussuri_bay_position'>Уссурийский залив</div>

      <div className='text_city big_stone_position'>ТОР Большой камень</div>
      <div className='text_city artem_position'>г. Артем</div>
      <div className='text_city vladivostok_position'>г. Владивосток</div>
      <div className='text_city island_russian_position'>о. Русский</div>

      <div className='text_city aeroport'>Аэропорт (Кневичи) имени В.К. Арсеньева</div>
      <div className='text_city tor_nadeschdin'>ТОР Надеждинская</div>
      <div className='text_city sanding'>мыс Песчаный</div>
      <div className='text_city bridge_elena'>мост на о. Елены</div>
      <div className='text_city island_popova'>о. Попова</div>
      <div className='text_city island_reineke'>о. Рейнеке</div>




      <div>
        {dataTransport.map(({ id, title, color, point }) => {
          return (

            <div key={id}>
              <div

                className={`transport_marker_block transport_marker_location_${id}`}
                style={{ background: `${color}` }}
              >
                <div /* style={{ position: 'relative' }} */>
                  <div className='cluster_block_text'>
                    {title}
                  </div>
                  <div className={`transport_marker_line_${id}`} />
                </div>
              </div>
              {/* <div>{point}</div> */}

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
        {/* <div className='container_clusters_list'>
          <div className='descriprion_clusters_list'>КЛАСТЕРЫ</div>
          {dataClusters.map(cluster => {
            return (
              <div className='container_cluster_item' key={cluster.id}>
                <div className={`dot_cluster`} style={{ background: `${cluster.color}` }}></div>
                <div className='name_cluster_item'>{cluster.title}</div>
              </div>
            )
          })}
        </div> */}

        {/* <div className='container_transport_list'>
          <div className='descriprion_clusters_list'>ТРАНСПОРТНЫЕ УЗЛЫ</div>
          {dataTransport.map(({ id, title, Icon }) => {
            return (
              <div className='container_cluster_item' key={id}>
                <Icon style={{ width: '2.76vw' }} />
                <div className='name_cluster_item' style={{ paddingLeft: '8px' }}>{title}</div>
              </div>
            )
          })}
        </div> */}

      </div>
      <Background className="background_1" onClick={(e) => changeRoute(e.target.id)} />
      <SignRusskiy className="sign_russkiy" />
      <BigStone className="sign_bigstone" />
      <SignArtem className='sign_artem' />
      <SignAeroport className='sign_aeroport' />
      <IconAeroport className='icon_aeroport' />
      <SignVladivostok className='sign_vladivostok' />
      <SignTor className='sign_tor' />
      <SignSanding className='sign_sanding'/>
      <Sign_bridge_elena className='sign_bridge_elena'/>
      <Sign_island_popova className='sign_island_popova'/>
      <Sign_island_reineke className='sign_island_reineke'/>
      <Sea_ways className='sea_ways'/>
      <Land_ways className='land_ways'/>
    </div>
  )
}
export default MainPage;

