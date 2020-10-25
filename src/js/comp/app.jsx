/*jshint esversion: 6 */
// libs
import { h, render } from 'preact';
import { useState } from 'preact/hooks';

// components
import Header from './header';
import Footer from './footer';
import Counter from './counter';
import Clock from './clock';

const App = () =>
{
    const [current, setCurrent] = useState('Main');
    return (
        <div class="app">
            <Header current={current}/>
            <div class="page">
                Hello World!
                <Counter start="99"/>
            </div>
            <hr/>
            <button class="w3-btn w3-white w3-border w3-border-green w3-round-xlarge"
                    onClick={() => setCurrent('pressed')}>
                Change Title
            </button>
            <hr/>
            <Clock/>
            <Footer/>
        </div>
    );
};

export default App