/* eslint jsx-quotes: ["error", "prefer-double"] */

import { h } from 'preact';
import { useStoreon } from 'storeon/preact';

const Header = (props) =>
{
    const { dispatch } = useStoreon('menu_open');

    return (
        <header class="w3-bar w3-card w3-teal w3-top">
            <button class="w3-bar-item w3-button w3-xlarge w3-hover-theme" onClick={() => { dispatch('menu/click'); }} >
                <div>
                    <i id="m_ico" class="fa fa-bars" aria-hidden="true" />
                </div>
            </button>
            <h3 class="w3-bar-item" style="padding:0;">Test: {props.current}</h3>
        </header>
    );
};

export default Header;
