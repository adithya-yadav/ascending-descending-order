import { useState } from "react";
import AscendingOrder from "./components/Ascending";
import DescendingOrder from "./components/Descending";


function App() {
  const [showAsc,setShowAsc]=useState(true)
  const [btnAsc , setBtnAsc] = useState(true)
  const buttonClickHandler = ()=>{
    if(showAsc===true){
      setShowAsc(false)
      setBtnAsc(false)
    }else{
      setShowAsc(true)
      setBtnAsc(true)
    }
  }
  var array = [5,3,1,10,9]
  return (
   <div>
    {showAsc && <AscendingOrder array={array} value={!btnAsc ?  "Descending Order":"Ascending Order" }/>}
    {!showAsc && <DescendingOrder array={array} value={!btnAsc ?  "Descending Order":"Ascending Order" } />}
    <input type="submit" value={btnAsc ?  "Descending Order":"Ascending Order" } onClick={buttonClickHandler}/>
   </div>
  );
}

export default App;
