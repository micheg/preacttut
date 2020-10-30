/*jshint esversion: 6 */
import { h } from 'preact';
import {Animated} from "preact-animated-css";

const Hello = (props) =>
{
    return (

        <Animated animationIn="fadeInDownBig" animateOnMount={true} isVisible={true}>
            <div class="page">
                <h4>{props.name}</h4>
            </div>
        </Animated>
    );
};

export default Hello
