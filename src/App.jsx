import React,{useContext,useEffect} from 'react';
import './App.css'
import Routing from './Router.jsx'
import {auth} from "./Utility/firebase.js";
import { Type } from './Utility/action.type.js';
import { DataContext } from './Components/DataProvider/DataProvider.jsx';



function App() {
  const {dispatch, state} = useContext(DataContext);
  const {user}= state
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Routing/>
    </div>
  
  )
}

export default App
