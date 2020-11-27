import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EventsStore from './shared/store/events.store';
import { EventsStoreContext } from './shared/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
	<EventsStoreContext.Provider value={new EventsStore()}>
		<App/>
	</EventsStoreContext.Provider>,
	document.getElementById('root')
);
