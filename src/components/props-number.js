import { Component } from "react";
import PropTypes from 'prop-types';

class PropsNumber extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    <li>{this.props.type}</li>
                    <li>{this.props.public_year}</li>
                    <li>{this.props.storage}</li>
                </ul>
            </div>
        );
    }
}

PropsNumber.defaultProps = {
    name: 'iPad Mini 2019',
    type: 'iPad',
    public_year: 2019,
    storage: 64
}

PropsNumber.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(["iPhone", "iPad", "Mac", "SmartWatch"]),
    public_year: PropTypes.number,
    storage: PropTypes.number.isRequired
}

export default PropsNumber