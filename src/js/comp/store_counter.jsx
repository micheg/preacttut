/*jshint esversion: 6 */
import { useStoreon } from 'storeon/preact';
import { h } from 'preact';
import {Animated} from "preact-animated-css";

let STRCounter = (props) =>
{
    // Counter will be re-render only on `state.count` changes
    const { dispatch, count } = useStoreon('count');
    return (
        <Animated animationIn="fadeInDownBig" animateOnMount={true} isVisible={true}>
            <div class="page">
                <div class="w3-container w3-margin-top w3-center"
                     style="border: 1px solid gray; padding:5px;">
                    <button onClick={() => dispatch('inc')}>{count}</button>
                </div>
            </div>
        </Animated>
    );
}

export default STRCounter