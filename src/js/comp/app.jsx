/*jshint esversion: 6 */
// libs
import { h, render } from 'preact';
import { useState } from 'preact/hooks';

// components
import Hello from './hello';
import Header from './header';
import Footer from './footer';
import Counter from './counter';
import Clock from './clock';

// route
import Router from 'preact-router';

const App = () =>
{
    const [current, setCurrent] = useState('Main');

    const page_mapping =
    {
        '/': 'Main',
        '/clock': 'Clock',
        '/counter': 'Counter'
    };

    let handleRoute = (e) =>
    {
        if(e.url in page_mapping) setCurrent(page_mapping[e.url]);
    };

    return (
        <div class="app">
            <Header current={current}/>
            <Router onChange={handleRoute}>
                <Hello name="world" path="/" />
                <Clock path="/clock" />
                <Counter path="/counter" /> 
            </Router>
            <Footer/>
        </div>
    );
};
export default App