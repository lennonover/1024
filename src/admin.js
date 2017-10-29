import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
  render() {
    return (
      <button className="square" onClick ={this.props.onClick}>
      {this.props.value}
      </button>
    );
  }
}
class Comp extends React.Component {
  readerGrid(i){
    return <Grid  value={this.props.squares} onClick={() => this.props.onClick(i)}/>
  }
  render() {
    return (
      <div>
        <div className="board-row">
        {this.readerGrid(0)}
        {this.readerGrid(1)}
        {this.readerGrid(2)}
        </div>
        <div className="board-row">
        {this.readerGrid(3)}
        {this.readerGrid(4)}
        {this.readerGrid(5)}
        </div>
        <div className="board-row">
        {this.readerGrid(6)}
        {this.readerGrid(7)}
        {this.readerGrid(8)}
        </div>
    </div>
    );
  }
}
class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  gridClick(i){
    const square = this.state.squares.slice(0, this.state.squares.length);
    square[i] = "1";
    this.setState({
      squares: square,
    })

  }
  render(){
    return (
      <Comp squares={this.state.squares}  onClick={i => this.gridClick(i)}/>
    )
  }

}
ReactDOM.render(
    <Game  />,
    document.getElementById('root')
);