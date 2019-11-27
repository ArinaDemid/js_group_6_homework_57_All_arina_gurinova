import React from "react";

const Cell = (props) => {
    let changeClass = ['Cell-grey'];

    if (props.id === props.ring && props.flag === true) {
        changeClass.push('Cell-ring');
    }

    if (props.flag === true) {
        changeClass.push('Cell-white');
    }

    return (
    <div className={changeClass.join(' ')} onClick={props.openCell}></div>
    )
};

export default Cell;