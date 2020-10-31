/*jshint esversion: 6 */

// libs
import { h, render } from 'preact';
import 'w3-css/w3.css';
import 'animate.css';

// fontawesome icons
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.css';

// app
import App from './comp/app';

// render all
render(<App />, document.getElementById('root'));