import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';
import MapBoxContainer from '../components/MapBoxContainer';
import { ReactComponent as Background } from '../images/background_mainpage.svg';
// import { ReactComponent as Background } from '../images/background_mainpage_finish.svg';


const MainPage = () => {

  // функция под навигацию кластеров
  const SvgContainer = (id) => {

    const navigate = useNavigate();

    useEffect(() => {
      const changeRoute = (routeName) => {
        navigate(`/cluster/${routeName}`)
        console.log('changeRoute', routeName)
      }
      const path = document.getElementById(`path_${id}`)
      !!path && path.addEventListener('click', () => {
        console.log(id)
        changeRoute(id)
      });

      return () => {
        !!path && path.removeEventListener('click', changeRoute)
      }

    }, []);
  }

  return (
    <div className="main-page-container">
      <div className="background" />
      <Background className="background_1" onClick={SvgContainer(1)} />
    </div>
  )
}
export default MainPage;

