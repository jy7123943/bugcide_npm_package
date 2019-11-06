import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { Bugcide } from '../src/index';

Bugcide.init({ projectToken: 'my-react-new-project-LEzoc' });

render(<App />, document.getElementById('root'));
