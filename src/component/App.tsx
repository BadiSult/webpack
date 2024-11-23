import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss'
import {  useState } from 'react'
import About from '../pages/about/About';
import imagePng from '@/assets/image.png'
import leopardjpg from '@/assets/leopard.jpg'
import LogoSvg from '@/assets/logo.svg'
 

function TODO(e:number){
    console.log('TODOFUNCTION')
}

function TODO2(){
    throw new Error()
}

export const App = () => {
    const [count, setCount] = useState(0)
    const increment = () => { 
        TODO2()
        //    setCount(count => count + 1); 
    };
    // TODO(5435)
    // if( __PLATFORM__ === 'desctop') {
    //     return <div>ISDESCTOPPLATFORM</div>
    // }
    // if( __PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    return(
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>
                platform={ __PLATFORM__}
            </h1>
            <div>
                <img width={100} height={100} src={imagePng} alt="" />
                <img width={100} height={100} src={leopardjpg} alt="" />
                 
             
            </div>
            <div>
                <LogoSvg  style={{color:'green'}} width={300} height={300}/>
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}> <span>
                ioioiosef
                </span></button>
                <About/>
        </div>
    )
}