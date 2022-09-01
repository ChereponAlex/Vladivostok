import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import encodeURI from "../utils/encodeURI";
import MapBoxContainer from "../components/MapBoxContainer";
// import {ReactComponent as BackgroundSVG} from "../images/background_mainpage.svg";
import { ReactComponent as BackgroundSVG } from "../images/background_mainpage.svg";
import BackgroundMap from "../images/background_high_quality.jpg";

import dataClusters from "../helper/dataClusters";
import dataTransport from "../helper/dataTransport";
import dataPorts from "../helper/dataPorts";
import dataInvest from "../helper/dataInvest";
import dataGerbs from "../helper/dataGerbs";

const MainPage = () => {
  const navigate = useNavigate();
  const changeRoute = (id) => {
    if(id === 'invest_scroll_page') {
      navigate(`/additional-invest`)
    } 
    else if(id === 'invest_page') {
      navigate(`/information`)
    } 
    else {
      const parseID = id[id.length - 1];
      if (parseID) navigate(`/cluster/${parseID}`);
    }
  };
  return (
    <div className="main-page-container">
      <h1 className={"title"}>
        Развитие Владивостокской агломерации&nbsp;—&nbsp;2030 г
      </h1>
      <div className="content">
        <img
          alt={"Развитие Владивостокской агломерации – 2030 г."}
          className={"background__image"}
          src={BackgroundMap}
        />
        {/* <img
            alt={""}
            src={BackgroundSVG}
            className="background_svg"
            onClick={(e) => changeRoute(e.target.id)}
          /> */}
        <BackgroundSVG
          className="background_svg"
          onClick={(e) => changeRoute(e.target.id)}
        />
        <div className={"texts"}>
          <div className={"texts_content"}>
            <div className="text_sea amur_bay_position">Амурский залив</div>
            <div className="text_sea ussuri_bay_position">
              Уссурийский залив
            </div>

            <div className="text_city big_stone_position">Большой камень</div>
            {/* <div className='text_city artem_position'>г. Артем</div> */}
            <div className="text_city vladivostok_position">г. Владивосток</div>
            <div className="text_city island_russian_position">о. Русский</div>
            <div className="text_city aeroport">
              Международный аэропорт <br /> Владивосток им. В.К. Арсеньева
            </div>
            <div className="text_city tor_nadeschdin">ТОР Надеждинская</div>
            {/*<div className="text_city sanding">мыс Песчаный</div>*/}
            <div className="text_city bridge_elena">
              Новый мост <br /> на о. Елены
            </div>
            <div className="text_city bridge_bay_new">
              Новый мост через <br /> бух. Новика
            </div>

            <div className="text_city island_popova">о. Попова</div>
            <div className="text_city island_reineke">о. Рейнеке</div>
            <div className="text_city island_naumova">о. Наумова</div>
            <div className="text_city town_sputnik">
              Город-спутник <br /> Владивостока
            </div>

            <div className="container_gerbs">
              {dataGerbs.map(({ id, title, gerb }) => {
                return (
                  <div className="container_gerbs_item" key={id}>
                    <img
                      src={gerb}
                      alt={title}
                      style={{ width: "71px", height: "78px" }}
                    />
                    <div className="gerb_text">{title}</div>
                  </div>
                );
              })}
            </div>

            {dataInvest.map(({ id, title }) => {
              if (id && title) {
                return (
                  <p key={id} className={`invest_text invest_location_${id}`}>
                    {title}
                  </p>
                );
              }
            })}

            {dataPorts.map(({ id, title }) => {
              return (
                <p key={id} className={`port_text port_location_${id}`}>
                  {title}
                </p>
              );
            })}

            {dataTransport.map(({ id, title, color, point }) => {
              return (
                <div
                  key={id}
                  className={`transport_marker_block transport_marker_location_${id}`}
                  style={{ background: `${color}` }}
                >
                  <div className={"cluster_block_content"}>
                    <p className="cluster_block_text">{title}</p>
                    <div className={`transport_marker_line_${id}`} />
                  </div>
                </div>
              );
            })}

            {dataClusters.map((cluster) => {
              return (
                <div
                  onClick={() => navigate(`/cluster/${cluster.id}`)}
                  key={cluster.id}
                  className={`cluster_block text_location_${cluster.id}`}
                  style={{ background: `${cluster.color}` }}
                >
                  <p className="cluster_block_text">{cluster.title}</p>
                </div>
              );
            })}
            {/* <div className='container_background_svg'> */}
            {/* </div> */}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
