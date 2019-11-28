import React from 'react';
import '../ListItemsBlock/ListItemsBlock.css';

const ListItemsBlock = props => {
  return (
    <div className="ListItemsBlock">
      <p className="ListItemsBlock-name">{props.name}</p>
      <p className="ListItemsBlock-cost">{props.cost} KGS</p>
      <button className="ListItemsBlock-remove" onClick={props.remove}><i className="DishStatus-icon fas fa-trash-alt"></i></button>
    </div>
  )
};

export default ListItemsBlock;