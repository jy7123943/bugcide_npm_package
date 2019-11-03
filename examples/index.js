import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { Bugcide } from '../src/index';

Bugcide.init({ projectToken: 'bugcidenpmpackage-comGu' });

render(<App />, document.getElementById('root'));
