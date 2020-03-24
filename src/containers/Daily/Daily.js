import React, { Component } from "react";
import classes from "./Daily.module.css";
import Chart from '../../components/Chart/Chart';
import Spinner from "../../components/Spinner/Spinner";
class Daily extends Component{
    state={
        title: "Daily Results",
          chartData:{
            labels: null,
            datasets: [{ 
                data: null,
                label: "Confirmed",
                borderColor: "#3e95cd",
                fill: false
              }, { 
                data: null,
                label: "Recovered",
                borderColor: "#3cba9f",
                fill: false
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
            }
            ,loading : false
      }
componentDidMount(){
  this.setState({loading : true});
            fetch("https://covid19.mathdro.id/api/daily",{
                method :"GET"
            }
            ).then(res =>{
                
                  return res.json();
                
            }).then(resData =>{
              let updatedState = {
                ...this.state.chartData
               }
               let a = resData.splice(resData.length-31,resData.length);
               console.log(a)
              for(let i=0; i<a.length;i++){
                updatedState.labels.push(a[i].reportDate.slice(5,a[i].reportDate.length));
                updatedState.datasets[0].data.push(a[i].deltaConfirmed);
                updatedState.datasets[1].data.push(a[i].deltaRecovered);
              }
              
            //   resData.map(confirm => dates.push(confirm.reportDateString));
            // let confirmed = [];
            // resData.map(confirm =>confirmed.push(confirm.deltaConfirmed));
            // let recovered = [];
            // resData.map(confirm =>recovered.push(confirm.deltaRecovered));
            
                this.setState({loading : false,chartData : updatedState});
            })
}
      render(){
          return(
<div className={classes.Container} id="daily">
  {this.state.loading ? <Spinner/> : <Chart width={100}
  height={50} chartData={this.state.chartData} title={this.state.title} legendPosition="bottom" type="Line"/>}

</div>
)
      }

}
export default Daily;