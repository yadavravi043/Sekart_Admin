import React, { useEffect } from "react";
import RouteList from "./RouteList";
import {useDispatch} from 'react-redux'
import {getAllCategory} from './actions/category.action'
function App() {
   const dispatch=useDispatch()

  // useEffect(()=>{
  //   dispatch(getAllCategory());
  // },[])
  return (
    <div className="App">
       <>
       <RouteList/>
      </>
    </div>
  );
}

export default App;
