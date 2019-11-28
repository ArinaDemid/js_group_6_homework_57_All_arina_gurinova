import React from 'react';
import '../EnterInfoBlock/EnterInfoBlock.css';

const EnterInfoBlock = props => {
  return (
    <div>
      <form className="EnterInfoBlock" onSubmit={props.addTask}>
        <input name="name" required className="EnterInfoBlock-name" placeholder="Item name" onChange={props.change} value={props.name}/>
        <input name="cost" required className="EnterInfoBlock-cost" placeholder="Cost" type="number" onChange={props.change} value={props.cost}/>
        <p className="EnterInfoBlock-currency">KGZ</p>
        <button className="EnterInfoBlock-add" type="submit">Add</button>
      </form>
    </div>
  )
};

export default EnterInfoBlock;