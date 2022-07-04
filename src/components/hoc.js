import { Component } from "react";

const HoverOpacity = (HoverComponent) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                opacity: 1,
            };
            this.onMouseLeave = this.onMouseLeave.bind(this);
            this.onMouseEnter = this.onMouseEnter.bind(this);
        }
        onMouseEnter() {
            this.setState({
                opacity: 0.5,
            });
        }
        onMouseLeave() {
            this.setState({
                opacity: 1,
            });
        }
        render() {
            return (
                <div
                    style={{ opacity: this.state.opacity, width: "fit-content" }}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <HoverComponent />
                </div>
            );
        }
    }
}

const Image1 = (props) => {
    return <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png-icon-blue-small-size.png" alt="freetuts" />;
};

const Image2 = (props) => {
    return <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png-icon-blue-small-size.png" alt="freetuts" />;
};

const ImageWithHoverOpacity1 = HoverOpacity(Image1);
const ImageWithHoverOpacity2 = HoverOpacity(Image2);

export default class HoverComponent extends Component {
    render() {
        return (
            <>
                <ImageWithHoverOpacity1 />
                <ImageWithHoverOpacity2 />
            </>
        );
    }
}