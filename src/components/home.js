import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to="/state">state</Link><br></br>
            <Link to="/props">props</Link><br></br>
            <Link to="/props-number">props-number</Link><br></br>
            <Link to="/force-update">force-update</Link><br></br>
            <Link to="/form">form</Link><br></br>
            <Link to="/condition">condition</Link><br></br>
            <Link to="/key">key</Link><br></br>
            <Link to="/lifting-stateup">lifting-stateup</Link><br></br>
            <Link to="/calculate-money">calculate-money</Link><br></br>
            <Link to="/ref">ref</Link><br></br>
            <Link to="/forward-ref">forward-ref</Link><br></br>
            <Link to="/context">context</Link><br></br>
            <Link to="/context-example">context-example</Link><br></br>
            <Link to="/render-props">render-props</Link><br></br>
            <Link to="/hover">hover</Link><br></br>
            <Link to="/use-state">use-state</Link><br></br>
            <Link to="/use-effect">use-effect</Link><br></br>
            <Link to="/use-context">use-context</Link><br></br>
            <Link to="/redux">redux</Link><br></br>
        </div>
    )
}
