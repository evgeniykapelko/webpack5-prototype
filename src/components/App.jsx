import React, { useState } from 'react'
import classes from './App.module.scss';
import { Outlet, Link } from 'react-router-dom';
import About from '../pages/about/About';
import imagePng from '@/assets/png.png';
import imageJpg from '@/assets/jpg.jpg';
import ImageSvg from '@/assets/svg.svg'

export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <div>
        <img src={imagePng} height={120} alt="" />
        <img src={imageJpg} height={120} alt="" />
      </div>
      <div>
        <ImageSvg height={120} width={120} fill={'green'}/>
      </div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <br />
      <span>{count}</span>
      <button className={classes.button} onClick={increment}>
        <span>increment</span>
      </button>
      <About/>
    </div>
  )
}