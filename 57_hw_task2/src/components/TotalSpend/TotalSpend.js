import React from 'react';
import '../TotalSpend/TotalSpend.css';

const TotalSpend = props => {
    return (
    <p className='TotalSpend'>Total spend: <br></br>{props.total} KGS</p>
    )
};

export default TotalSpend;