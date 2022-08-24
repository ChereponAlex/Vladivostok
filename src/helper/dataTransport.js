import {ReactComponent as Icon_1} from '../images/transport_icon_1.svg';
import {ReactComponent as Icon_2} from '../images/transport_icon_2.svg';
import {ReactComponent as Icon_3} from '../images/transport_icon_3.svg';



const dataTransport = [
    {
        id: 1,
        title: <p>Легкое&nbsp;метро</p>,
        color: 'rgba(137, 60, 52, 0.85)',
        Icon: Icon_1,
        point: <div className='transport_point_1' style={{background: `rgba(137, 60, 52, 0.85)`}}></div>
    },
    {
        id: 2,
        title: 'ВКАД',
        color: 'rgba(114, 68, 88, 0.85)',
        Icon: Icon_2,
        point: <div className='transport_point_2' style={{background: `rgba(114, 68, 88, 0.85)`}}></div>
    },
    // {
    //     id: 3,
    //     title: <p>Развитие морского <br/> транспорта</p>,
    //     color: '#4496B0',
    //     Icon: Icon_3,
    //     point: <div className='transport_point_3' style={{background: `#4496B0`}}></div>
    // }
];

export default  dataTransport;