/*jshint esversion: 6 */
import { h } from 'preact';

const Header = () =>
{
    return (
        <header class="w3-bar w3-card w3-theme w3-top">
            <button id="main_menu" class="w3-bar-item w3-button w3-xlarge w3-hover-theme">
                <div id="hmenu">
                    <i id="m_ico" class="fa fa-bars" aria-hidden="true" />
                </div>
            </button>
            <h3 class="w3-bar-item">Test</h3>
        </header>
    );
};

export default Header
