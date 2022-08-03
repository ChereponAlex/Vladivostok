import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import dataSource from '../helper/dataSource';
import { Link } from 'react-router-dom';
import encodeURI from '../utils/encodeURI';
import MapBoxContainer from '../components/MapBoxContainer';
import { ReactComponent as Background } from '../images/background_mainpage.svg';


const MainPage = () => {

  const SvgContainer = (id) => {

    const navigate = useNavigate();

    useEffect(() => {
      console.log(1)
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

    // switch (id) {
    //   case 'pink':
    //     return <Cluster_1 />
    //   case 'blue':
    //     return <Cluster_2 />
    //   case 'green':
    //     return <Cluster_3 />
    //   case 'yellow':
    //     return <Cluster_4 />
    //   case 'orange':
    //     return <Cluster_5 />
    //   default:
    //     return null
    // }

  }

  return (
    <>
      <div className="background" />
      <Background className="background_1" onClick={SvgContainer(1)} />
    </>
  )
}
export default MainPage;
{/* <div className="background_1" /> */ }
{/*<MapBoxContainer /> */ }
