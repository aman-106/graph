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

    // empty
    this.newdataset={labels:[],values:[]};

    this.graphType = ['bar', 'line'];
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAddData = this.handleAddData.bind(this);
    this.handleCreateVisuals = this.handleCreateVisuals.bind(this);
    
  }

  componentDidMount() {
    this.label = document.getElementById("label");
    this.value = document.getElementById("value");
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

  componentDidUpdate() {
    var graphType = this.graphType[this.state.type];
    debugger;
    var dataset = {
      labels: this.state.data.labels,
      datasets: [{
        label: '# of Votes',
        data: this.state.data.values,
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: graphType,
      data: dataset,
    });
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.setState({ type: event.target.value });
  }

  handleAddData(){
    if(parseInt(this.value.value)){

    }
    this.newdataset.labels.push(this.label.value);
    this.newdataset.values.push(this.value.value);
    console.dir(this.newdataset);
  }

  handleCreateVisuals(){
    // var newState = Object.assign({},this.state);
    var data = {};
    data.labels = this.newdataset.labels;
    data.values = this.newdataset.values;
    // empty
    this.newdataset={labels:[],values:[]};
    this.setState({
      data:data,
    });
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
        <input id='label' type="text" name="label" />
        <input id='value' type="text" name="value" />
        <input type="button" value="Add Data" onClick={this.handleAddData}/>
        <input type="button" value="Create Visuals" onClick={this.handleCreateVisuals}/>
        <div class="chart-container" style={{ "position": "relative", "height": "40vh", "width": "80vw" }}>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    );
  }

}

export default App;



