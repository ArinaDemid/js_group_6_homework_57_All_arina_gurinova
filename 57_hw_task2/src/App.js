import React, {Component} from 'react';
import './App.css';
import EnterInfoBlock from './components/EnterInfoBlock/EnterInfoBlock';
import ListItemsBlock from './components/ListItemsBlock/ListItemsBlock';
import TotalSpend from './components/TotalSpend/TotalSpend';
import nanoid from 'nanoid';
import SelectBox from './components/Selector/Selector';

class App extends Component {

  state = {
    tasks: [],
    taskNew: {id: nanoid()},
    totalSpend: 0
  };
  
  addTask = event => {
    event.preventDefault();
  
      let totalSpend = this.state.totalSpend;
      totalSpend += parseInt(this.state.taskNew.cost);
      this.setState(prevState => ({
        tasks: [this.state.taskNew, ...prevState.tasks], taskNew: {id: nanoid(), name: '', cost: ''}, totalSpend
      }));
  }

  enterTask = event => {
      let taskNew = {...this.state.taskNew};
      taskNew[event.target.name] = event.target.value;
      this.setState({taskNew});
  };

  removeTask = (id) => {
    const index = this.state.tasks.findIndex(p => p.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    let totalSpend = this.state.totalSpend;
    totalSpend -= this.state.tasks[index].cost;
    this.setState({tasks, totalSpend});
  };

  render() {

    return (
      <div className="App">
        <EnterInfoBlock 
          addTask={this.addTask}
          change={this.enterTask}
          name={this.state.taskNew.name}
          cost={this.state.taskNew.cost}
        />
        <SelectBox/>
        <div className='ListItemsBlocks'>
          {
            this.state.tasks.map(task => {
              return <ListItemsBlock
                key={task.id}
                name={task.name}
                cost={task.cost}
                remove={() => this.removeTask(task.id)}
            />
            })
          }
          <TotalSpend
            total={this.state.totalSpend}
          />
        </div>
      </div>
    );
  }
}

export default App;
