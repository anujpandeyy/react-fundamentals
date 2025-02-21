import Avatar from "./components/Avatar";
import MyButton from "./components/Button"
import ShoppingList from "./components/ShoppingList";
import { useState } from 'react';
import Board from "./components/Square";

function App() {
  const [count,setCount] = useState(0);
  function counter(){
      setCount(count+1);
  }
 return(
  <>
  <h1>Welcome to my app</h1>
  <MyButton count={count} onClick={counter}></MyButton>
  <Avatar></Avatar>
  <ShoppingList></ShoppingList>
  <Board></Board>
  </>
 );
}

export default App
