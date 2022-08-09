import {ReactComponent as Icon_1} from '../images/transport_icon_1.svg';
import {ReactComponent as Icon_2} from '../images/transport_icon_2.svg';
import {ReactComponent as Icon_3} from '../images/transport_icon_3.svg';



const dataTransport = [
    {
        id: 1,
        title: 'Городская электричка',
        color: '#312FA3',
        Icon: Icon_1,
        point: <div className='transport_point_1' style={{background: `#312FA3`}}></div>
    },
    {
        id: 2,
        title: 'ВКАД',
        color: '#B0158A',
        Icon: Icon_2,
        point: <div className='transport_point_2' style={{background: `#B0158A`}}></div>
    },
    {
        id: 3,
        title: 'Развитие морского транспорта',
        color: '#4496B0',
        Icon: Icon_3,
        point: <div className='transport_point_3' style={{background: `#4496B0`}}></div>
    }
];

export default  dataTransport;