import './App.css';
import Props from "./components/props";
import PropsNumber from "./components/props-number";
import State from "./components/state";
import ForceUpdate from "./components/forceupdate";
import Form from "./components/form";
import Condition from "./components/condition";
import Key from "./components/key";
import { ComponentCha } from "./components/lifting-stateup";
import Calculator from './components/USDtoVND/calculator';
import Ref from './components/ref';
import { ForwardRef } from './components/forward-ref';
import Context from './components/context';
import ContextExample from './components/context-example';
import RenderProps from './components/render-props';
import HoverComponent from './components/hoc';
import UseState from './components/Hooks/use-state';
import UseEffect from './components/Hooks/use-effect';

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
            <Calculator></Calculator>
            <Ref></Ref>
            <ForwardRef></ForwardRef>
            <Context></Context>
            <ContextExample></ContextExample>
            <RenderProps></RenderProps>
            <HoverComponent></HoverComponent>
            <UseState></UseState>
            <UseEffect></UseEffect>
        </div>
    );
}

export default App;
