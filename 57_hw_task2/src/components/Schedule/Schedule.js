import React from 'react';
import '../Schedule/Schedule.css';

const scheduleItems = ['entertainment', 'car', 'food'];

const Schedule = props => {
  let entertainment = 0;
  let car = 0;
  let food = 0;

  if (props.total === 0) {
    entertainment = 0;
    car = 0;
    food = 0;
  } else {
    entertainment = props.entertainment * 100 / props.total;
    car = props.car * 100 / props.total;
    food = props.food * 100 / props.total;
  }
  return (
    <div>
      <div className='ScheduleLine'>
        <div className='ScheduleLine-entertainment' style= {{width: `${entertainment}%`}}/>
        <div className='ScheduleLine-car' style= {{width: `${car}%`}}/>
        <div className='ScheduleLine-food' style= {{width: `${food}%`}}/>
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