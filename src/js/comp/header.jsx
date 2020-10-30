/*jshint esversion: 6 */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useStoreon } from 'storeon/preact';

const Header = (props) =>
{
    let menu_state = 'close';
    const [value, setValue] = useState(menu_state);
    const { dispatch, count, menu_open, port} = useStoreon('bunter', 'menu_open', 'port');

    function handle_click()
    {
        const tmp = value;
        if(tmp === 'close') setValue('open');
        if(tmp === 'open') setValue('close');
        props.onStateChange(value);
        dispatch('menu/click');
    }
    return (
        <header class="w3-bar w3-card w3-teal w3-top">
            <button class="w3-bar-item w3-button w3-xlarge w3-hover-theme" onClick={handle_click}>
                <div>
                    <i id="m_ico" class="fa fa-bars" aria-hidden="true"/>
                </div>
            </button>
            <h3 class="w3-bar-item" style="padding:0;">Test: {props.current}</h3>
        </header>
    );
};

export default Header
