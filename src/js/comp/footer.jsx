/*jshint esversion: 6 */
import { h } from 'preact';

const Footer = () =>
{
    return (
        <footer class="w3-container w3-teal w3-margin-top w3-bottom w3-center">
            <h5>Footer</h5>
            <a href="/">Root</a>&nbsp;<a href="/clock">Clock</a>&nbsp;<a href="/counter">Counter</a>
        </footer>
    );
};

export default Footer
