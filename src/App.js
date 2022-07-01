import './App.css';
import Props from "./components/props";
import PropsNumber from "./components/props-number";
import State from "./components/state";
import ForceUpdate from "./components/forceupdate";
import Form from "./components/form";
import Condition from "./components/condition";
import Key from "./components/key";
import { ComponentCha } from "./components/lifting-stateup";

function App() {
    return (
        <div>
            <Props name="Quần jean" type="Skinny" color="Đen" size="L" number="1">Props 1</Props>
            <Props name="Váy" type="váy công chúa" color="Trắng" size="M" number="1">Props 2</Props>
            <State></State>
            <PropsNumber></PropsNumber>
            <ForceUpdate></ForceUpdate>
            <Form></Form>
            <Condition></Condition>
            <Key></Key>
            <ComponentCha></ComponentCha>
        </div>
    );
}

export default App;
