import 'core-js/fn/promise'; //IE11 compatible

import 'jQuery';

import './css/site.css';

import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
let routes = RoutesModule.routes;


import 'admin-lte';

// Font Awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';
//// Ionicons
import '../node_modules/ionicons/dist/css/ionicons.css';
 //Morris chart
import '../node_modules/morris.js/morris.css';
// jvectormap
import '../node_modules/jvectormap/jquery-jvectormap.css';
// Date Picker
import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
// Daterange picker
import '../node_modules/bootstrap-daterangepicker/daterangepicker.css';

// bootstrap wysihtml5 - text editor
//import '../plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';


//react-grid-layout
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';






function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter children={ routes } basename={ baseUrl } />
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
