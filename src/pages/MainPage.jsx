import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackgroundSVG } from "../images/background_mainpage_texts.svg";

import BackgroundMap from "../images/background_high_quality.jpg";
import dataGerbs from "../helper/dataGerbs";

const MainPage = () => {
  const navigate = useNavigate();
  const changeRoute = (id) => {
    if (id === 'invest_scroll_page') {     
      navigate(`/additional-invest`)
    }
    else if (id === 'invest_page') {
      navigate(`/information`)
    }
    else if (id === 'vkad') {
      navigate(`/vkad`)
    }
    else if (id === 'metro') {
      navigate(`/metro`)
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
        <BackgroundSVG
          className="background_svg"
          onClick={(e) => {
            changeRoute(e.target.id);
          }}
        />
        <div className={"texts"}>
          <div className={"texts_content"}>
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
