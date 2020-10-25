/*jshint esversion: 6 */

// libs
import { h, render } from 'preact';

import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.css';

// components
import Header from './comp/header';

const App = () =>
{
    return (
        <div class="app">
            <Header/>
            <div class="page" id="doc-wrapper">
                Hello World!
            </div>
        </div>
    );
};

render(<App />, document.getElementById('root'));