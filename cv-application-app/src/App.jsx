import { useState } from "react";
import Cv from "./components/Cv";
import Form from "./components/Form";

const App = () => {
  const [firstName,setFirstName] = useState('')

  const handleClick = () {
    
  }
  
  return (
    <>
   
     <Form />
     <Cv />
    </>
  );
};

    
  
 



export default App;

