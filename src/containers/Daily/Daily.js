import React, { Component } from "react";
import classes from "./Daily.module.css";
import Chart from '../../components/Chart/Chart';
import Spinner from "../../components/Spinner/Spinner";
class Daily extends Component{
    state={
        title: "Most infected countries",
          chartData:{
            labels: null,
            datasets: [{ 
                data: null,
                label: "todayCases",
                backgroundColor: "#3e95cd",borderColor: "#000000",
                borderWidth: 2,
                hoverBorderWidth: 3,
                hoverBorderColor: "#000000",
                fill: false
              }, { 
                data: null,
                label: "todayDeaths",
                backgroundColor: "#c45850",borderColor: "#000000",
                borderWidth: 2,
                hoverBorderWidth: 3,
                hoverBorderColor: "#000000",
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
            fetch("https://corona.lmao.ninja/countries",{
                method :"GET"
            }
            ).then(res =>{
                
                  return res.json();
                
            }).then(resData =>{
              let updatedState = {
                ...this.state.chartData
               }
               let newdata = [
                ...resData
               ]
               console.log(newdata)
               let a= newdata.slice(0,6);
               
              for(let i=0; i<a.length;i++){
                updatedState.labels.push(a[i].country);
                updatedState.datasets[0].data.push(a[i].todayCases);
                updatedState.datasets[1].data.push(a[i].todayDeaths);
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
  height={50} chartData={this.state.chartData} title={this.state.title} legendPosition="bottom" type="bar"/>}

</div>
)
      }

}
export default Daily;