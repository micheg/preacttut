/*jshint esversion: 6 */
import { h, Component, render } from 'preact';

class Clock extends Component
{
    constructor()
    {
        super();
        this.state = { time: Date.now() };
    }

    // Lifecycle: Called whenever our component is created
    componentDidMount()
    {
        // update time every second
        this.timer = setInterval(() =>
        {
            this.setState({ time: Date.now() });
        }, 1000);
    }

    // Lifecycle: Called just before our component will be destroyed
    componentWillUnmount()
    {
        // stop when not renderable
        clearInterval(this.timer);
    }

    render()
    {
        let time = new Date(this.state.time).toLocaleTimeString();
        return (
            <div class="w3-container w3-margin-top w3-center">
                <span>{time}</span>
            </div>
        );
    }
}

export default Clock