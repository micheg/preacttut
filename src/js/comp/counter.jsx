/*jshint esversion: 6 */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Animated } from '@micheg/preact-animated-css-fork';

function Counter(props)
{
    const start_value = Number.isNaN(parseInt(props.start, 10)) ? 0 : parseInt(props.start, 10);
    const [value, setValue] = useState(start_value);
    return (
        <Animated animationIn="fadeInDownBig" animateOnMount={true} isVisible={true}>
          <div class="page">
              <div class="w3-container w3-margin-top w3-center"
                   style="border: 1px solid gray; padding:5px;">
                  <div>Counter: {value}</div><br/>
                  <a class="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-teal"
                     style="z-index:0; min-width:52px"
                     onClick={() => setValue(value + 1)}>
                     +
                  </a>&nbsp;&nbsp;&nbsp;
                  <a class="w3-button w3-large w3-circle w3-xlarge w3-ripple w3-teal"
                     style="z-index:0; min-width:52px"
                     onClick={() => setValue(value - 1)}>
                     -
                  </a>
              </div>
          </div>
        </Animated>
    );
}

export default Counter
