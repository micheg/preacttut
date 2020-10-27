/*jshint esversion: 6 */
// for async
import 'regenerator-runtime/runtime';

import { h, Component, render } from 'preact';

function githubStars(repo)
{
    return new Promise(resolve =>
    {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 999));
        }, 2000);
    });
}

export default class Stars extends Component
{
    async componentDidMount()
    {
        let stars = await githubStars(this.props.repo);
        let sub_title = `☯️${await githubStars(this.props.repo)}`;
        //this.setState({ stars });
        this.setState({ sub_title });
        this.setState({ stars });
    }

    render({ repo }, { stars=0, sub_title ='' })
    {
        let url = `https://github.com/${repo}`;
        return (
            <div class="page">
                <span>{sub_title}</span>
                <a href={url} class="stars">
                    ⭐️ {stars} Stars
                </a>
            </div>
        );
    }
}
