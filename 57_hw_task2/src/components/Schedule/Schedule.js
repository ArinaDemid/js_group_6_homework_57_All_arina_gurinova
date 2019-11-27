import React from 'react';
import '../Schedule/Schedule.css';

const scheduleItems = ['entertainment', 'car', 'food'];

const Schedule = props => {

    let entertainment = props.entertainment * 100 / props.total;
    let car = props.car * 100 / props.total;
    let food = props.food * 100 / props.total;

    return (
        <div>
            <div className='Schedule-line'>
                <div className='entertainment' style= {{width: `${entertainment}%`}}/>
                <div className='car' style= {{width: `${car}%`}}/>
                <div className='food' style= {{width: `${food}%`}}/>
            </div>
            <div className='ScheduleDescription-block'>
                {
                    scheduleItems.map(item => {
                        return  (
                            <div key={item} className={item}>
                                <p className={item}/>
                                <p className='ScheduleDescription'>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        )
    };
    
    export default Schedule;