import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back_btn_border } from '../../images/backButton_border.svg';
import { ReactComponent as Back_home_border } from '../../images/back_home_border.svg';
import InvestImg from '../../images/invest/background_invest_scroll_page.jpg';
// import { ReactComponent as Icon_scroll } from '../../images/invest/icon_scroll.svg';
// import { ReactComponent as Arrow } from '../../images/invest/arrow-left.svg';
import Icon_container from '../../images/invest/icon_scroll_container.png';
import Arrow from '../../images/invest/arrow.png';


export const AdditionalInvest = () => {

  const [scroll, setScroll] = useState(true)

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom >= window.innerHeight + 1500
  }

  const handleScroll = () => {
    const iconScroll = document.getElementById("scroll");
    if (isBottom(iconScroll)) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    const container = document.getElementById("page-cont")
    container.addEventListener("scroll", handleScroll)
    return function cleanup() {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigate = useNavigate();
  return (

    <div id='page-cont' className='container_add_invest'>
      <img
        id="scroll"
        className={"background_add_invest"}
        src={InvestImg}
      />
      <div className='btn_back_container' >
        <div className='btn_back_cluster' onClick={() => navigate('/')}>
          <Back_btn_border className='header_icons' />
        </div>
        <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }}>
          <Back_home_border className='header_icons' />
        </div>
      </div>
      {
        scroll
          ?
          <>
            <img src={Icon_container} className='icon_scroll' />
            <img src={Arrow} className='icon_arrow' />
          </>

          :
          null
      }

    </div>
  )
}

export default AdditionalInvest;