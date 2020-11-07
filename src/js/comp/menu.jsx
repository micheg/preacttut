import { h } from 'preact';
import { useStoreon } from 'storeon/preact';
import { Animated } from '@micheg/preact-animated-css-fork';

const Menu = (props) =>
{
    const { dispatch, menu_open } = useStoreon('menu_open');
    return (
        <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={menu_open} className="w3-top">
            <nav className="w3-bar-block w3-card w3-top">
                <div class="w3-teal">
                    <a id="nav_closer" href="#" class="w3-button w3-display-topright w3-xlarge" onClick={() => dispatch('menu/close')}>
                        <i class="fa fa-times" aria-hidden="true" />
                    </a>
                    <div class="w3-padding-large w3-center">
                        <img id="logo" src={props.logo} alt="msf logo" />
                    </div>
                </div>
                {
                    Object.entries(props.links).map(([key, val]) =>
                        (
                            <a key={key} className="nav_btn w3-bar-item w3-button w3-wide"
                                href={val.route} onClick={() => dispatch('menu/close')}>
                                <i class={`fa fa-${val.icon}`} aria-hidden="true" />
                                &nbsp;{val.name}
                            </a>
                        )
                    )
                }
            </nav>
        </Animated>
    );
};

export default Menu;
