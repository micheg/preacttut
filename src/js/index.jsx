/*jshint esversion: 6 */

// libs
import { h, render } from 'preact';

// fontawesome icons
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.css';

// app
import App from './comp/app';

// render all
render(<App />, document.getElementById('root'));