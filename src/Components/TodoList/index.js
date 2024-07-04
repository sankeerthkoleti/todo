import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import { faClock} from "@fortawesome/free-regular-svg-icons";
import {v4} from 'uuid';
import { format } from 'date-fns';
import TodoItem from "../TodoItem";
import "./index.css";
class TodoList extends Component{
    state = {heading:"",description:"",list:[],active_heading:"",active_description:"",active_id:"",time:""}
    change_heading = (event)=>{
        this.setState({heading:event.target.value});
    }
    change_description = (event)=>{
        this.setState({description:event.target.value});
    }
    del = (id)=>{
        const filteredUsersData = this.state.list.filter(
            each => each.id !== id
        )
        this.setState(prevState => ({
            list: filteredUsersData,active_heading:"",active_description:"",time:""
        }))
    }
    create = ()=>{
        const now = new Date();
        const formattedTime = format(now, 'hh:mm a');
        let obj = {
            id:v4(),
            heading:this.state.heading,
            description:this.state.description,
            style:false,
            date:formattedTime
        }

        this.setState(x=>({heading:"",description:"",list:[...x.list,obj]}))
    }
    display = (details)=>{
        this.setState({active_heading:details.heading,active_description:details.description,active_id:details.id,time:details.date})
    }
    change_the_tik = ()=>{
        let {active_id} = this.state;
        this.setState(prevState => ({
            list: prevState.list.map(eachRecord => {
              if (active_id === eachRecord.id) {
                return {...eachRecord, style: !eachRecord.isFavorite}
              }
              return eachRecord
            }),
          }))
    }

    render(){
        // console.log(this.state.heading);
        // console.log(this.state.description);
        let {list} = this.state;
        return (
            
            <div className="back">
                <div className="f">
                    <div className="sub1">
                        <div className="head">
                            <FontAwesomeIcon icon={faBars} />
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <h1>Today</h1>
                        <ul>
                            {
                                list.map(x=>(<TodoItem key={x.id} details={x} display={this.display} d={this.del}/>))
                            }
                        </ul>
                    </div>
                    <div className="card2">
                        <div className="sub2">
                            <div className="t">
                                <h1 className="h1">{this.state.active_heading}</h1>
                                <div className="o">
                                    <div className="r">
                                    <FontAwesomeIcon icon={faClock} style={{color: "#afbbcf",}} />
                                    </div>
                                    
                                    <p>{this.state.time}</p>
                                </div>
                                
                            </div>
                            <p>{this.state.active_description}</p>
                            
                            {this.state.active_heading === "" ?<p className="empty">Create a Todo and click on it</p>:<button className="complete1" onClick={this.change_the_tik}>Mark complete</button>}
                        </div>
                        <div className="sub3">
                            <h1 className="todo">Create Todo</h1>
                            <input value={this.state.heading} onChange={this.change_heading} placeholder="Task name" className="input"/>
                            <textarea value={this.state.description} placeholder="Add description" onChange={this.change_description} className="des"/>
                            <button onClick={this.create} className="complete">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )


    }

}
export default TodoList;