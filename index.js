import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { UserContextProvider } from './userContext';

ReactDOM.render(
	<UserContextProvider value={'bob123'}>
		<App />
	</UserContextProvider>,
	document.getElementById('root')
);
