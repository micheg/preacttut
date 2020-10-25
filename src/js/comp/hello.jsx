/*jshint esversion: 6 */
import { h } from 'preact';

const Hello = (props) =>
{
    return (
        <div class="page">
            <h4>{props.name}</h4>
        </div>
    );
};

export default Hello
