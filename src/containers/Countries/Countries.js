import React, { Component } from "react";
import Chart from '../../components/Chart/Chart';
import classes from "./General.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import Spinner from "../../components/Spinner/Spinner";
import ReactGa from "react-ga";
class Countries extends Component{
    state={
      title: "Countries Results",
      value : null,
        chartData:{
            labels: ['Confirmed', 'Recovered', 'Deaths'],
            datasets:[
              {
                label:'World',
                data:null,
                backgroundColor:[
                  '#3e95cd',
                  '#66bb6a',
                  '#c45850'
                ]
                ,borderColor: "#000000",
                borderWidth: 2,
                hoverBorderWidth: 1,
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
          dailyDis: false,
          loading :false,
          countries:[]
    }
    UNSAFE_componentWillMount(){
        fetch("https://covid19.mathdro.id/api/countries",{
                    method :"GET"
                }
                ).then(res =>{
                    
                      return res.json();
                    
                }).then(resData =>{
                  let countriess = [];
                  countriess = resData.countries.map((element)=> element.name)
                  this.setState({countries : countriess})
                })
    
      
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
    ChangeInputHandler = (event)=>{
      ReactGa.event({
        category : "country",
        action : "choose a country"
      })
     this.setState({value : event.target.value,dailyDis : true})
     const value = event.target.value;
      fetch("https://covid19.mathdro.id/api/countries/"+value,{
                method :"GET"
            }
            ).then(res =>{
              if (res.status !== 200 && res.status !== 201) {
                return alert("Failed to fetch");
              }
                  return res.json();
                
            }).then(resData =>{
              if(resData){
              const updatedState = {
                ...this.state.chartData
                
              }
              updatedState.datasets[0].data.splice(0,3);
              updatedState.datasets[0].data.push(resData.confirmed.value,resData.recovered.value,resData.deaths.value);

                this.setState({loading : false,chartData: updatedState,title:value});
              }
              return;
              
            })
    }
    render(){
        return(
          
          <div  className={classes.Container} id="countries">
            {this.state.loading ? <Spinner/> : <Chart width={100}
  height={50} chartData={this.state.chartData} title={this.state.title} legendPosition="bottom" type="pie"/>}
            <SearchForm   countries={this.state.countries} changed={this.ChangeInputHandler}/>
            
             

          </div>

        );
    }
}
export default Countries;