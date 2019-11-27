import React from 'react';
import '../EnterInfoBlock/EnterInfoBlock.css';

const EnterInfoBlock = props => {
    return (
        <div>
            <form className="EnterInfoBlock" onSubmit={props.addTask}>
                <input name="name" className="EnterInfoBlock-name" placeholder="Item name" onChange={props.name}/>
                <input name="cost" className="EnterInfoBlock-cost" placeholder="Cost" onChange={props.cost}/>
                <p className="EnterInfoBlock-currency">KGZ</p>
                <button className="EnterInfoBlock-add" type="submit">Add</button>
            </form>
        </div>
    )
};

export default EnterInfoBlock;