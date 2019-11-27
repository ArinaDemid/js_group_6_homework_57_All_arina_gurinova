import React from "react";

const ButtonReset = props => {

    return (
        <button className='ButtonReset' onClick = {() => {props.reset()}}>Reset</button>
    )
};

export default ButtonReset;