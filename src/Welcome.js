import { Component } from "react";
import Props from "./components/props";
import PropsNumber from "./components/props-number";
import State from "./components/state";
import ForceUpdate from "./components/forceupdate";

class Welcome extends Component {
    render() {
        return (
            <div>
                <Props name="Quần jean" type="Skinny" color="Đen" size="L" number="1">Props 1</Props>
                <Props name="Váy" type="váy công chúa" color="Trắng" size="M" number="1">Props 2</Props>
                <State></State>
                <PropsNumber></PropsNumber>
                <ForceUpdate></ForceUpdate>
            </div>
        )
    }
}
export default Welcome;