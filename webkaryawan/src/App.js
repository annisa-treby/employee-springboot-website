import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Employee from "./components/layout/Employee";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
   <Container>
       <BrowserRouter>
           <Employee/>
       </BrowserRouter>
   </Container>
  );
}

export default App;
