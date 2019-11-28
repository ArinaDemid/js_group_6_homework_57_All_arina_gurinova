import React, {Component} from 'react';
import nanoid from 'nanoid';
import Select from 'react-select';
import EnterInfoBlock from '../EnterInfoBlock/EnterInfoBlock';
import ListItemsBlock from '../ListItemsBlock/ListItemsBlock';
import TotalSpend from '../TotalSpend/TotalSpend';
import Schedule from '../Schedule/Schedule';

const options = [
  { value: 'Entertainment', label: 'Entertainment'},
  { value: 'Car', label: 'Car'},
  { value: 'Food', label: 'Food'},
];

class AllTaskBlock extends Component {
    
  state = {
    tasks: [],
    taskNew: {id: nanoid(), name: '', cost: ''},
    totalSpend: 0,
    selectedOption: null,
    categories: {},
  };
    
  addTask = event => {
    event.preventDefault();
    
    if(this.state.selectedOption === null) return alert('Select the expense section');
    else {
      let totalSpend = this.state.totalSpend;
      totalSpend += parseInt(this.state.taskNew.cost);
      const taskNew = {...this.state.taskNew};
      taskNew['selector'] = this.state.selectedOption.value;
      
      const tasks = [...this.state.tasks];
      tasks.push(taskNew);

      let categories = {...this.state.categories};

      tasks.map(item => {
        return categories[item.selector] = tasks.filter(task => task.selector === item.selector)
          .reduce((sum, cur) => sum + parseInt(cur.cost), 0);
      });
      
      this.setState({tasks, taskNew: {id: nanoid(), name: '', cost: ''}, totalSpend, selectedOption: null, categories});
    }
  };
    
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

      let categories = {...this.state.categories};
      categories = {};

      tasks.map(item => {
        return categories[item.selector] = tasks.filter(task => task.selector === item.selector)
          .reduce((sum, cur) => sum + parseInt(cur.cost), 0);
      });
      
      this.setState({tasks, totalSpend, categories});
    };
    
    handleChange = selectedOption => {
      this.setState({ selectedOption });
    };
    
    render() {
        
      const {selectedOption} = this.state;
      
      return (
        <div className="AllTaskBlock">
          <EnterInfoBlock 
            addTask={this.addTask}
            change={this.enterTask}
            name={this.state.taskNew.name}
            cost={this.state.taskNew.cost}
          />
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
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
          <Schedule
            entertainment={this.state.categories['Entertainment'] ? this.state.categories['Entertainment']: 0}
            car={this.state.categories['Car'] ? this.state.categories['Car']: 0}
            food={this.state.categories['Food'] ? this.state.categories['Food']: 0}
            total={this.state.totalSpend}
          />
        </div>
      );
    }
}
    
export default AllTaskBlock;
    