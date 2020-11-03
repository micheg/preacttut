/* jshint esversion: 6 */
// libs
import { h } from 'preact';
import { useState } from 'preact/hooks';

// components
import Hello from './hello';
import Header from './header';
import Footer from './footer';
import Counter from './counter';
import Clock from './clock';
import Stars from './stars';
import Menu from './menu';
import STRCounter from './store_counter';

// route
import Router from 'preact-router';

import logo from '../../img/logo.png';

// a bit of style
import '../../css/oops.css';

// state management
import { StoreContext } from 'storeon/preact';

import { store } from '../store/store';
const App = () =>
{
    const [current, setCurrent] = useState('Main');

    const page_mapping =
    {
        '/': 'Main',
        '/clock': 'Clock',
        '/counter': 'Counter',
        '/stars': 'Stars'
    };

    const main_menu = [
        {
            route: '/',
            name: 'Main',
            icon: 'house-user'
        },
        {
            route: '/clock',
            name: 'Clock',
            icon: 'clock'
        },
        {
            route: '/counter',
            name: 'Counter',
            icon: 'plus-circle'
        },
        {
            route: '/stars',
            name: 'Stars',
            icon: 'star'
        },
        {
            route: '/scounter',
            name: 'State Counter',
            icon: 'plus-circle'
        }
    ];

    const handleRoute = (e) =>
    {
        if (e.url in page_mapping) setCurrent(page_mapping[e.url]);
    };

    function menuClickHanlder (evt)
    {
        console.log('AAAAA');
        window.$E = evt;
    }
    return (
        <StoreContext.Provider value={store}>
            <div class='app'>
                <Header current={current} onStateChange={menuClickHanlder} />
                <Router onChange={handleRoute}>
                    <Hello name='world' path='/' />
                    <Clock path='/clock' />
                    <Counter path='/counter' />
                    <Stars repo='test' path='/stars' />
                    <STRCounter path='/scounter' />
                </Router>
                <Footer />
                <Menu links={main_menu} logo={logo} />
            </div>
        </StoreContext.Provider>
    );
};
export default App;
