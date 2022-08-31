import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import {useDispatch,useSelector} from 'react-redux';

import {increasNum,decreasNum} from './action'


function App() {

  const dispatch =useDispatch();

  const val =useSelector((state)=>state.updown);
  return (
    <div>
       <h1>{val}</h1>

       <input type="button" value="+" onClick={()=>{dispatch(increasNum)()}}></input>
       <input type="button" value="-" onClick={()=>{dispatch(decreasNum)()}}></input>

   </div>
  )
}

export default App