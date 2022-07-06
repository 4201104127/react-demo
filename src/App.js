import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Home from './components/home';
import UseContext from './components/Hooks/use-context';
import Redux from './components/redux';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App></App>}></Route>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="/state" element={<State></State>}></Route>
                    <Route path="/props" element={[
                        <Props key="1" name="Quần jean" type="Skinny" color="Đen" size="L" number="1">Props 1</Props>,
                        <Props key="2" name="Váy" type="váy công chúa" color="Trắng" size="M" number="1">Props 2</Props>]}>
                    </Route>
                    <Route path="/props-number" element={<PropsNumber></PropsNumber>}></Route>
                    <Route path="/force-update" element={<ForceUpdate></ForceUpdate>}></Route>
                    <Route path="/form" element={<Form></Form>}></Route>
                    <Route path="/condition" element={<Condition></Condition>}></Route>
                    <Route path="/key" element={<Key></Key>}></Route>
                    <Route path="/lifting-stateup" element={<ComponentCha></ComponentCha>}></Route>
                    <Route path="/calculate-money" element={<Calculator></Calculator>}></Route>
                    <Route path="/ref" element={<Ref></Ref>}></Route>
                    <Route path="/forward-ref" element={<ForwardRef></ForwardRef>}></Route>
                    <Route path="/context" element={<Context></Context>}></Route>
                    <Route path="/context-example" element={<ContextExample></ContextExample>}></Route>
                    <Route path="/render-props" element={<RenderProps></RenderProps>}></Route>
                    <Route path="/hover" element={<HoverComponent></HoverComponent>}></Route>
                    <Route path="/use-state" element={<UseState></UseState>}></Route>
                    <Route path="/use-effect" element={<UseEffect></UseEffect>}></Route>
                    <Route path="/use-context" element={<UseContext></UseContext>}></Route>
                    <Route path="/redux" element={<Redux></Redux>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
