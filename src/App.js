import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(
    [
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"},
    ]);

  const [newItem, setNewItem]=useState('');
  const [newPriority, setNewPriority]=useState('');

  const itemNodes = items.map((item, index)=>{
    return (
      // <li key={index} className={item.priority ? 'high' : 'low'}>
      <li key={index} className={item.priority} >
      <span>{item.name}</span>
      {/* {item.priority ? <span className='high'></span>
      : <span className='low'></span>} */}
      </li>
    );

  });

  const handleInputChange = (event) =>{
    setNewItem(event.target.value);
    // setNewPriority(items[parseInt(event.target.value)].priority);
  };
  const handlePriorityInputChange = (event) =>{
    // console.log(event.target.value);
    setNewPriority(event.target.value);
    // setNewPriority(items[parseInt(event.target.value)].priority);
  };

  const saveNewItem = (event) =>{
    event.preventDefault();

    setItems([...items, {name: newItem, priority: newPriority}]);
    setNewItem("");
  };

  return (
    <div className="App">

      <h1> ToDo's </h1>

      <form onSubmit={saveNewItem}>
        <label htmlFor='new-item'>Add new item</label>
        <input
          type='text'
          id='new-item'
          value={newItem}
          onChange = {handleInputChange}>

        </input>
      
        <label htmlFor="high">High</label>
        <input type='radio' id='high' name='priority' value="high" onChange = {handlePriorityInputChange}></input>
      
        <label htmlFor="low">Low</label>
        <input type='radio' id='low' name='priority' value='low' onChange = {handlePriorityInputChange}></input>
        <input type='submit' value='Save Item'></input>
      </form>

      <ul>
        {itemNodes}
      </ul>
    </div>

  );

}
export default App;
