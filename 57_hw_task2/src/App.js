import React, {Component} from 'react';
import './App.css';
import EnterInfoBlock from './components/EnterInfoBlock/EnterInfoBlock';
import ListItemsBlock from './components/ListItemsBlock/ListItemsBlock';
import TotalSpend from './components/TotalSpend/TotalSpend';
import nanoid from 'nanoid';

class App extends Component {
  form = {};

  state = {
    tasks: [],
    taskNew: {},
    totalSpend: 0
  };
  
  addTask = event => {
    event.preventDefault();
    if(Object.keys(this.form).length === 0) return alert('Enter task');
    if(!this.state.taskNew.cost || !this.form.cost) return alert('Enter cost');
    if(!this.state.taskNew.name || !this.form.name) return alert('Enter name of task');
    if(this.form["name"].value === "" && this.form["cost"].value === "") return alert('Enter task and cost');
    
    else {
      let totalSpend = this.state.totalSpend;
      totalSpend += parseInt(this.form["cost"].value);
      this.setState(prevState => ({
        tasks: [this.state.taskNew, ...prevState.tasks], taskNew: {}, totalSpend
      }));

      this.form["name"].value = "";  
      this.form["cost"].value = "";
    }
  };

  enterNameTask = event => {
      let taskNew = this.state.taskNew;
      this.form[event.target.name] = event.target;
      taskNew = {id: nanoid(), name: event.target.value};
      this.setState({taskNew});
  };

  enterCostTask = event => {
    let taskNew = this.state.taskNew;
    if(!this.state.taskNew.name || !this.form.name) {
      event.target.value = '';
      return alert('Enter name of task');
    }
    if(isNaN(event.target.value)) {
      event.target.value = '';
      return alert('Enter number');
    }
    else {
      this.form[event.target.name] = event.target;
      taskNew['cost'] = event.target.value;
      this.setState({taskNew});
    } 
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
          name={this.enterNameTask}
          cost={this.enterCostTask}
        />
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
