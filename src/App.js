import React, { Component } from 'react';
import Chart from 'chart.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      data: [],
      dataForGraphs:[],
    };

    // empty
    this.newdataset = { labels: [], values: [] };

    this.graphType = ['bar', 'line', 'polarArea'];
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAddData = this.handleAddData.bind(this);
    this.handleCreateVisuals = this.handleCreateVisuals.bind(this);

  }

  componentDidMount() {
    this.label = document.getElementById("label");
    this.value = document.getElementById("value");
    this.title = document.getElementById("title");
    // // bar chart 
    // this.ctx = document.getElementById("myChart");

    // var graphType = this.graphType[this.state.type];
    // var dataset = {
    //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //   datasets: [{
    //     label: 'sample graph',
    //     data: [12, 19, 3, 5, 2, 3],
    //   }]
    // };

    // var myChart = new Chart(this.ctx, {
    //   type: graphType,
    //   data: dataset,
    // });
  }

  componentDidUpdate() {
    // var graphType = this.graphType[this.state.type];
    // debugger;
    // var dataset = {
    //   labels: this.state.data.labels,
    //   datasets: [{
    //     label: this.state.data.title,
    //     data: this.state.data.values,
    //   }]
    // };

    // var myChart = new Chart(this.ctx, {
    //   type: graphType,
    //   data: dataset,
    // });
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.setState({ type: event.target.value });
  }

  handleAddData() {
    var value = parseInt(this.value.value);
    if (!isNaN(value)) {
      this.newdataset.labels.push(this.label.value);
      this.newdataset.values.push(value);

    } else {
      alert("enter valid value");
    }
    console.dir(this.newdataset);
  }

  handleCreateVisuals() {
    // var newState = Object.assign({},this.state);
    var data = {};
    data.labels = this.newdataset.labels;
    data.values = this.newdataset.values;
    data.title = this.title.value;
    data.type = this.state.type;
    // empty
    this.newdataset = { labels: [], values: [] };
    var dataForGraphs = [...this.state.dataForGraphs,data];
    debugger;
    this.setState({
      data: data,
      dataForGraphs :dataForGraphs,
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
          <option value="2">Polar</option>
        </select>
        <p>title</p>
        <input id='title' type="text" name="title" />
        <p>label</p>
        <input id='label' type="text" name="label" />
        <p>value</p>
        <input id='value' type="text" name="value" />
        <p></p>
        <input type="button" value="Add Data" onClick={this.handleAddData} />
        <input type="button" value="Create Visuals" onClick={this.handleCreateVisuals} />
        <div class="chart-container" style={{ "position": "relative", "height": "40vh", "width": "80vw" }}>
          <canvas id="myChart"></canvas>
        </div>
        <h3>previos graphs created</h3>
        {
          this.state.dataForGraphs.map((data)=>{
            return (
              <div style={{'margin':'5px'}}>
                <Graph data={data}/>
              </div>
            );
          })
        }
      </div>
    );
  }

}

function Showdata(props) {
  return (
    <div>
      {
        Array.prototype.map.call(props.data, (value) => {
          return (
            <div>{JSON.stringify(value)}</div>
          )
        })
      }
    </div>
  );

}

class Graph extends Component {

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.graphType = ['bar', 'line', 'polarArea'];
  }

  componentDidMount() {

    var graphType = this.graphType[this.props.data.type];
    var dataset = {
      labels: this.props.data.labels,
      datasets: [{
        label: this.props.data.title,
        data: this.props.data.values,
      }]
    };

    // var dataset = {
    //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //   datasets: [{
    //     label: 'sample graph',
    //     data: [12, 19, 3, 5, 2, 3],
    //   }]
    // };

    var myChart = new Chart(this.canvas.current, {
      type: graphType,
      data: dataset,
    });
  }

  render() {
    return (
      <div class="chart-container" style={{ "position": "relative", "height": "40vh", "width": "80vw" }}>
        <canvas ref={this.canvas}></canvas>
      </div>

    );
  }

}

export default App;



