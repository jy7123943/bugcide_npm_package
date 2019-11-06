import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { Bugcide } from '../src/index';

Bugcide.init({ projectToken: 'my-react-project-bT9Iy' });

render(<App />, document.getElementById('root'));
