import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import '../../public/assets/css/custom.scss';
import Favicon from 'react-favicon';

ReactDOM.render(
    <div>
        <Favicon url="./assets/img/favicon.png" />
        <Routes />
    </div>, document.getElementById('root'));