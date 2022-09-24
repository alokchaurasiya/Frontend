import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
        <h1 className='myhead' style={ { color : 'red', border : '1px solid red', backgroundColor : 'yellow' } }>Home Page</h1>
        <input className='form-control' />
        <button className='btn btn-primary'>Welcome to React</button>
    </div>
  )
}

export default Home