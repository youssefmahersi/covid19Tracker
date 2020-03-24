import React, { Component } from "react";
import Chart from '../../components/Chart/Chart';
import classes from "./General.module.css";
import Spinner from "../../components/Spinner/Spinner";
class GeneralAnal extends Component{
    state={
      title: "Corona Virus Results",
        chartData:{
            labels: ['Confirmed', 'Recovered', 'Deaths'],
            datasets:[
              {
                label:'Confirmed',
                data:[],
                backgroundColor:[
                  '#3e95cd',
                  '#66bb6a',
                  '#c45850'
                ]
                ,borderColor: "#000000",
                borderWidth: 2,
                hoverBorderWidth: 3,
                hoverBorderColor: "#000000"
              }
            ]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          },
          loading: false
    }
    componentDidMount(){
      this.setState({loading : true});
            fetch("https://covid19.mathdro.id/api",{
                method :"GET"
            }
            ).then(res =>{
                
                  return res.json();
                
            }).then(resData =>{
              const updatedState = {
                ...this.state.chartData
              }
              updatedState.datasets[0].data.push(resData.confirmed.value,resData.recovered.value,resData.deaths.value);

                this.setState({loading : false,chartData : updatedState});
            })
    }
    render(){
        return(
          
          <div  className={classes.Container} >
            {this.state.loading ? <Spinner/> :<Chart width={100}
  height={50} chartData={this.state.chartData} title={this.state.title} legendPosition="bottom" type="bar"/>}

          </div>

        );
    }
}
export default GeneralAnal;