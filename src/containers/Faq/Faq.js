import React, { Component } from "react";
import classes from "./Faq.module.css";
import { Card } from 'react-bootstrap';
import Spinner from "../../components/Spinner/Spinner";
class Faq extends Component{
    state = {
        questions : [],
        takenQ : {
        },
        loading : false
    }
    componentDidMount(){
        this.setState({loading : true})
              fetch("https://covid19-news.herokuapp.com/api/covid19/faqs",{
                  method :"GET"
              }
              ).then(res =>{
                  
                    return res.json();
                  
              }).then(resData =>{
                let questions=resData.data.map(question => question)
                this.setState({questions : questions,loading:false})
              })
      }
    questionHandler = (event)=>{
        let question = this.state.questions.filter(question => question.question === event.target.value);
        
        this.setState({modalDis : true ,takenQ : question[0]});
    }
    render(){
        
        return(
            <div className={classes.Container}>
                
                <h1>Common questions about covid-19</h1>
                {
                    this.state.loading ? <Spinner/> : 
                    <select style={{
                      width :"90%",
                      margin : "auto"
                    }}  onChange={this.questionHandler}>
  <option  defaultValue="">Choose a question</option>
    {
      this.state.questions.map((question) =>(
        <option key={question.question} defaultValue={question.question}>{question.question}</option>
      ))
    }
      </select>
                }
                <div style={{
                    margin: "5px"
                }}> 
                
                

                {
                    this.state.modalDis ?
                    
<Card>
<div onClick={()=> this.setState({modalDis :!this.state.modalDis})}>
                    <Card.Header>{this.state.takenQ.question}</Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        
                        {this.state.takenQ.answer.length > 210 ?<p style={{fontSize :"20px"}}> {this.state.takenQ.answer.slice(0,210)}.... <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">Continue reading</a></p> :<p style={{fontSize :"20px"}}> {this.state.takenQ.answer}</p>}
                        
                        <footer className="blockquote-footer">
                          <cite title="Source Title">WHO(world health organization)</cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                    </div>   
                  </Card> 
                 
                  : null
                }
                
                </div>
                
               
            </div>
        )
    }
}
export default Faq;