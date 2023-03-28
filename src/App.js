import React, { useEffect } from "react";
import RouteList from "./RouteList";
import {useDispatch} from 'react-redux'
import {getAllCategory} from './actions'
import { getInitialData } from "./actions";
// import {useNavigate} from 'react-router-dom'
function App() {
   const dispatch=useDispatch()
  //  const navigate=useNavigate()
  //  useEffect(() => {
  //   if (!localStorage.getItem("user")) {
  //       navigate("/signin");
  //     }
  // }, []);
  useEffect(()=>{
    // dispatch(getAllCategory());
    if (localStorage.getItem("user")) {
           dispatch(getInitialData());
          }
  },[])

  return (
    <div className="App">
       <>
       <RouteList/>
      </>
    </div>
  );
}

export default App;
