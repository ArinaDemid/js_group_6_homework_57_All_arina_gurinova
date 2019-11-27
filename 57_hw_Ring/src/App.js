import React, {Component} from 'react';
import './App.css';
import './components/Cell/Cell.css';
import './components/ButtonReset/ButtonReset.css';
import ButtonReset from './components/ButtonReset/ButtonReset';
import Tries from './components/Tries/Tries';
import Cell from './components/Cell/Cell';
import CellsField from './components/Cell/CellsField';

class App extends Component {

  state = {
    cells: [],
    tries: 0,
    ring: null
  };

  constructor(props) {
    super(props);
    const Cells = new CellsField();
    this.state.cells = Cells.showCells();

    const ring = Math.floor(Math.random() * 36);
    this.state.ring = ring;
  }

  resetGame = () => {
    this.resetStatus();
    const Cells = new CellsField();
    const cellsBlock = Cells.showCells();
    let cells = [...this.state.cells];
    cells = cellsBlock;
    this.setState({cells});
  };
  
  resetStatus = () => {
    let cells = this.state.cells;
    let tries = this.state.tries;
    let ring = this.state.ring;
    cells = [];
    tries = 0;
    ring = this.generatePositionRing();
    this.setState({cells, tries, ring});
  };
  
  triesAdd = (flagStatus) => {
    if(flagStatus === false) {
      let tries = this.state.tries;
      tries += 1;
      this.setState({tries});
    }
  };

  openCell = (id) => {
    const cells = [...this.state.cells];
    this.triesAdd(cells[id].flag);
    cells[id] = {id: id, flag: true};
    this.setState({cells});
  };

  generatePositionRing = () => {
    const ringPosition = Math.floor(Math.random() * 36);
    return ringPosition;
  }
  
  render() {
    
    return (
      <div className="App">
        <div className="Cells-box">
          {
            this.state.cells.map((cell) => {
              return (
                <Cell
                  key={cell.id}
                  flag={cell.flag}
                  openCell={() => this.openCell(cell.id)}
                  ring={this.state.ring}
                  id={cell.id}
                />
              )
            })
          }
          <ButtonReset
            reset={this.resetGame}
          />
          <Tries
            tries={this.state.tries}
          />
        </div>
      </div>
    );
  }
}

export default App;
