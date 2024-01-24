import React, { useState } from 'react'
import classes from './App.module.scss';
import { Outlet, Link } from 'react-router-dom';


export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <br />
      <span>{count}</span>
      <button className={classes.button} onClick={increment}>
        <span>increment</span>
      </button>
      <Outlet/>
    </div>
  )
}