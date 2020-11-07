// libs
import { h, render } from 'preact';
import 'w3-css/w3.css';
import 'animate.css';

// fontawesome icons
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.css';

// app
import App from './comp/app';

// debug settings
if (process.env.NODE_ENV === 'development')
{
    console.log('a');
    // Enable preact devtools
    // eslint-disable-next-line import/no-unassigned-import
    require('preact/devtools');
}

// render all
render(<App />, document.getElementById('root'));
