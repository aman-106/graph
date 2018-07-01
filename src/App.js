import React, { Component } from 'react';
import Chart from 'chart.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      data: [],
    };
    this.graphType = ['bar', 'line'];
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {

    // bar chart 
    this.ctx = document.getElementById("myChart");
    var graphType = this.graphType[this.state.type];
    var dataset = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: graphType,
      data: dataset,
    });
  }

  componentDidUpdate(){
    var graphType = this.graphType[this.state.type];
    var dataset = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: graphType,
      data: dataset,
    });
  }

  handleSelect(event){
    console.log(event.target.value);
    this.setState({type:event.target.value});
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
        </p>
        <select onChange={this.handleSelect}>
          <option value="0">bar</option>
          <option value="1">Line</option>
        </select>
        <div class="chart-container" style={{ "position": "relative", "height": "40vh", "width": "80vw" }}>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    );
  }

}

export default App;



