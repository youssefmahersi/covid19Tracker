import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  render(){
      let chart = null;
      if(this.props.type === "bar"){
          chart=(
            <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:this.props.title,
                fontSize:25
              },
              legend:{
                display:false,
                position:this.props.legendPosition
              }
            }}
          />
          )
      }
      if(this.props.type === "Line"){
          chart = (
            <Line
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:this.props.title,
                fontSize:25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
          )
      }
      if(this.props.type === "pie"){
          chart=(
            <Pie
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:this.props.title,
                fontSize:25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
          )
      }
    return (
      <div className="chart">
       {chart}
      </div>
    )
  }
}

export default Chart;