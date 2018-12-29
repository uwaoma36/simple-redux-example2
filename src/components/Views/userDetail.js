import React,{Component} from 'react';
import {connect} from 'react-redux';

connect();

class UserDetails extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
                <div>
                    <label>Name:</label><span>{this.props.name}</span><br/>
                    <label>Age:</label><span>{this.props.age}</span><br/>
                    <label>Score:</label><span>{this.props.score}</span><br/>
                </div>
        );
    }
}

const data=(store)=>{
    return store;
}
export default connect(data)(UserDetails);