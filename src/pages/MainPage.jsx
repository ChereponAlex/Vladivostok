import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';
import MapBoxContainer from '../components/MapBoxContainer';
import { ReactComponent as Background } from '../images/background_mainpage.svg';

import dataClusters from '../helper/dataClusters';
import dataTransport from '../helper/dataTransport';
import dataPorts from '../helper/dataPorts';
import dataInvest from '../helper/dataInvest';
import dataGerbs from '../helper/dataGerbs';


const MainPage = () => {

  const navigate = useNavigate();
  const changeRoute = (id) => {
    console.log(id)
    const parseID = id[id.length - 1]
    if (parseID) navigate(`/cluster/${parseID}`)
  }
  return (
    <div className='main-page-background'>
      <div className='description_page'>
        Развитие Владивостокской агломерации&nbsp;—&nbsp;2030 г
      </div>
      <div className="main-page-container">
        <div className="background" />

        <div className='text_sea amur_bay_position'>Амурский залив</div>
        <div className='text_sea ussuri_bay_position'>Уссурийский залив</div>

        <div className='text_city big_stone_position'>ТОР Большой камень</div>
        {/* <div className='text_city artem_position'>г. Артем</div> */}
        <div className='text_city vladivostok_position'>г. Владивосток</div>
        <div className='text_city island_russian_position'>о. Русский</div>
        <div className='text_city aeroport'>Международный аэропорт <br /> Владивосток им. В.К. Арсеньева</div>
        <div className='text_city tor_nadeschdin'>ТОР Надеждинская</div>
        <div className='text_city sanding'>мыс Песчаный</div>
        <div className='text_city bridge_elena'>мост на о. Елены</div>
        <div className='text_city island_popova'>о. Попова</div>
        <div className='text_city island_reineke'>о. Рейнеке</div>
        <div className='text_city island_naumova'>о. Наумова</div>
        <div className='text_city town_sputnik'>Город-спутник <br /> Владивостока</div>


        <div className='container_gerbs'>
          {dataGerbs.map(({ id, title, gerb }) => {
            return (

              <div className='container_gerbs_item' key={id} >
                {/* <div style={{
                    background:  `no-repeat url("${gerb}")`, 
                    width: '70px', 
                    height: '78px',
                    backgroundSize: 'cover' 
                    }}/> */}
                <img src={gerb} alt={title} style={{ /* width: '3.39vw',  */height: '4.06vw' }} />
                <div className='gerb_text' >{title}</div>
              </div>

            )
          })}
        </div>

        <div>
          {dataInvest.map(({ id, title }) => {
            return (
              <p key={id} className={`invest_text invest_location_${id}`}>
                {title}
              </p>
            )
          })}
        </div>


        <div>
          {dataPorts.map(({ id, title }) => {
            return (
              <p key={id} className={`port_text port_location_${id}`}>
                {title}
              </p>
            )
          })}
        </div>

        <div>
          {dataTransport.map(({ id, title, color, point }) => {
            return (

              <div key={id}>
                <div
                  className={`transport_marker_block transport_marker_location_${id}`}
                  style={{ background: `${color}` }}
                >
                  <div>
                    <p className='cluster_block_text'>
                      {title}
                    </p>
                    <div className={`transport_marker_line_${id}`} />
                  </div>
                </div>
              </div>

            )
          })}
        </div>

        <div>
          {dataClusters.map(cluster => {
            return (

              <div
                onClick={() => navigate(`/cluster/${cluster.id}`)}
                key={cluster.id}
                className={`cluster_block text_location_${cluster.id}`}
                style={{ background: `${cluster.color}` }}
              >
                <p className='cluster_block_text'>
                  {cluster.title}
                </p>
              </div>
            )
          })}


        </div>
        <Background className="background_1" onClick={(e) => changeRoute(e.target.id)} />
      </div>
    </div>
  )
}
export default MainPage;

// import { ReactComponent as SignRusskiy } from '../images/signRusskiy.svg'
// import { ReactComponent as BigStone } from '../images/signBigStone.svg'
// import { ReactComponent as SignArtem } from '../images/signArtem.svg'
// import { ReactComponent as SignAeroport } from '../images/signAeroport.svg'
// import { ReactComponent as IconAeroport } from '../images/icon_aeroport.svg'
// import { ReactComponent as SignVladivostok } from '../images/signVladivostok.svg'
// import { ReactComponent as SignTor } from '../images/signTOR.svg'
// import { ReactComponent as SignSanding } from '../images/sign_sanding.svg'
// import { ReactComponent as Sign_bridge_elena } from '../images/sign_bridge_elena.svg'
// import { ReactComponent as Sign_island_popova } from '../images/sign_island_popova.svg'
// import { ReactComponent as Sign_island_reineke } from '../images/sign_island_reineke.svg'
// import { ReactComponent as Sea_ways } from '../images/sea_ways.svg'
// import { ReactComponent as Land_ways } from '../images/land_ways.svg'
// import { ReactComponent as Background } from '../images/background_mainpage_finish.svg';



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
        </div> */}
{/* <SignRusskiy className="sign_russkiy" />
        <BigStone className="sign_bigstone" />
        <SignArtem className='sign_artem' />
        <SignAeroport className='sign_aeroport' />
        <IconAeroport className='icon_aeroport' />
        <SignVladivostok className='sign_vladivostok' />
        <SignTor className='sign_tor' />
        <SignSanding className='sign_sanding' />
        <Sign_bridge_elena className='sign_bridge_elena' />
        <Sign_island_popova className='sign_island_popova' />
        <Sign_island_reineke className='sign_island_reineke' /> */}